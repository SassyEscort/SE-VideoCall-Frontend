'use client';

import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React from 'react';
import {
  BasicDetailsConatiner,
  ButtonContainer,
  CloumnContainer,
  DocumentLeftContainer,
  DocumentSecondConatiner,
  DocumentsConatiner,
  EditButton,
  FirstColumnContainer,
  FontIdRight,
  ForMainContainer,
  IDnumber,
  IDtype,
  LeftCloumnConatinerGap,
  MainContainer,
  Passport,
  RightSideConatiner,
  RightSideConatinerGap,
  SecondColumnContainer,
  SecondMainContainer,
  ThreeMainContainer,
  UpConatiner
} from './ModelReviewDetails.styled';
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const ModelReviewDetails = () => {
  return (
    <MainContainer>
      <DocumentSecondConatiner>
        <UpConatiner>
          <SecondMainContainer>
            <UINewTypography variant="h2" color={'text.primary'}>
              <FormattedMessage id="ReviewYourDetails" />
            </UINewTypography>
            <UINewTypography variant="bodyRegular" color={'text.secondary'}>
              <FormattedMessage id="MakesureYouFilled" />
            </UINewTypography>
          </SecondMainContainer>

          <ThreeMainContainer>
            <ForMainContainer>
              <BasicDetailsConatiner>
                <UINewTypography variant="h6" color={'text.primary'}>
                  <FormattedMessage id="BasicDetails" />
                </UINewTypography>
              </BasicDetailsConatiner>
              <FirstColumnContainer>
                <SecondColumnContainer>
                  <CloumnContainer>
                    <LeftCloumnConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="YourGender" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        Female
                      </UINewTypography>
                    </LeftCloumnConatinerGap>
                    <LeftCloumnConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="Country" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        Netherland
                      </UINewTypography>
                    </LeftCloumnConatinerGap>
                    <LeftCloumnConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="DOB" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        30/12/1990
                      </UINewTypography>
                    </LeftCloumnConatinerGap>
                    <LeftCloumnConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="Nationality" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        Dutch
                      </UINewTypography>
                    </LeftCloumnConatinerGap>
                  </CloumnContainer>
                  <RightSideConatiner>
                    <RightSideConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="Name" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        Aesha Finn
                      </UINewTypography>
                    </RightSideConatinerGap>
                    <RightSideConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="Bio" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        Life is short. Take the trip, buy the shoes, eat the cake, and LOVE ❤️.
                      </UINewTypography>
                    </RightSideConatinerGap>
                    <RightSideConatinerGap>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        <FormattedMessage id="Language" />
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                        English, Spanish
                      </UINewTypography>
                    </RightSideConatinerGap>
                  </RightSideConatiner>
                </SecondColumnContainer>
              </FirstColumnContainer>
            </ForMainContainer>
            <ButtonContainer>
              <UIThemeButton variant="outlined">
                <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                  <FormattedMessage id="Edit" />
                </UINewTypography>
              </UIThemeButton>
            </ButtonContainer>
          </ThreeMainContainer>
        </UpConatiner>

        <DocumentsConatiner>
          <Box sx={{ display: 'flex', flexDirection: 'cloumn', gap: 6, width: '100%' }}>
            <DocumentLeftContainer>
              <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                <FormattedMessage id="Documents" />
              </UINewTypography>
              <IDtype>
                <Passport>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="IdType" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      Passport
                    </UINewTypography>
                  </Box>
                  <IDnumber>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="IdNumber" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      23456789875
                    </UINewTypography>
                  </IDnumber>
                </Passport>
                <FontIdRight>
                  <Box>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="IdFront" />
                    </UINewTypography>
                  </Box>
                  <Box>
                    <img src="images/model/passport_img.webp" />
                  </Box>
                </FontIdRight>
              </IDtype>
            </DocumentLeftContainer>
          </Box>
          <EditButton>
            <UIThemeButton variant="outlined">
              <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                <FormattedMessage id="Edit" />
              </UINewTypography>
            </UIThemeButton>
          </EditButton>
        </DocumentsConatiner>
      </DocumentSecondConatiner>
    </MainContainer>
  );
};

export default ModelReviewDetails;
