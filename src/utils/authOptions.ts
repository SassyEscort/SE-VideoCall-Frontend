import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession, type NextAuthOptions, type User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { adminAuthServices } from 'services/adminAuth/authmodel.services';
import { authServices } from 'services/guestAuth/authuser.services';
import { authModelServices } from 'services/modelAuth/authmodel.services';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    CredentialsProvider({
      id: PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM,
      name: PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM,
      credentials: {
        email: { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' },
        role: { name: 'role', label: 'Role', type: 'text', placeholder: 'Enter Role' }
      },
      async authorize(credentials, req) {
        try {
          const currentPage = req?.headers?.referer || '';

          const user = await authServices.loginUser({
            email: credentials?.email ?? '',
            password: credentials?.password ?? '',
            role: credentials?.role ?? ''
          });

          if (user && typeof user !== 'string' && user.data) {
            if (user.data?.role === 'customer' && currentPage.includes('/model')) {
              throw new Error('CustomersCannotAccess');
            } else {
              user.data.accessToken = user.data.token;

              return {
                id: user.data.customer_id?.toString() || user.data.id.toString(),
                name: user.data.customer_name || user.data.name,
                email: user.data.customer_email || user.data.email,
                image: JSON.stringify(user.data),
                userName: user.data.customer_user_name || user.data.user_name,
                role: user.data.role || 'Model'
              } as User;
            }
          }
          return null;
        } catch (e: any) {
          const errorMessage = e?.response?.data?.message || e;
          throw new Error(errorMessage);
        }
      }
    }),

    CredentialsProvider({
      id: 'providerModel',
      name: 'providerModel',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await authModelServices.loginModel({
            email: credentials?.email ?? '',
            password: credentials?.password ?? ''
          });

          if (user && typeof user !== 'string' && user.data) {
            user.data.token = user.data.token;

            return {
              id: user.data.id.toString(),
              name: user.data.name,
              email: user.data.email,
              image: JSON.stringify(user.data),
              userName: user.data.user_name,
              role: 'Model',
              isSignIn: true
            } as User;
          }
          return null;
        } catch (e: any) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      }
    }),
    CredentialsProvider({
      id: 'providerAdmin',
      name: 'providerAdmin',
      credentials: {
        email: { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter Email' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await adminAuthServices.AdminLogin({
            email: credentials?.email ?? '',
            password: credentials?.password ?? ''
          });

          if (user && typeof user !== 'string' && user.data) {
            user.data.token = user.data.token;

            return {
              id: user.data.id.toString(),
              name: user.data.name,
              email: user.data.email,
              image: JSON.stringify(user.data),
              role: 'Admin'
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
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token;
      }
      return session;
    }
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
