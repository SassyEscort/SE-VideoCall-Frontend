import React, { memo, useEffect } from 'react';
import { Box, Divider, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  ModelDetailsMainBoxContainer,
  ModelHeaderBoxContainer,
  ModelReplyBoxContainer,
  OnlineFirstBoxContainer,
  OnlineSecBoxContainer,
  MobileSearchBoxContainer,
  ModelDetailsInnerBoxContainer,
  ModelInformationMainBoxContainer,
  ModelInformationInnerBoxContainer,
  ImageContainer,
  ModelNameBoxContainer,
  ModelNameText,
  ModelDescriptionText,
  PendingMainBoxContainer,
  PendingInnerBoxContainer,
  SearchBoxContainer
} from './Chat.styled';
import theme from 'themes/theme';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import moment from 'moment';
import { useChatFeatureContext } from 'contexts/chatFeatureContext';

const ChatSidbar = ({ onSelectModel }: { onSelectModel: (model: any) => void }) => {
  const { modelHistoryListSearch, historyOfModels, onlineModelsCount, handleSelectedModelDetails, handleHistoryModleListSearch } =
    useChatFeatureContext();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const outerBox = document.getElementById('mainHistoryBox');
    const innerBox = document.getElementById('innerHistoryBox');
    if (innerBox && outerBox) {
      const scrollTopValue = innerBox?.offsetTop - outerBox?.offsetTop;

      outerBox?.scrollTo({
        top: scrollTopValue,
        behavior: 'smooth'
      });
    }
  }, [historyOfModels]);

  return (
    <ModelDetailsMainBoxContainer>
      {isSmUp && (
        <>
          <ModelHeaderBoxContainer>
            <UINewTypography variant="newTitle" color="text.primary">
              Chat
            </UINewTypography>
            <ModelReplyBoxContainer>
              {onlineModelsCount > 0 && (
                <>
                  <OnlineFirstBoxContainer>
                    <OnlineSecBoxContainer />
                  </OnlineFirstBoxContainer>

                  <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
                    {onlineModelsCount}
                  </UINewTypography>
                </>
              )}
            </ModelReplyBoxContainer>
          </ModelHeaderBoxContainer>

          <SearchBoxContainer
            fullWidth
            variant="outlined"
            placeholder="Search for a profile"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: '#E9E8EB' }} />
                </InputAdornment>
              )
            }}
            value={modelHistoryListSearch}
            onChange={(e) => handleHistoryModleListSearch(e.target.value)}
          />
        </>
      )}

      {!isSmUp && (
        <MobileSearchBoxContainer
          fullWidth
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#E9E8EB' }} />
              </InputAdornment>
            )
          }}
          value={modelHistoryListSearch}
          onChange={(e) => handleHistoryModleListSearch(e.target.value)}
        />
      )}

      <ModelDetailsInnerBoxContainer id="mainHistoryBox">
        <Box id="innerHistoryBox" />
        {historyOfModels?.length ? (
          historyOfModels.map((history, index) => (
            <React.Fragment key={index}>
              <ModelInformationMainBoxContainer
                onClick={() => {
                  onSelectModel(true);
                  handleSelectedModelDetails && handleSelectedModelDetails(history);
                }}
              >
                <ModelInformationInnerBoxContainer>
                  <ImageContainer
                    sx={{
                      backgroundImage: `url(${history.profile_pic})`
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
                    <ModelDescriptionText color="text.primary">{history.message_content}</ModelDescriptionText>
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
          <></>
        )}
      </ModelDetailsInnerBoxContainer>
    </ModelDetailsMainBoxContainer>
  );
};

export default memo(ChatSidbar);
