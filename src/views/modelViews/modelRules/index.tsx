'use client';

const ContactContainer = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.ContactContainer })));
const ContactUs = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.ContactUs })));
const ListContainer = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.ListContainer })));
const MainBoxChildContainer = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.MainBoxChildContainer })));
const MainBoxContainer = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.MainBoxContainer })));
const TypographyContainer = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.TypographyContainer })));
const TypoListContainer = lazy(() => import('./modelRules.styled').then((module) => ({ default: module.TypoListContainer })));
import UINewTypography from 'components/UIComponents/UINewTypography';
import { lazy, Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';

const ModelRules = () => {
  return (
    <Suspense fallback={<div>Loading components...</div>}>
      <ContactContainer>
        <ContactUs>
          <UINewTypography variant="h1" sx={{ color: 'text.secondary' }}>
            <FormattedMessage id="PlatformRules" />
          </UINewTypography>
        </ContactUs>
      </ContactContainer>
      <HomeMainContainer>
        <MainBoxContainer>
          <MainBoxChildContainer>
            <TypographyContainer>
              <UINewTypography variant="subtitle">
                <FormattedMessage id="TheFollowingRules" />
              </UINewTypography>
            </TypographyContainer>

            <ListContainer>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary" gutterBottom>
                  <FormattedMessage id="APersonAppearing" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="UnregisteredPerson" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="UnderagePerson" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="PerformersAreProhibitedFromLeaving" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="PerformersAreProhibitedFromSleeping" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="PerformersMustNotBroadcast" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="PerformersAreProhibitedFromDisclosing" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="PromotingOtherWebsitesAndServices" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="AskingForMoneyOrSurprises" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="ItIsStrictlyForbidden" />
                </UINewTypography>
              </li>

              <TypoListContainer>
                <UINewTypography variant="subtitleLargeRegular" color="text.primary">
                  <FormattedMessage id="FlirtbateReservesTheRight" />
                </UINewTypography>
              </TypoListContainer>

              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="UnauthorizedUseOfPerformer" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="UnauthorizedUseOfMemberAccount" />
                </UINewTypography>
              </li>
              <li>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="IfTheModelIsProven" />
                </UINewTypography>
              </li>
            </ListContainer>
          </MainBoxChildContainer>
        </MainBoxContainer>
      </HomeMainContainer>
    </Suspense>
  );
};

export default ModelRules;
