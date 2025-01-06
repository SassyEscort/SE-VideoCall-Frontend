interface IPageUrl {
  [key: string]: string;
}

export const MODEL_PATH: IPageUrl = {
  '/model/dashboard': 'Model_Dashboard',
  '/model/profile': 'Model_Profile',
  '/model/earnings': 'Model_Earnings',
  '/model/payouts': 'Model_Payout',
  '/model/rating-and-review': 'Model_Review_Rating',
  '/model/help-info': 'Model_Help_Info',
  '/model/download-app': 'Model_Download_App',
  '/model': 'Model_Home_Page'
};

export const CUSTOMER_PATH: IPageUrl = {
  '/': 'Home',
  '/models': 'Models',
  '/models/[model_user_name]': 'Model_Details',
  '/profile': 'Customer_Profile',
  '/profile/favourites': 'Customer_Favourite',
  '/profile/call': 'Customer_Calls_History',
  '/profile/billing': 'Customer_Billing_History',
  '/cam-to-cam': 'Cam_To_Cam',
  '/sex-chat': 'Sex_Chat',
  '/chat-with-girls': 'Chat_With_Girls',
  '/dirty-talks': 'Dirty_Talks',
  '/stranger-chat': 'Stranger_Chat',
  '/nude-chat': 'Nude_Chat'
};
