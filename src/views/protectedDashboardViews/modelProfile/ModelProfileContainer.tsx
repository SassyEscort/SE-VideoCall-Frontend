'use client';
import { MenuItem, Divider } from '@mui/material';
import { LoadingBoxFullScreen, SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import React, { useMemo, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TokenIdType } from 'views/protectedModelViews/verification';
import UploadImage from 'views/protectedModelViews/verification/stepThree/uploadImage';
import Box from '@mui/system/Box';
import VerificationStepOne from 'views/protectedModelViews/verification/stepOne';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import DashboardPriceView from '../dashboardPriceView';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@mui/material/CircularProgress';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import DocumentMainContainer from 'views/protectedModelViews/verification/documentContainer';

const profileMenuList = [
  { menuName: <FormattedMessage id="Photos" />, id: 0 },
  { menuName: <FormattedMessage id="ProfileDetails" />, id: 1 },
  { menuName: <FormattedMessage id="Prices" />, id: 2 },
  { menuName: <FormattedMessage id="Documents" />, id: 3 }
];

const ModelProfileContainer = ({
  modelDetails,
  token,
  handleModelApiChange
}: {
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  handleModelApiChange: () => void;
}) => {
  const url = new URL(window.location.href);
  const verificationCode = url.searchParams.get('code');
  const [isLoading, setIsLoading] = useState(false);
  const [menuId, setMenuId] = useState(verificationCode ? 1 : 0);

  const { handelNameChange } = useCallFeatureContext();
  const handleMenu = (id: number) => {
    setIsLoading(true);
    setMenuId(id);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simula un tiempo de carga
  };

  const handleSave = () => {
    setMenuId(0);
  };

  const handleSaveDetails = () => {
    setMenuId(1);
    handelNameChange();
  };

  const modelPhotos = useMemo(() => modelDetails?.photos?.filter((data) => !data.is_document), [modelDetails?.photos]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
      <Box display="flex" width="100%">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '62px' }}>
              <UINewTypography variant="h5" lineHeight="125%" color="text.secondary" ml="24px" mt={6}>
                <FormattedMessage id="MyProfile" />
              </UINewTypography>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700', width: '100%' }} />
            </Box>
            <SidebarDropDownMainContainer>
              {profileMenuList?.map((list, index) => (
                <React.Fragment key={index}>
                  <MenuItem onClick={() => handleMenu(list.id)} key={index} sx={{ paddingLeft: '0', py: '12px' }}>
                    {menuId === list.id ? (
                      <UINewTypography variant="buttonLargeMenu" color="primary.400">
                        {list.menuName}
                      </UINewTypography>
                    ) : (
                      <UINewTypography variant="buttonLargeMenu">{list.menuName}</UINewTypography>
                    )}
                  </MenuItem>
                  {index !== profileMenuList.length - 1 && (
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                  )}
                </React.Fragment>
              ))}
            </SidebarDropDownMainContainer>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
        </Box>
        <Box sx={{ display: 'flex', ml: 1, width: '100%' }}>
          {isLoading ? (
            <LoadingBoxFullScreen>
              <CircularProgress />
            </LoadingBoxFullScreen>
          ) : menuId === 0 ? (
            <UploadImage
              isEdit={true}
              workerPhotos={modelPhotos ?? []}
              token={token}
              handleModelApiChange={handleModelApiChange}
              handleNext={handleSave}
              isReviewEdit={false}
              modelProfileStatus={modelDetails?.profile_status ?? ''}
            />
          ) : menuId === 1 ? (
            <VerificationStepOne
              isEdit={true}
              modelDetails={modelDetails}
              token={token}
              handleNext={handleSaveDetails}
              handleModelApiChange={handleModelApiChange}
              isReviewEdit={false}
            />
          ) : menuId === 2 ? (
            <DashboardPriceView token={token} modelDetails={modelDetails} handleModelApiChange={handleModelApiChange} isEdit={true} />
          ) : (
            <DocumentMainContainer
              handleModelApiChange={handleModelApiChange}
              token={token}
              activeStep={0}
              modelDetails={modelDetails ?? ({} as ModelDetailsResponse)}
              isReviewEdit={false}
              isDashboard={true}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ModelProfileContainer;
