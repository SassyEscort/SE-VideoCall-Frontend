import React, { useState } from 'react';
import { Divider, useMediaQuery } from '@mui/material';
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
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const ChatSidbar = ({ onSelectModel, modelDetails }: { onSelectModel: (model: any) => void; modelDetails?: ModelDetailsResponse }) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [searchQuery, setSearchQuery] = useState('');

  const favPhoto = modelDetails?.photos?.filter((x) => x.favourite).map((item) => item.link)[0];

  const searchLower = searchQuery.toLowerCase();

  const isMatchingModel = modelDetails?.name?.toLowerCase().includes(searchLower);

  return (
    <ModelDetailsMainBoxContainer>
      {isSmUp && (
        <>
          <ModelHeaderBoxContainer>
            <UINewTypography variant="newTitle" color="text.primary">
              Chat
            </UINewTypography>
            <ModelReplyBoxContainer>
              <OnlineFirstBoxContainer>
                <OnlineSecBoxContainer />
              </OnlineFirstBoxContainer>

              <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
                (2)
              </UINewTypography>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}

      <ModelDetailsInnerBoxContainer>
        {isMatchingModel && (
          <React.Fragment>
            <ModelInformationMainBoxContainer onClick={() => onSelectModel(true)}>
              <ModelInformationInnerBoxContainer>
                <ImageContainer
                  sx={{
                    backgroundImage: `url(${favPhoto})`
                  }}
                />
                <ModelNameBoxContainer>
                  <ModelNameText color="text.secondary">{modelDetails?.name}</ModelNameText>
                  <ModelDescriptionText color="text.primary">description</ModelDescriptionText>
                </ModelNameBoxContainer>
              </ModelInformationInnerBoxContainer>

              <PendingMainBoxContainer>
                {isSmUp && (
                  <UINewTypography variant="bodySmall" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                    time
                  </UINewTypography>
                )}
                <PendingInnerBoxContainer>
                  <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
                    2
                  </UINewTypography>
                </PendingInnerBoxContainer>
              </PendingMainBoxContainer>
            </ModelInformationMainBoxContainer>

            <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />
          </React.Fragment>
        )}
      </ModelDetailsInnerBoxContainer>
    </ModelDetailsMainBoxContainer>
  );
};

export default ChatSidbar;
