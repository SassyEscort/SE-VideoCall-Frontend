import { Grid, Box } from '@mui/material';
import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { ButtonMainBox, WorkerCardMainBox } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import { ModelFavRes } from 'services/customerFavorite/customerFavorite.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { memo, useMemo, useState } from 'react';
import Link from 'next/link';
import UIStyledDialog from 'components/UIComponents/UIStyledDialog';
import GuestForgetPasswordLink from 'views/auth/guestForgetPasswordLink';
import GuestLogin from 'views/auth/guestLogin';
import GuestSignup from 'views/auth/guestSignup';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { SearchFiltersTypes } from 'views/guestViews/searchPage/searchFilters';
import { PaginationMainBox } from 'views/protectedDashboardViews/payoutRequest/PayoutRequest.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';

const HomeImageCard = ({
  modelListing,
  isFavPage,
  token,
  totalRows,
  handleChangePage,
  filters
}: {
  modelListing: ModelHomeListing[] | ModelFavRes[];
  isFavPage: boolean;
  token?: TokenIdType;
  totalRows: number;
  handleChangePage: (page: number) => void;
  filters: SearchFiltersTypes;
}) => {
  const [favModelId, setFavModelId] = useState(0);
  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [likedModels, setLikedModels] = useState<number[]>([]);
  // const [filters, setFilters] = useState<PaginationType>({
  //   page: 1,
  //   pageSize: 20,
  //   offset: 0
  // });

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
    handleChangePage(value);
  };

  return (
    <HomeMainContainer>
      <WorkerCardMainBox>
        <Grid container spacing={{ xs: '13px', md: '15px' }} rowGap={{ xs: 0.875, lg: 2.125 }}>
          {totalRows > 0 ? (
            modelListing?.map((item, index) => (
              <Grid item key={index} xs={6} sm={4} md={isFavPage ? 4 : 3} lg={isFavPage ? 4 : 3}>
                <Box display="flex" gap={2} flexDirection="column">
                  {favModelId === item.id ? (
                    <WorkerCard
                      modelDetails={item}
                      isFavPage={isFavPage}
                      token={token ?? ({} as TokenIdType)}
                      handleLoginLiked={handleLoginLiked}
                      handleLoginOpen={handleLoginOpen}
                      handleLike={handleLike}
                      liked={likedModels.includes(item.id)}
                    />
                  ) : (
                    <Box
                      component={Link}
                      prefetch={true}
                      shallow={true}
                      href={`/details/${item.user_name}`}
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
                      />
                    </Box>
                  )}
                </Box>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <UINewTypography variant="h1">Model Not Found</UINewTypography>
              </Box>{' '}
            </Grid>
          )}
        </Grid>
        {totalRows > 0 && (
          <>
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
                  isEscort={false}
                />
              </PaginationMainBox>
            </ButtonMainBox>
          </>
        )}
      </WorkerCardMainBox>
      <UIStyledDialog open={open} onClose={handleSignupClose} maxWidth="md" fullWidth>
        <GuestSignup onClose={handleSignupClose} onLoginOpen={handleLoginOpen} />
      </UIStyledDialog>
      <UIStyledDialog open={openLogin} onClose={handleLoginClose} maxWidth="md" fullWidth>
        <GuestLogin
          onClose={handleLoginClose}
          onSignupOpen={handleSignupOpen}
          onFogotPasswordLinkOpen={handleResetPasswordLinkOpen}
          image="/images/auth/auth-model.webp"
        />
      </UIStyledDialog>
      <UIStyledDialog open={openForgetPassLink} onClose={handleResetPasswordLinkClose} maxWidth="md" fullWidth>
        <GuestForgetPasswordLink onClose={handleResetPasswordLinkClose} onLoginOpen={handleLoginResetPasswordOpen} />
      </UIStyledDialog>
    </HomeMainContainer>
  );
};

export default memo(HomeImageCard);
