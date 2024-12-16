import { ChatFeatureProvider } from 'contexts/chatFeatureContext';
import ChatFeature from 'views/guestViews/chat';

const Chat = () => {
  return (
    <ChatFeatureProvider>
      <ChatFeature />
    </ChatFeatureProvider>
  );
};

export default Chat;
