'use client';
import ChatSidbar from './ChatSidbar';
import { ChatMainBoxContainer } from './Chat.styled';
import ChatDescription from './ChatDescription';
import { useMediaQuery, useTheme } from '@mui/material';
import { useChatFeatureContext } from 'contexts/chatFeatureContext';
import { memo } from 'react';

const ChatFeature = () => {
  const { handleModelSelect } = useChatFeatureContext();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ChatMainBoxContainer>
      {isSmUp && <ChatSidbar onSelectModel={handleModelSelect} />}
      <ChatDescription />
    </ChatMainBoxContainer>
  );
};

export default memo(ChatFeature);
