'use client';
import React, { lazy, Suspense } from 'react';
const CookieStatementMainContainer = lazy(() =>
  import('./CookieStatement.styled').then((module) => ({ default: module.CookieStatementMainContainer }))
);
const FirstBoxMainContainer = lazy(() => import('./CookieStatement.styled').then((module) => ({ default: module.FirstBoxMainContainer })));
const FirstTextContainer = lazy(() => import('./CookieStatement.styled').then((module) => ({ default: module.FirstTextContainer })));
const ContactContainer = lazy(() => import('../faqPage/faqPage.style').then((module) => ({ default: module.ContactContainer })));
const ContactUs = lazy(() => import('../faqPage/faqPage.style').then((module) => ({ default: module.ContactUs })));
const UINewTypographyMainText = lazy(() =>
  import('../faqPage/faqPage.style').then((module) => ({ default: module.UINewTypographyMainText }))
);
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from '../guestLayout/homeContainer';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Link from 'next/link';
import theme from 'themes/theme';

const CookieStatement = () => {
  return (
    <Suspense>
      <CookieStatementMainContainer>
        <ContactContainer>
          <ContactUs>
            <UINewTypographyMainText>
              <FormattedMessage id="Cookies" />
            </UINewTypographyMainText>
          </ContactUs>
        </ContactContainer>
        <HomeMainContainer>
          <FirstBoxMainContainer>
            <Box>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="WithinThisCookieDisclosure" />
                <span style={{ color: theme.palette.primary[100] }}>
                  <Link prefetch={false} href="https://flirtbate.com/" style={{ textDecoration: 'underline' }}>
                    {' '}
                    https://flirtbate.com{' '}
                  </Link>
                </span>
                <FormattedMessage id="WeStronglyAdviseYouToCarefully" />
              </UINewTypography>
            </Box>
            <Box>
              <FirstTextContainer color="secondary.100">
                <FormattedMessage id="CookiesUtilizedOn" />
              </FirstTextContainer>
            </Box>
            <Box>
              <FirstTextContainer color="secondary.100">
                <FormattedMessage id="EssentialCookies" />
              </FirstTextContainer>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="TheseCookiesAreEssential" />
              </UINewTypography>
            </Box>
            <Box>
              <FirstTextContainer color="secondary.100">
                <FormattedMessage id="FunctionalCookies" />
              </FirstTextContainer>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="FunctionalCookiesAreEmployed" />
              </UINewTypography>
            </Box>
            <Box>
              <FirstTextContainer color="secondary.100">
                <FormattedMessage id="AnalyticalCookies" />
              </FirstTextContainer>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="InOurQuestToDetermine" />
                <span style={{ color: theme.palette.primary[100] }}>
                  <Link prefetch={false} href="https://policies.google.com/privacy" style={{ textDecoration: 'underline' }}>
                    {' '}
                    https://policies.google.com/privacy
                  </Link>
                </span>
              </UINewTypography>
            </Box>
            <Box>
              <FirstTextContainer color="secondary.100">
                <FormattedMessage id="AdvertisingCookies" />
              </FirstTextContainer>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="TheseCookiesAreUsed" />
                <span style={{ color: theme.palette.primary[100] }}>
                  <Link prefetch={false} href="https://flirtbate.com/" style={{ textDecoration: 'underline' }}>
                    {' '}
                    https://flirtbate.com{' '}
                  </Link>
                </span>
                <FormattedMessage id="RestAssured" />
              </UINewTypography>
            </Box>
            <Box>
              <FirstTextContainer color="secondary.100">
                <FormattedMessage id="OtherUnforeseenCookies" />
              </FirstTextContainer>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="DueToTheIntricacies" />
              </UINewTypography>
              <UINewTypography sx={{ marginTop: 3 }}>
                <FormattedMessage id="IfYouEncounterCookies" />
              </UINewTypography>
            </Box>
          </FirstBoxMainContainer>
        </HomeMainContainer>
      </CookieStatementMainContainer>
    </Suspense>
  );
};

export default CookieStatement;
