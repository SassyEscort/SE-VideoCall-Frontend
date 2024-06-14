import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  BoxImageBackground,
  BoxImageBackgroundChild,
  BoxMain,
  ChildMainContainer,
  DullCircles,
  DullCircles2,
  DullCircles3,
  DullCircles4,
  DullCircles5,
  HomeMainBox,
  MainChildContainer,
  TextMainTitleTyporaphy,
  TextTitleTyporaphy,
  TypographyMainContainer,
  VectorLines,
  VectorLinesMobile
} from './HomeModelConnections.styled';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import { FormattedMessage } from 'react-intl';
import { HomeModelConnectionsTypography } from 'components/UIComponents/UIthemeTypography/HomeConnections.styled';
import { UIThemeNextImage } from 'components/UIComponents/UIThemeImageNext';

const HomeModelConnections = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <HomeMainModelContainer>
        <ChildMainContainer>
          {isSmDown ? <VectorLinesMobile /> : <VectorLines />}
          <DullCircles />
          <DullCircles2 />
          <DullCircles3 />
          <DullCircles4 />
          <DullCircles5 />
          <HomeMainBox>
            <TextMainTitleTyporaphy>
              <FormattedMessage id="WhyJoinUs" />
            </TextMainTitleTyporaphy>
            <TextTitleTyporaphy>
              <FormattedMessage id="EmpoweringYouEmpoweringYourCareer" />
            </TextTitleTyporaphy>
          </HomeMainBox>

          <MainChildContainer>
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <UIThemeNextImage alt="home_model" width={17} height={17} src="/images/home-search-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <HomeModelConnectionsTypography variant={isSmDown ? 'body' : 'h6'}>
                <FormattedMessage id="WorkOnYourTerms" />
              </HomeModelConnectionsTypography>
              <TypographyMainContainer>
                <UINewTypography color="secondary.300" variant={isSmDown ? 'bodySmall' : 'bodyRegular'}>
                  <FormattedMessage id="EnjoyTheFreedom" />
                </UINewTypography>
              </TypographyMainContainer>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <UIThemeNextImage alt="home_model" width={15} height={20} src="/images/icons/doller.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <HomeModelConnectionsTypography variant={isSmDown ? 'body' : 'h6'}>
                <FormattedMessage id="CompetitiveEarnings" />
              </HomeModelConnectionsTypography>
              <TypographyMainContainer>
                <UINewTypography color="secondary.300" variant={isSmDown ? 'bodySmall' : 'bodyRegular'}>
                  <FormattedMessage id="BenefitFrom" />
                </UINewTypography>
              </TypographyMainContainer>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <UIThemeNextImage alt="home_model" width={17} height={20} src="/images/icons/lock.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <HomeModelConnectionsTypography variant={isSmDown ? 'body' : 'h6'}>
                <FormattedMessage id="YourPrivacyOurPriority" />
              </HomeModelConnectionsTypography>

              <TypographyMainContainer>
                <UINewTypography color="secondary.300" variant={isSmDown ? 'bodySmall' : 'bodyRegular'}>
                  <FormattedMessage id="WeAreCommitted" />
                </UINewTypography>
              </TypographyMainContainer>
            </BoxMain>
          </MainChildContainer>

          <MainChildContainer>
            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <UIThemeNextImage alt="home_model" width={21} height={21} src="/images/icons/earth.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <HomeModelConnectionsTypography variant={isSmDown ? 'body' : 'h6'}>
                <FormattedMessage id="ConnectWithAGlobalAudience" />
              </HomeModelConnectionsTypography>
              <TypographyMainContainer>
                <UINewTypography color="secondary.300" variant={isSmDown ? 'bodySmall' : 'bodyRegular'}>
                  <FormattedMessage id="ExpandYourReach" />
                </UINewTypography>
              </TypographyMainContainer>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <UIThemeNextImage alt="home_model" width={15} height={21} src="/images/icons/user.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <HomeModelConnectionsTypography variant={isSmDown ? 'body' : 'h6'}>
                <FormattedMessage id="24LiveSupport" />
              </HomeModelConnectionsTypography>
              <TypographyMainContainer>
                <UINewTypography color="secondary.300" variant={isSmDown ? 'bodySmall' : 'bodyRegular'}>
                  <FormattedMessage id="DayOrNight" />
                </UINewTypography>
              </TypographyMainContainer>
            </BoxMain>

            <BoxMain>
              <BoxImageBackground>
                <BoxImageBackgroundChild>
                  <UIThemeNextImage alt="home_model" width={21} height={21} src="/images/icons/easy-access-img.png" />
                </BoxImageBackgroundChild>
              </BoxImageBackground>
              <HomeModelConnectionsTypography variant={isSmDown ? 'body' : 'h6'}>
                <FormattedMessage id="EasyAccess" />
              </HomeModelConnectionsTypography>

              <TypographyMainContainer>
                <UINewTypography color="secondary.300" variant={isSmDown ? 'bodySmall' : 'bodyRegular'}>
                  <FormattedMessage id="DownloadTheAppToAccept" />
                </UINewTypography>
              </TypographyMainContainer>
            </BoxMain>
          </MainChildContainer>
        </ChildMainContainer>
      </HomeMainModelContainer>
    </>
  );
};

export default HomeModelConnections;
