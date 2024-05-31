'use client';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useMemo, useState } from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { UIDashboardSelect } from 'components/UIComponents/UIDashboardSelect';
import { FormattedMessage } from 'react-intl';
import Divider from '@mui/material/Divider';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { TokenIdType } from 'views/protectedModelViews/verification';
import UploadImage from 'views/protectedModelViews/verification/stepThree/uploadImage';
import VerificationStepOne from 'views/protectedModelViews/verification/stepOne';
import DashboardPriceView from '../dashboardPriceView';

const profileMenuList = [
  { menuName: <FormattedMessage id="Profile" />, id: 0 },
  { menuName: <FormattedMessage id="ProfileDetails" />, id: 1 },
  { menuName: <FormattedMessage id="Prices" />, id: 2 }
];

const MobileSidebar = ({
  modelDetails,
  token,
  handleModelApiChange
}: {
  modelDetails: ModelDetailsResponse;
  token: TokenIdType;
  handleModelApiChange: () => void;
}) => {
  const [menuId, setMenuId] = useState(0);
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
    <FormControl id="age" sx={{ width: '100%', maxWidth: '365px' }}>
      <UIDashboardSelect MenuProps={{ disableScrollLock: true }} name="age" labelId="age" IconComponent={ExpandMore}>
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
      </UIDashboardSelect>
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
        <DashboardPriceView token={token} />
      )}
    </FormControl>
  );
};

export default MobileSidebar;
