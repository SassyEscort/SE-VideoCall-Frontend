import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession, type NextAuthOptions, type User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authServices } from 'services/guestAuth/authuser.services';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await authServices.loginUser({
            email: credentials?.email ?? '',
            password: credentials?.password ?? ''
          });

          if (user && typeof user !== 'string' && user.data) {
            user.data.accessToken = user.data.token;

            return {
              id: user.data.customer_id.toString(),
              name: user.data.customer_name,
              email: user.data.customer_email,
              image: JSON.stringify(user.data)
            } as User;
          }
          return null;
        } catch (e: any) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        // @ts-ignore
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    }
    // session: ({ session, token }) => {
    //   if (token) {
    //     session.user. = token.id;
    //     session.provider = token.provider;
    //     session.token = token;
    //   }
    //   return session;
    // }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_APP_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.NEXT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/'
  }
};

export function getAuthUser( // <-- use this function to access the jwt from React components
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}
