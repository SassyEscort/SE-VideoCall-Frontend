'use client';
import React from 'react';
import { ContactContainer, ContactUs, UINewTypographyMainText } from '../faqPage/faqPage.style';
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from '../guestLayout/homeContainer';
import { FirstBoxMainContainer, FirstTextContainer, PrivacyPolicyMainContainer } from './privacyPolicy.styled';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyMainContainer>
      <ContactContainer>
        <ContactUs>
          <UINewTypographyMainText>
            <FormattedMessage id="PrivacyPoli" />
          </UINewTypographyMainText>
        </ContactUs>
      </ContactContainer>
      <HomeMainContainer>
        <FirstBoxMainContainer>
          <Box>
            <FirstTextContainer color="secondary.100">
              1. <FormattedMessage id="Introduction" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WelcomeToFlirtbate" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              2. <FormattedMessage id="InformationWeCollect" />
            </FirstTextContainer>
            <Box mt={3}>
              <li>
                <FirstTextContainer variant="bodyLight" color="secondary.100" gutterBottom>
                  <FormattedMessage id="PersonalInformation" />{' '}
                  <span style={{ color: theme.palette.secondary[200] }}>
                    <FormattedMessage id="WhenYouRegisterForAnAccount" />
                  </span>
                </FirstTextContainer>
              </li>
              <li>
                <FirstTextContainer variant="bodyLight" color="secondary.100" gutterBottom>
                  <FormattedMessage id="UsageData" />{' '}
                  <span style={{ color: theme.palette.secondary[200] }}>
                    <FormattedMessage id="WeCollectDataOnHow" />
                  </span>
                </FirstTextContainer>
              </li>
              <li>
                <FirstTextContainer variant="bodyLight" color="secondary.100" gutterBottom>
                  <FormattedMessage id="DeviceInformation" />{' '}
                  <span style={{ color: theme.palette.secondary[200] }}>
                    <FormattedMessage id="WeMayCollectInformationAbout" />
                  </span>
                </FirstTextContainer>
              </li>
              <li>
                <FirstTextContainer variant="bodyLight" color="secondary.100" gutterBottom>
                  <FormattedMessage id="CookiesAndTrackingTechnologies" />{' '}
                  <span style={{ color: theme.palette.secondary[200] }}>
                    <FormattedMessage id="WeUseCookiesAndSimilarTracking" />
                  </span>
                </FirstTextContainer>
              </li>
            </Box>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              3. <FormattedMessage id="UseOfInformation" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeUseTheCollectedInformation" />
            </UINewTypography>
            <Box mt={3}>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ToProvideAndMaintain" />{' '}
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ToImproveAndPersonalize" />{' '}
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ToCommunicateWithYou" />{' '}
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ToMonitorAndAnalyze" />{' '}
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ToProtectTheSecurityAndIntegrity" />{' '}
                </UINewTypography>
              </li>
            </Box>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              4. <FormattedMessage id="SharingOfInformation" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeDoNotShareYourPersonal" />
            </UINewTypography>
            <Box mt={3}>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="WithYourConsent" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ToComplyWithLegal" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="WithServiceProviders" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="InConnectionWithAnyMerger" />{' '}
                </UINewTypography>
              </li>
            </Box>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              5. <FormattedMessage id="DataSecurity" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeImplementAVarietyOfSecurity" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              6. <FormattedMessage id="DataRetention" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeRetainYourPersonal" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              7. <FormattedMessage id="YourRights" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouHaveTheRight" />
            </UINewTypography>
            <Box mt={3}>
              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="AccessThePersonal" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="RequestCorrection" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="RequestDeletion" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="ObjectToThe" />{' '}
                </UINewTypography>
              </li>

              <li>
                <UINewTypography variant="bodyLight" color="secondary.200" gutterBottom>
                  <FormattedMessage id="WithdrawYourConsent" />{' '}
                </UINewTypography>
              </li>
            </Box>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              8. <FormattedMessage id="ThirdPartyServices" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="OurServicesMayInclude" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              9. <FormattedMessage id="ChangesToThisPrivacy" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeMayUpdateThisPrivacy" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              10. <FormattedMessage id="ContactUs" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="IfYouHaveAnyQuestions" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <span style={{ color: theme.palette.secondary[100] }}>
                <FormattedMessage id="TutubiBV" />
              </span>
              {'  '} <FormattedMessage id="Amstel" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <span style={{ color: theme.palette.secondary[100] }}>
                <FormattedMessage id="Emailp" />
              </span>
              {'  '}
              <Link href="mailto:support@flirtbate.com"> support@flirtbate.com</Link>
            </UINewTypography>
          </Box>
        </FirstBoxMainContainer>
      </HomeMainContainer>
    </PrivacyPolicyMainContainer>
  );
};

export default PrivacyPolicy;
