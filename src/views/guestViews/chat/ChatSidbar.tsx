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

const ChatSidbar = () => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for model list
  const modelList = [
    { name: 'Kat Winter', description: 'Hey Sammy, How are...', time: '30 mins ago', pending: 2 },
    { name: 'John Doe', description: "Hey, Let's meet...", time: '1 hour ago', pending: 1 }
    // Add more models as needed
  ];

  // Filter models based on search query
  const filteredModels = modelList.filter((model) => model.name.toLowerCase().includes(searchQuery.toLowerCase()));

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
        {filteredModels.map((model, index) => (
          <React.Fragment key={index}>
            <ModelInformationMainBoxContainer>
              <ModelInformationInnerBoxContainer>
                <ImageContainer />
                <ModelNameBoxContainer>
                  <ModelNameText color="text.secondary">{model.name}</ModelNameText>
                  <ModelDescriptionText color="text.primary">{model.description}</ModelDescriptionText>
                </ModelNameBoxContainer>
              </ModelInformationInnerBoxContainer>

              <PendingMainBoxContainer>
                <UINewTypography variant="bodySmall" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                  {model.time}
                </UINewTypography>
                {model.pending > 0 && (
                  <PendingInnerBoxContainer>
                    <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
                      {model.pending}
                    </UINewTypography>
                  </PendingInnerBoxContainer>
                )}
              </PendingMainBoxContainer>
            </ModelInformationMainBoxContainer>

            <Divider orientation="horizontal" flexItem sx={{ borderColor: '#E9E8EB29' }} />
          </React.Fragment>
        ))}
      </ModelDetailsInnerBoxContainer>
    </ModelDetailsMainBoxContainer>
  );
};

export default ChatSidbar;
