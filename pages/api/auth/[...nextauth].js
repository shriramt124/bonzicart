import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log("the request is going as ");
      if (account.provider === 'google') {
        try {
          console.log("Token: ", account)

          // Send the Google token to your backend API
          const response = await axios.post(`${url}/api/login`, {
            type: 1, // Type 1 for Google login as per your API
            google_token: account.id_token,
          }, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log("the response is ", response.data);



          // Store additional user data from your API if needed
          user.apiData = response.data;
          return true;
        } catch (error) {
          console.error('Error during Google authentication with backend:', error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      // Add user info from the token to the session
      session.user.id = token.sub;
      if (token.apiData) {
        session.user.apiData = token.apiData;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token and or the user id to the token
      if (user) {
        token.sub = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user?.apiData) {
        token.apiData = user.apiData;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});