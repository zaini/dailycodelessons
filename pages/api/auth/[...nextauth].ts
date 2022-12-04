import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import NextAuth from "next-auth/next";

export default NextAuth({
  // https://next-auth.js.org/adapters/supabase
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // https://youtu.be/TcnRPXPM68Q?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH
      // We can add additional stuff to the user JWT object here.
      return token;
    },
    async session({ session, user, token }) {
      return session;
    },
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});
