'use client';
import React from 'react';
import { CookieStatementMainContainer, FirstBoxMainContainer, FirstTextContainer } from './CookieStatement.styled';
import { ContactContainer, ContactUs, UINewTypographyMainText } from '../faqPage/faqPage.style';
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from '../guestLayout/homeContainer';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Link from 'next/link';
import theme from 'themes/theme';

const CookieStatement = () => {
  return (
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
                <Link href="https://flirtbate.com/" style={{ textDecoration: 'underline' }}>
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
                <Link href="https://policies.google.com/privacy" style={{ textDecoration: 'underline' }}>
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
                <Link href="https://flirtbate.com/" style={{ textDecoration: 'underline' }}>
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
  );
};

export default CookieStatement;
