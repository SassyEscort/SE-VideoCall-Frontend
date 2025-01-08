import { CUSTOMER_PATH, MODEL_PATH } from 'constants/abTesting';
import { ROLE } from 'constants/workerVerification';

export const getPageName = (pathname: string, role: string, token: string) => {
  let pageName = CUSTOMER_PATH?.['/'];
  if (token && role) {
    if (role === ROLE.MODEL) {
      pageName = MODEL_PATH?.[pathname] || MODEL_PATH['/model/dashboard'];
    } else if (role === ROLE.ADMIN) {
      pageName = MODEL_PATH?.[pathname] || 'Admin_Dashboard';
    } else {
      pageName = pathname?.includes('/models/')
        ? CUSTOMER_PATH['/models/[model_user_name]']
        : CUSTOMER_PATH?.[pathname] || CUSTOMER_PATH?.['/'];
    }
  } else {
    if (pathname?.startsWith('/admin')) {
      pageName = 'Admin_Login';
    } else if (pathname?.startsWith('/model') && !pathname?.includes('/models')) {
      pageName = MODEL_PATH?.[pathname] || MODEL_PATH['/model'];
    } else {
      pageName = CUSTOMER_PATH?.[pathname] || CUSTOMER_PATH['/'];
    }
  }

  return pageName;
};
