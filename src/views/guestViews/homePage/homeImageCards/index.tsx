'use client';
// import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { ButtonMainBox, WorkerCardMainBox } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import { ModelFavRes } from 'services/customerFavorite/customerFavorite.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { SearchFiltersTypes } from 'views/guestViews/searchPage/searchFilters';
import { PaginationMainBox } from 'views/protectedDashboardViews/payoutRequest/PayoutRequest.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { gaEventTrigger } from 'utils/analytics';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
// import Skeleton from '@mui/material/Skeleton';
import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { NotFoundModelBox } from './HomeImageCard.styled';
import NewSignupStyledModalDialog from 'components/UIComponents/NewSignupStyledModalDialog';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import CreditSideDrawer from 'views/protectedViews/CreditSideDrawer';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { useCallFeatureContext } from 'contexts/CallFeatureContext';
const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'));
const GuestLogin = dynamic(() => import('views/auth/guestLogin'));
const GuestSignup = dynamic(() => import('views/auth/guestSignup'));
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'));

const HomeImageCard = ({
  modelListing,
  isFavPage,
  token,
  totalRows,
  handleChangePage,
  filters,
  isFreeCreditAvailable,
  isLoading
}: {
  modelListing: ModelHomeListing[] | ModelFavRes[];
  isFavPage: boolean;
  token?: TokenIdType;
  totalRows?: number;
  handleChangePage?: (page: number) => void;
  filters?: SearchFiltersTypes;
  isFreeCreditAvailable: number;
  isLoading: boolean;
}) => {
  const [favModelId, setFavModelId] = useState(0);
  const [open, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [likedModels, setLikedModels] = useState<number[]>([]);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);
  const [creditModelOpen, setCreditModelOpen] = useState(false);
  const { isCallEnded, avaialbleCredits } = useCallFeatureContext();

  const handleOpenCreditDrawer = () => setCreditModelOpen(true);
  const handleCloseCreditDrawer = () => setCreditModelOpen(false);

  const handleLoginLiked = (modelId: number) => {
    setFavModelId(modelId);
  };

  const handleSignupOpen = () => {
    setIsOpen(true);
    setIsOpenLogin(false);
  };

  const handleSignupClose = () => {
    setIsOpen(false);
  };

  const handleLoginOpen = () => {
    setIsOpen(false);
    setIsOpenLogin(true);
  };

  const handleLoginResetPasswordOpen = () => {
    setOpenForgetPassLink(false);
    setIsOpenLogin(true);
  };

  const handleLoginClose = () => {
    setIsOpenLogin(false);
    setFavModelId(0);
  };

  const handleResetPasswordLinkOpen = () => {
    setIsOpenLogin(false);
    setOpenForgetPassLink(true);
  };

  const handleResetPasswordLinkClose = () => {
    setOpenForgetPassLink(false);
  };

  const getCustomerCredit = useCallback(async () => {
    if (token?.token) {
      const getModel = await ModelDetailsService.getModelWithDraw(token.token);
      setBalance(getModel?.data?.credits);
    }
  }, [token?.token]);

  useEffect(() => {
    if (isCallEnded && avaialbleCredits !== undefined) {
      setBalance(avaialbleCredits);
    }
  }, [avaialbleCredits, isCallEnded]);

  useEffect(() => {
    getCustomerCredit();
  }, [getCustomerCredit]);

  const handleLike = useMemo(() => {
    return (modelId: number) => {
      const isLiked = likedModels.includes(modelId);
      if (isLiked) {
        setLikedModels(likedModels.filter((id) => id !== modelId));
      } else {
        setLikedModels([...likedModels, modelId]);
      }
    };
  }, [likedModels]);

  const handleChangePageUI = (event: React.ChangeEvent<unknown>, value: number) => {
    if (handleChangePage) handleChangePage(value);
  };

  const handleModelRedirect = (user_name: string) => {
    gaEventTrigger('model_clicked', {
      category: 'Button',
      label: 'model_clicked',
      value: user_name
    });
  };

  const handleFreeCreditSignupOpen = () => {
    gaEventTrigger('Signup_Button_clicked', { source: 'model_card', category: 'Button' });
    handleLoginClose();
    setFreeSignupOpen(true);
  };

  const handleFreeCreditSignupClose = () => {
    setFreeSignupOpen(false);
  };

  return (
    <HomeMainContainer>
      <WorkerCardMainBox id="tableSection">
        <Grid container spacing={{ xs: '13px', md: '15px' }} rowGap={{ xs: 0.875, lg: 2.125 }}>
          {isLoading
            ? Array.from({ length: 24 }, (_, index) => (
                <Grid key={index} item xs={6} sm={4} md={3}>
                  <Box sx={{ width: '100%', maxWidth: '299px', height: '400px', margin: 'auto' }}>
                    {/* <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                      sx={{
                        '&.MuiSkeleton-root': {
                          maxWidth: '299px',
                          height: '400px'
                        }
                      }}
                    /> */}
                    {/* <Box sx={{ pt: 0.5 }}>
                      <Skeleton width="100%" />
                      <Skeleton width="60%" />
                      <Skeleton width="60%" />
                    </Box> */}
                  </Box>
                </Grid>
              ))
            : modelListing?.map((item, index) => {
                return (
                  <Grid item key={index} xs={6} sm={4} md={isFavPage ? 4 : 3} lg={isFavPage ? 4 : 3}>
                    <Box display="flex" gap={2} flexDirection="column">
                      {favModelId === item.id ? (
                        item.name === 'Christmas Offer' ? (
                          <WorkerCard
                            modelDetails={item}
                            isFavPage={isFavPage}
                            token={token ?? ({} as TokenIdType)}
                            handleLoginLiked={handleLoginLiked}
                            handleLoginOpen={handleLoginOpen}
                            handleLike={handleLike}
                            liked={likedModels.includes(item.id)}
                            handleOpenCreditDrawer={handleOpenCreditDrawer}
                          />
                        ) : (
                          <Box
                            component={Link}
                            prefetch={true}
                            shallow={true}
                            href={`/models/${item.user_name}`}
                            onClick={() => handleModelRedirect(item.user_name)}
                            sx={{
                              textDecoration: 'none',
                              height: '100%'
                            }}
                          >
                            <WorkerCard
                              modelDetails={item}
                              isFavPage={isFavPage}
                              token={token ?? ({} as TokenIdType)}
                              handleLoginLiked={handleLoginLiked}
                              handleLoginOpen={handleLoginOpen}
                              handleLike={handleLike}
                              liked={likedModels.includes(item.id)}
                              handleOpenCreditDrawer={handleOpenCreditDrawer}
                            />
                          </Box>
                        )
                      ) : item.name === 'Christmas Offer' ? (
                        <WorkerCard
                          modelDetails={item}
                          isFavPage={isFavPage}
                          token={token ?? ({} as TokenIdType)}
                          handleLoginLiked={handleLoginLiked}
                          handleLoginOpen={handleLoginOpen}
                          handleLike={handleLike}
                          liked={likedModels.includes(item.id)}
                          handleOpenCreditDrawer={handleOpenCreditDrawer}
                        />
                      ) : (
                        <Box
                          component={Link}
                          prefetch={true}
                          shallow={true}
                          href={`/models/${item.user_name}`}
                          onClick={() => handleModelRedirect(item.user_name)}
                          sx={{
                            textDecoration: 'none',
                            height: '100%'
                          }}
                        >
                          <WorkerCard
                            modelDetails={item}
                            isFavPage={isFavPage}
                            token={token ?? ({} as TokenIdType)}
                            handleLoginLiked={handleLoginLiked}
                            handleLoginOpen={handleLoginOpen}
                            handleLike={handleLike}
                            liked={likedModels.includes(item.id)}
                            handleOpenCreditDrawer={handleOpenCreditDrawer}
                          />
                        </Box>
                      )}
                    </Box>
                  </Grid>
                );
              })}
        </Grid>

        {typeof totalRows !== 'undefined' && filters && Number(totalRows) > 0 && (
          <ButtonMainBox>
            <PaginationMainBox>
              <UITheme2Pagination
                page={filters?.page}
                count={modelListing ? Math.ceil(totalRows / filters?.pageSize) : 1}
                onChange={handleChangePageUI}
                sx={{ backgroundColor: 'transparent' }}
              />
              <PaginationInWords
                page={filters?.page}
                limit={filters?.pageSize}
                total_rows={totalRows}
                offset={filters?.offset}
                isEscort={true}
              />
            </PaginationMainBox>
          </ButtonMainBox>
        )}
        {modelListing?.length > 0
          ? ''
          : !isFavPage && (
              <NotFoundModelBox>
                <UINewTypography variant="h1">
                  <FormattedMessage id="NoModelsFound" />
                </UINewTypography>
              </NotFoundModelBox>
            )}
      </WorkerCardMainBox>
      <NewSignupStyledModalDialog scroll="body" open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </NewSignupStyledModalDialog>
      <UIStyledDialog scroll="body" open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          isFreeCreditAvailable={isFreeCreditAvailable}
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          handleFreeCreditSignupOpen={handleFreeCreditSignupOpen}
          // handleLoginOpen={handleLoginOpen}
          // freeSignupOpen={freeSignupOpen}
          // handleFreeCreditSignupClose={handleFreeCreditSignupClose}
          image="/images/auth/auth-model1.webp"
        />
      </UIStyledDialog>
      <UIStyledDialog scroll="body" open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
      <NewSignupStyledModalDialog scroll="body" open={freeSignupOpen} onClose={handleFreeCreditSignupClose} maxWidth="md" fullWidth>
        <HomePageFreeSignup onClose={handleFreeCreditSignupClose} onLoginOpen={handleLoginOpen} />
      </NewSignupStyledModalDialog>

      <CreditSideDrawer open={creditModelOpen} handleClose={handleCloseCreditDrawer} balance={balance} />
    </HomeMainContainer>
  );
};

export default memo(HomeImageCard);
