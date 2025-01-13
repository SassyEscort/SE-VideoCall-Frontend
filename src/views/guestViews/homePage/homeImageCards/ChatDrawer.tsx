import { Box, Divider, Typography, Badge, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
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
import ChatBarView from './ChatBarView';
import {
  HistorySwipeableDrawer,
  DrwarImageContainer,
  ChatMessageSwipeableDrawer,
  ChatDrawerBoxHeaderContainer,
  ChatDrawerModelNameContainer,
  ChatDrawerProfileImageContainer,
  VideoCallIcon,
  ChatDrawerTextMainBoxContainer,
  ChatDraweClientChatMainBoxContainer,
  ChatDraweClientChatTextBoxContainer,
  ChatDrawerModelChatMainBoxContainer,
  ChatDrawerModelChatTextBoxContainer,
  BottomChatHeaderDrawer,
  BottomChatHeaderInnerBox,
  HistoryBottomStikeyHeaderDrawer,
  HistoryBottomStikeyHeaderInnerBox,
  ChatCountPopBox,
  SmallRoundHistoryBox,
  SmallMessgePopBox
} from './ChatDrawerCard.style';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import theme from 'themes/theme';
import { useDrawerChatFeatureContext } from 'contexts/DrwarChatContext';
import { useAuthContext } from 'contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { SelectedModelChatDetails } from '.';

const ChatDrawer = ({
  opneHistroyDrwer,
  openDrawer,
  selectedModel,
  toggleDrawer,
  historytoggleDrawer,
  handleSelectedModelDetails,
  handleChatBoxClick,
  handleCloseChatBoxDrawer
}: {
  opneHistroyDrwer: boolean;
  openDrawer: boolean;
  selectedModel: SelectedModelChatDetails | undefined;
  toggleDrawer: () => void;
  historytoggleDrawer: () => void;
  handleSelectedModelDetails: (history: IHistoryOfChats) => void;
  handleChatBoxClick: () => void;
  handleCloseChatBoxDrawer: () => void;
}) => {
  const { messages, historyOfModels, handleSendChatMessage } = useDrawerChatFeatureContext();
  const { user, isCustomer } = useAuthContext();
  const userDetails = user && JSON.parse(user);
  const router = useRouter();

  const chatRef = useRef<HTMLDivElement | null>(null);

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMessageInputChange = (input: string, type: string) => {
    handleSendChatMessage(input, type);
  };

  useEffect(() => {
    if (chatRef?.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
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
                  <Box component="img" src="/images/icons/chat-close-icon.svg" onClick={toggleDrawer} sx={{ cursor: 'pointer' }} />
                </Box>
              </ChatDrawerBoxHeaderContainer>
              <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />
            </Box>

            <Box sx={{ minHeight: 'calc(100% - 137px)', overflowY: 'auto', scrollbarWidth: 'none', p: 2 }} ref={chatRef}>
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
                            <Box
                              component="img"
                              src={message.link}
                              sx={{ height: 100, width: 100, cursor: 'pointer' }}
                              // onClick={() => handleSelectedImages(message.link)}
                            />
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
            <ChatBarView onSendMessage={handleMessageInputChange} modelName={selectedModel?.user_Name} />
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
                      onClick={handleCloseChatBoxDrawer}
                      sx={{ cursor: 'pointer' }}
                    />
                  </Box>
                </BottomChatHeaderInnerBox>
              </BottomChatHeaderDrawer>
            </Box>
          </Box>
        )}
        {!opneHistroyDrwer && isSmUp && isCustomer && historyOfModels?.length && (
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
    </>
  );
};

export default ChatDrawer;
