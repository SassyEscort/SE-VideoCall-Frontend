'use client';
// import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { ButtonMainBox, WorkerCardMainBox } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import { ModelFavRes } from 'services/customerFavorite/customerFavorite.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import { Badge, Divider, Typography, useMediaQuery } from '@mui/material';
import {
  ChatCountPopBox,
  ChatDraweClientChatMainBoxContainer,
  ChatDraweClientChatTextBoxContainer,
  ChatDrawerBoxHeaderContainer,
  ChatDrawerModelChatMainBoxContainer,
  ChatDrawerModelChatTextBoxContainer,
  ChatDrawerModelNameContainer,
  ChatDrawerProfileImageContainer,
  ChatDrawerTextMainBoxContainer,
  BottomChatHeaderDrawer,
  ChatMessageSwipeableDrawer,
  DrwarImageContainer,
  HistorySwipeableDrawer,
  SmallMessgePopBox,
  VideoCallIcon,
  BottomChatHeaderInnerBox,
  HistoryBottomStikeyHeaderDrawer,
  HistoryBottomStikeyHeaderInnerBox,
  SmallRoundHistoryBox
} from './ChatDrawerCard.style';
import moment from 'moment';
import ChatBarView from './ChatBarView';
import { useAuthContext } from 'contexts/AuthContext';
import React from 'react';
import {
  ModelDetailsInnerBoxContainer,
  ModelInformationMainBoxContainer,
  ModelInformationInnerBoxContainer,
  ModelNameBoxContainer,
  ModelNameText,
  OnlineFirstBoxContainer,
  OnlineSecBoxContainer,
  ModelDescriptionText,
  PendingMainBoxContainer,
  PendingInnerBoxContainer
} from 'views/guestViews/chat/Chat.styled';
import { IHistoryOfChats } from 'views/protectedModelViews/verification/verificationTypes';
import theme from 'themes/theme';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useDrawerChatFeatureContext } from 'contexts/DrwarChatContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const GuestForgetPasswordLink = dynamic(() => import('views/auth/guestForgetPasswordLink'));
const GuestLogin = dynamic(() => import('views/auth/guestLogin'));
const GuestSignup = dynamic(() => import('views/auth/guestSignup'));
const HomePageFreeSignup = dynamic(() => import('views/auth/homePageFreeSignup'));

export interface SelectedModelChatDetails {
  name: string;
  photoUrl: string;
  user_Name: string;
  opne: boolean;
}

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
  const { messages, historyOfModels, handleSendChatMessage, handleSelectModel } = useDrawerChatFeatureContext();
  const { user, isCustomer } = useAuthContext();
  const router = useRouter();
  const userDetails = user && JSON.parse(user);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const { isCallEnded, avaialbleCredits } = useCallFeatureContext();

  const [open, setIsOpen] = useState(false);
  const [openLogin, setIsOpenLogin] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [freeSignupOpen, setFreeSignupOpen] = useState(false);
  const [creditModelOpen, setCreditModelOpen] = useState(false);
  const [openForgetPassLink, setOpenForgetPassLink] = useState(false);
  const [opneHistroyDrwer, setOpneHistroyDrwer] = useState<boolean>(false);

  const [favModelId, setFavModelId] = useState(0);
  const [balance, setBalance] = useState(0);
  const [likedModels, setLikedModels] = useState<number[]>([]);

  const [selectedModel, setSelectedModel] = useState<SelectedModelChatDetails>();

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

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

  const handleChatClick = (modelDetails: ModelHomeListing | ModelFavRes) => {
    const modelData = {
      name: modelDetails.name,
      photoUrl: modelDetails.link,
      user_Name: modelDetails.user_name,
      opne: true
    };
    handleSelectModel(modelData);
    setSelectedModel(modelData);
    setOpenDrawer(!openDrawer);
  };

  const handleSelectedModelDetails = (history: IHistoryOfChats) => {
    // setMessages([]);
    const modelData = {
      name: history.name,
      photoUrl: history.profile_pic,
      user_Name: userDetails.customer_user_name === history.sender_id ? history.receiver_id : history.sender_id,
      opne: true
    };
    handleSelectModel(modelData);
    setSelectedModel(modelData);
    setOpenDrawer(true);
    setOpneHistroyDrwer(false);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const historytoggleDrawer = () => {
    setOpneHistroyDrwer(!opneHistroyDrwer);
    setOpenDrawer(false);
  };

  const handleMessageInputChange = (input: string, type: string) => {
    handleSendChatMessage(input, type);
  };

  const handleChatBoxClick = () => {
    setOpenDrawer(true);
  };

  useEffect(() => {
    if (isCallEnded && avaialbleCredits !== undefined) {
      setBalance(avaialbleCredits);
    }
  }, [avaialbleCredits, isCallEnded]);

  useEffect(() => {
    getCustomerCredit();
  }, [getCustomerCredit]);

  useEffect(() => {
    if (chatRef?.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

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
                              handleChatClick={handleChatClick}
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
                            handleChatClick={handleChatClick}
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

      <Box>
        {opneHistroyDrwer && isCustomer && (
          <HistorySwipeableDrawer
            anchor="bottom"
            open={opneHistroyDrwer}
            swipeAreaWidth={56}
            onOpen={historytoggleDrawer}
            onClose={historytoggleDrawer}
          >
            <ModelDetailsInnerBoxContainer id="mainHistoryBox" sx={{ paddingInline: 1 }}>
              <Box id="innerHistoryBox" />
              {historyOfModels?.length ? (
                historyOfModels.map((history, index) => (
                  <React.Fragment key={index}>
                    <ModelInformationMainBoxContainer
                      onClick={() => {
                        // onSelectModel(true);
                        handleSelectedModelDetails(history);
                      }}
                    >
                      <ModelInformationInnerBoxContainer>
                        <DrwarImageContainer
                          sx={{
                            backgroundImage: `url(${history.profile_pic})`,
                            height: 50,
                            width: 50
                          }}
                        />
                        <ModelNameBoxContainer>
                          <ModelNameText color="text.secondary">
                            {history?.name}
                            {history?.is_online === 1 && (
                              <OnlineFirstBoxContainer>
                                <OnlineSecBoxContainer />
                              </OnlineFirstBoxContainer>
                            )}
                          </ModelNameText>

                          {history.message_type === 'text' ? (
                            <ModelDescriptionText color="text.primary">{history.message_content}</ModelDescriptionText>
                          ) : (
                            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                              <ImageOutlinedIcon sx={{ color: 'text.primary' }} />
                              <ModelDescriptionText color="text.primary">Image</ModelDescriptionText>
                            </Box>
                          )}
                        </ModelNameBoxContainer>
                      </ModelInformationInnerBoxContainer>

                      <PendingMainBoxContainer>
                        {isSmUp && (
                          <UINewTypography variant="bodySmall" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                            {history?.time_stamp ? moment(history.time_stamp).format('LT') : moment().format('LT')}
                          </UINewTypography>
                        )}
                        {history?.unread_count > 0 && (
                          <PendingInnerBoxContainer>
                            <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
                              {history?.unread_count}
                            </UINewTypography>
                          </PendingInnerBoxContainer>
                        )}
                      </PendingMainBoxContainer>
                    </ModelInformationMainBoxContainer>

                    <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />
                  </React.Fragment>
                ))
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <FormattedMessage id="NoModelFound" />
                </Box>
              )}
            </ModelDetailsInnerBoxContainer>
          </HistorySwipeableDrawer>
        )}
        {openDrawer && isCustomer && (
          <ChatMessageSwipeableDrawer
            historyOfModels={historyOfModels}
            anchor="bottom"
            open={openDrawer}
            swipeAreaWidth={56}
            onOpen={toggleDrawer}
            onClose={toggleDrawer}
          >
            <Box>
              <ChatDrawerBoxHeaderContainer>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <ChatDrawerModelNameContainer>
                    <ChatDrawerProfileImageContainer
                      sx={{
                        backgroundImage: `url(${selectedModel?.photoUrl})`
                      }}
                    />
                    <UINewTypography variant="bodySemiBold" color="text.secondary">
                      {selectedModel?.name}
                    </UINewTypography>
                  </ChatDrawerModelNameContainer>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <VideoCallIcon onClick={() => router.push(`/models/${selectedModel?.user_Name}`)}>
                    <Box component="img" src="/images/icons/videoCallIcon.svg" sx={{ width: 24, height: 24 }} />
                  </VideoCallIcon>
                  <Box component="img" src="/images/icons/chat-minimize-icon.svg" />
                  <Box
                    component="img"
                    src="/images/icons/chat-close-icon.svg"
                    onClick={() => setOpenDrawer(false)}
                    sx={{ cursor: 'pointer' }}
                  />
                </Box>
              </ChatDrawerBoxHeaderContainer>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />
            </Box>

            <Box sx={{ minHeight: '36vh', overflowY: 'auto', scrollbarWidth: 'none', p: 2 }} ref={chatRef}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                {Array.isArray(messages) &&
                  messages?.map((message, index) => (
                    <ChatDrawerTextMainBoxContainer key={index}>
                      {message.sender_type === 'customers' ? (
                        <ChatDraweClientChatMainBoxContainer>
                          {message.message_type === 'text' ? (
                            <ChatDraweClientChatTextBoxContainer>
                              <UINewTypography variant="body1" color="text.secondary">
                                {message.sender_type === 'customers' ? message?.message_content : ''}
                              </UINewTypography>
                            </ChatDraweClientChatTextBoxContainer>
                          ) : (
                            <ChatDraweClientChatTextBoxContainer>
                              <Box
                                component="img"
                                src={message.link}
                                sx={{ height: 100, width: 100, cursor: 'pointer' }}
                                // onClick={() => handleSelectedImages(message.link)}
                              />
                            </ChatDraweClientChatTextBoxContainer>
                          )}
                          <UINewTypography
                            variant="SubtitleSmallRegular"
                            color="secondary.700"
                            sx={{ display: 'flex', justifyContent: 'end' }}
                          >
                            {message?.time_stamp ? moment(message.time_stamp).format('LT') : moment().format('LT')}
                          </UINewTypography>
                        </ChatDraweClientChatMainBoxContainer>
                      ) : (
                        <ChatDrawerModelChatMainBoxContainer>
                          {message.message_type === 'text' ? (
                            <ChatDrawerModelChatTextBoxContainer sx={{ wordBreak: 'break-all' }}>
                              <UINewTypography variant="body1" color="text.secondary">
                                {message.sender_type !== 'customers' ? message?.message_content : ''}
                              </UINewTypography>
                            </ChatDrawerModelChatTextBoxContainer>
                          ) : (
                            <ChatDrawerModelChatTextBoxContainer>
                              <Box
                                component="img"
                                src={message.link}
                                sx={{ height: 100, width: 100, cursor: 'pointer' }}
                                // onClick={() => handleSelectedImages(message.link)}
                              />
                            </ChatDrawerModelChatTextBoxContainer>
                          )}

                          <UINewTypography variant="SubtitleSmallRegular" color="secondary.700">
                            {message?.time_stamp ? moment(message.time_stamp).format('LT') : moment().format('LT')}
                          </UINewTypography>
                        </ChatDrawerModelChatMainBoxContainer>
                      )}
                    </ChatDrawerTextMainBoxContainer>
                  ))}
              </Box>
            </Box>
            <ChatBarView onSendMessage={handleMessageInputChange} modelName={selectedModel?.name} />
          </ChatMessageSwipeableDrawer>
        )}
        {!openDrawer && selectedModel && isSmUp && isCustomer && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ position: 'relative', cursor: 'pointer' }}>
              <BottomChatHeaderDrawer>
                <BottomChatHeaderInnerBox>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <ChatDrawerModelNameContainer>
                      <ChatDrawerProfileImageContainer
                        sx={{
                          backgroundImage: `url(${selectedModel?.photoUrl})`
                        }}
                      />
                      <UINewTypography variant="bodySemiBold" color="text.secondary">
                        {selectedModel?.name}
                      </UINewTypography>
                    </ChatDrawerModelNameContainer>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      component="img"
                      src="/images/icons/chat-minimize-icon.svg"
                      onClick={handleChatBoxClick}
                      sx={{ cursor: 'pointer' }}
                    />
                    <Box
                      component="img"
                      src="/images/icons/chat-close-icon.svg"
                      onClick={() => {
                        setOpenDrawer(false);
                        setSelectedModel(undefined);
                        handleSelectModel(undefined);
                      }}
                      sx={{ cursor: 'pointer' }}
                    />
                  </Box>
                </BottomChatHeaderInnerBox>
              </BottomChatHeaderDrawer>
            </Box>
          </Box>
        )}
        {!opneHistroyDrwer && isSmUp && isCustomer && historyOfModels && (
          <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={historytoggleDrawer}>
            <HistoryBottomStikeyHeaderDrawer>
              <HistoryBottomStikeyHeaderInnerBox>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                    {historyOfModels?.filter((model) => model.unread_count > 0).length ? (
                      <UINewTypography variant="bodySemiBold" color="text.secondary">
                        {`+${historyOfModels?.filter((model) => model.unread_count > 0).length} new messages`}
                      </UINewTypography>
                    ) : (
                      <></>
                    )}
                    <UINewTypography variant="bodyLight" color="text.secondary">
                      See all
                    </UINewTypography>
                  </Box>
                  <Box component="img" src="/images/icons/chat-up.svg" />
                </Box>
              </HistoryBottomStikeyHeaderInnerBox>
            </HistoryBottomStikeyHeaderDrawer>
          </Box>
        )}
      </Box>
      {isSmDown && !opneHistroyDrwer && !openDrawer && isCustomer && (
        <>
          <ChatCountPopBox onClick={historytoggleDrawer}>
            <SmallRoundHistoryBox>
              {historyOfModels?.filter((model: IHistoryOfChats) => model.unread_count > 0).length ? (
                <Typography variant="bodySemiBold" color="text.secondary">
                  +{historyOfModels?.filter((model) => model.unread_count > 0).length}
                </Typography>
              ) : (
                <></>
              )}
              <Typography variant="bodySemiBold" color="text.secondary">
                See all
              </Typography>
            </SmallRoundHistoryBox>
          </ChatCountPopBox>
        </>
      )}
      {isSmDown && !openDrawer && selectedModel && !opneHistroyDrwer && isCustomer && (
        <SmallMessgePopBox sx={{ backgroundImage: `url(${selectedModel?.photoUrl})` }} onClick={handleChatBoxClick}>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            sx={{
              '& .MuiBadge-badge': { backgroundColor: '#FF5959', color: '#fff', fontSize: '12px', width: 24, height: 24, left: 40 }
            }}
            badgeContent={
              historyOfModels?.filter(
                (model: IHistoryOfChats) =>
                  model.unread_count > 0 &&
                  model.sender_id ===
                    (model.sender_id === selectedModel?.user_Name ? selectedModel?.user_Name : userDetails.customer_user_name)
              ).length
            }
          />
        </SmallMessgePopBox>
      )}
    </HomeMainContainer>
  );
};

export default memo(HomeImageCard);
