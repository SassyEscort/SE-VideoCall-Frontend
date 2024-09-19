'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FirstBoxMainContainer, FirstTextContainer, TermsAndConditionMainContainer } from './TermasAndConditionPage.styled';
import HomeMainContainer from '../guestLayout/homeContainer';
import { ContactContainer, ContactUs, UINewTypographyMainText } from '../faqPage/faqPage.style';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import Link from 'next/link';

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
              2. <FormattedMessage id="TermsOfUse" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="EligibilityYouMustBeAtLeast" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ProhibitedContentYouAgreeNot" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="UserConductYouAgree" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              3. <FormattedMessage id="AccountCreation" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="AccurateInformationYouMust" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="MinorsFlirtbateIsStrictly" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              4. <FormattedMessage id="IntellectualPropertyRights" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="OwnershipAllContentOnFlirtbate" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="LimitedLicenseFlirtbate" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ContentPleaseNoteThatYou" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              5. <FormattedMessage id="ThirdPartyApplicationss" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="FlirtbateMayContainLinksTo" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              6. <FormattedMessage id="WithdrawalPolicy" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouMayWithdrawFundsFrom" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              7. <FormattedMessage id="FraudPolicy" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="FlirtbateTakesFraudVerySeriously" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="MultiAccountingCreatingMultiple" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="PaymentFraudUsing" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="IdentityTheftImpersonating" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              8. <FormattedMessage id="Advertisement" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAcceptToBeExposed" /> <Link href="mailto:support@flirtbate.com">support@flirtbate.com</Link>{' '}
              <FormattedMessage id="InCaseOfAnyIssues" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              9. <FormattedMessage id="ServiceDisclaimer" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TheServiceIsAvailableForUsers" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TheAssortmentOfContent" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAgreeNotToUseOrLaunch" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="YouAgreeToOnlyUseContentInAccordance" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              10. <FormattedMessage id="ServiceInterruptionsAndMaintenance" />
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
              <FormattedMessage id="WeReserveTheRightAtAnyTime" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              11. <FormattedMessage id="GoverningLawAndJurisdiction" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="TheseTermsAndConditions" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              12. <FormattedMessage id="ChangesToTheseTermsAndConditions" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="WeReserveTheRightToModify" />
            </UINewTypography>
          </Box>
          <Box>
            <FirstTextContainer color="secondary.100">
              13. <FormattedMessage id="ContactUs" />
            </FirstTextContainer>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="IfYouHaveAnyQuestionsOrConcerns" />{' '}
              <Link href="mailto:support@flirtbate.com">support@flirtbate.com</Link>
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="ByUsingFlirtbateYouAcknowledge" />
            </UINewTypography>
            <UINewTypography sx={{ marginTop: 3 }}>
              <FormattedMessage id="LastUpdated" />
            </UINewTypography>
          </Box>
        </FirstBoxMainContainer>
      </HomeMainContainer>
    </TermsAndConditionMainContainer>
  );
};

export default TermaAndCondition;
