import { getSession } from 'next-auth/react';
import { getAuthUser } from './authOptions';

export type SessionAuth = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  picture?: string | null | undefined;
};

export type SessionResponse = {
  user: SessionAuth;
};

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
  if (session) {
    const sessionNew = session as SessionResponse;
    const details = sessionNew?.user?.picture;
    if (details) {
      const data = JSON.parse(details!);
      return data;
    } else {
      return null;
    }
  }
};

export const getLoggedInUser = async () => {
  const session = await getAuthUser();
  return session;
};
