'use client';
import { useEffect } from 'react';
import { CometChatUIKit, UIKitSettingsBuilder } from '@cometchat/chat-uikit-react';
import { useSession } from 'next-auth/react';
import { User } from 'app/(guest)/layout';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';

export const COMETCHAT_CONSTANTS = {
  APP_ID: process.env.NEXT_PUBLIC_COMET_CHAT_APP_ID!,
  REGION: process.env.NEXT_PUBLIC_COMET_CHAT_REGION!,
  AUTH_KEY: process.env.NEXT_PUBLIC_COMET_CHAT_AUTH_KEY!
};

const CallInitialize = () => {
  const token = useSession();
  const cometChatUID = (token?.data?.user as User)?.id;
  const isModel = (token?.data?.user as User)?.provider === 'providerModel';

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

        if (!user && cometChatUID && isModel) {
          user = await CometChatUIKit.login(cometChatUID);
        }

        CometChatUIKit.getLoggedinUser().then((user) => {
          if (!user && cometChatUID && isModel) {
            CometChatUIKit.login(cometChatUID);
          }
        });
      } catch (e) {
        toast.error(ErrorMessage);
      }
    };

    init();
  }, [cometChatUID, isModel]);

  return <></>;
};

export default CallInitialize;
