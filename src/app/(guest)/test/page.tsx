'use client';
import { CometChatConversationsWithMessages, CometChatUIKit, UIKitSettingsBuilder } from '@cometchat/chat-uikit-react';
import { useEffect, useState } from 'react';
import { COMETCHAT_CONSTANTS } from 'views/protectedViews/callingFeature/CallInitialize';

const page = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const UIKitSettings = new UIKitSettingsBuilder()
          .setAppId(COMETCHAT_CONSTANTS.APP_ID)
          .setRegion(COMETCHAT_CONSTANTS.REGION)
          .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
          .subscribePresenceForAllUsers()
          .build();

        await CometChatUIKit.init(UIKitSettings);

        let user = await CometChatUIKit.getLoggedinUser();
        const userUid = user?.getUid();
        if (userUid) {
          setUser(true);
        }

        if (!user) {
          user = await CometChatUIKit.login('zia-dd0dd2');
        }

        CometChatUIKit.getLoggedinUser().then((user) => {
          if (!user) {
            CometChatUIKit.login('zia-dd0dd2');
          }
        });
      } catch (e) {
        console.log('error', e);
      }
    };
    init();
  }, []);

  return <div>{user && <CometChatConversationsWithMessages />}</div>;
};

export default page;
