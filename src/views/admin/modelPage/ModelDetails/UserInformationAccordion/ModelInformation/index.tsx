import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import PersonalDetailsBox from './PersonalDetailsBox';
import { calculateAge } from 'constants/adminAgeCalculate';
import { ModelInformationBox, ModelInformationContentBox } from './ModelInformation.styled';

const ModelInformation = ({ modelData }: { modelData: ModelDetailsRes }) => {
  return (
    <ModelInformationBox gap={modelData?.data ? 3 : 0}>
      <UINewTypography variant="bodyLight">{modelData?.data ? modelData?.data?.bio : ''}</UINewTypography>
      {modelData?.data && (
        <ModelInformationContentBox>
          <PersonalDetailsBox label="Name" value={modelData?.data ? modelData?.data?.name : ''} />
          <PersonalDetailsBox label="Email" value={modelData?.data ? modelData?.data?.email : ''} />
          <PersonalDetailsBox label="Age" value={modelData?.data ? calculateAge(modelData?.data?.dob) : ''} />
          <PersonalDetailsBox label="Gender" value={modelData?.data ? modelData?.data?.gender : ''} />
          <PersonalDetailsBox label="Country" value={modelData.data ? modelData?.data?.country?.name : ''} />
        </ModelInformationContentBox>
      )}
    </ModelInformationBox>
  );
};

export default ModelInformation;
