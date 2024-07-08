'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FirstBoxMainContainer, FirstTextContainer, TermsAndConditionMainContainer } from './TermasAndConditionPage.styled';
import HomeMainContainer from '../guestLayout/homeContainer';
import { ContactContainer, ContactUs, UINewTypographyMainText } from '../faqPage/faqPage.style';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';

const TermaAndCondition = () => {
  return (
    <TermsAndConditionMainContainer>
      <ContactContainer>
        <ContactUs>
          <UINewTypographyMainText>
            <FormattedMessage id="TermsAndConditions" />
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
              <FormattedMessage id="FlirtbateComisAService" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="OurCommitmentIsTo" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ByUsingOurAppsAndService" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="AnyTranslationOfTheseTerms" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              2. <FormattedMessage id="TheServiceAndGeneralLimitationsOfUse" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TheServiceIsAvailable" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TheAssortmentOfContent" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ContentTypesAndDescriptions" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAgreeNotToUseOrLaunch" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAgreeToOnlyUseContent" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              3. <FormattedMessage id="HowToAccessTheServiceAndYourAccount" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="InOrderToUseTheService" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAreResponsibleFor" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              4. <FormattedMessage id="IntellectualPropertyRights" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouMayNotUseTransferDisplay" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="AllContentAvailable" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ExceptForTheRightsExpressly" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="PleaseNoteThatYouMay" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="PleaseAlsoNoteThatYouAre" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              5. <FormattedMessage id="UseOfComputerResources" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAgreeThatWeHaveTheRight" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="IfYouAreConnectedTotheInternet" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              6. <FormattedMessage id="ThirdPartyApplications" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TheServiceIsIntegrated" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              7. <FormattedMessage id="Advertisement" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouMaySeparatelyHaveAccepted" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              8. <FormattedMessage id="PrivacyAndPersonalData" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeProcessPersonalData" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              9. <FormattedMessage id="ServiceLevelAndDisclaimer" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeWillMakeReasonableEfforts" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeAreNotResponsibleForUnavailability" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeWillFromTimeToTimeCarryOut" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="THISSERVICEISPROVIDED" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WESHALLINNOEVENT" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeReservesTheRightAtAnyTime" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              10. <FormattedMessage id="Indemnity" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="UponRequestByUsYouAgreeToIndemnify" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="FurthermoreWeReserveTheRight" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              11. <FormattedMessage id="Limitation" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YOUAGREETHATTOTHEEXTENT" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TOTHEFULLESTEXTENTPERMITTED" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="NothingInTheAgreementsRemoves" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              12. <FormattedMessage id="TermAndTermination" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ThisAgreementWillContinue" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="IfYouOrWeTerminateThisAgreement" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              13. <FormattedMessage id="Assignment" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeAreEntitledToInWhole" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              14. <FormattedMessage id="PartialInvalidity" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="IfAnyProvisionOfTheseTermsAndConditions" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              15. <FormattedMessage id="ProhibitedContent" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ToMaintainASafeAndRespectfulEnvironment" />
            </UINewTypography>
          </Box>
        </FirstBoxMainContainer>
      </HomeMainContainer>
    </TermsAndConditionMainContainer>
  );
};

export default TermaAndCondition;
