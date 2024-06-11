import { getSession } from 'next-auth/react';
import { getAuthUser } from './authOptions';

export const getUserTokenServer = async () => {
  const details = await getUserDataServer();
  return details.token;
};

export const getUserDataServer = async () => {
  const session = await getAuthUser();
  const details = session?.user?.image;
  const data = JSON.parse(details!);
  return data;
};

export const getUserTokenClient = async () => {
  const details = await getUserDataClient();
  return details.token;
};

export const getUserDataClient = async () => {
  const session = await getSession();
  const details = session?.user?.image;
  if (details) {
    const data = JSON.parse(details!);
    return data;
  } else {
    return '';
  }
};

export const getLoggedInUser = async () => {
  const session = await getAuthUser();
  if (session) {
    return Boolean(session);
  }
  return false;
};
