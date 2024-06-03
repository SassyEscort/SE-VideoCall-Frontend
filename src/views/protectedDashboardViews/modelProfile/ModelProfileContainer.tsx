'use client';
import { MenuItem, Divider } from '@mui/material';
import { SidebarDropDownMainContainer } from '../sidebarDropDown/SidebarDropDown.styled';
import { useMemo, useState } from 'react';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { TokenIdType } from 'views/protectedModelViews/verification';
import UploadImage from 'views/protectedModelViews/verification/stepThree/uploadImage';
import Box from '@mui/system/Box';
import VerificationStepOne from 'views/protectedModelViews/verification/stepOne';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import DashboardPriceView from '../dashboardPriceView';
import { FormattedMessage } from 'react-intl';

const profileMenuList = [
  { menuName: <FormattedMessage id="Photos" />, id: 0 },
  { menuName: <FormattedMessage id="ProfileDetails" />, id: 1 },
  { menuName: <FormattedMessage id="Prices" />, id: 2 }
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

  const [menuId, setMenuId] = useState(verificationCode ? 1 : 0);

  const handleMenu = (id: number) => {
    setMenuId(id);
  };

  const handleSave = () => {
    setMenuId(0);
  };

  const handleSaveDetails = () => {
    setMenuId(1);
  };

  const modelPhotos = useMemo(() => modelDetails?.photos?.filter((data) => !data.is_document), [modelDetails?.photos]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
      <Box display="flex">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
              <UINewTypography variant="h5" color="text.secondary" ml="24px" mt={3.93}>
                <FormattedMessage id="MyProfile" />
              </UINewTypography>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700', width: '100%' }} />
            </Box>
            <SidebarDropDownMainContainer>
              {profileMenuList.map((list, index) => (
                <>
                  <MenuItem onClick={() => handleMenu(list.id)} key={index}>
                    {menuId === index ? (
                      <UINewTypography variant="buttonLargeMenu" color="primary.400">
                        {list.menuName}
                      </UINewTypography>
                    ) : (
                      <UINewTypography variant="buttonLargeMenu">{list.menuName}</UINewTypography>
                    )}
                  </MenuItem>
                  <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                </>
              ))}
            </SidebarDropDownMainContainer>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
        </Box>
        <Box sx={{ display: 'flex', ml: 1 }}>
          {menuId === 0 ? (
            <UploadImage
              isEdit={true}
              workerPhotos={modelPhotos ?? []}
              token={token}
              handleModelApiChange={handleModelApiChange}
              handleNext={handleSave}
            />
          ) : menuId === 1 ? (
            <VerificationStepOne
              isEdit={true}
              modelDetails={modelDetails}
              token={token}
              handleNext={handleSaveDetails}
              handleModelApiChange={handleModelApiChange}
            />
          ) : (
            <DashboardPriceView token={token} modelDetails={modelDetails} handleModelApiChange={handleModelApiChange} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ModelProfileContainer;
