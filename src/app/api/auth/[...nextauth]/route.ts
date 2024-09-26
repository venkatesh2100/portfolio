// app/api/auth/[...nextauth]/route.ts
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'email', type: 'text', placeholder: '' },
        password: { label: 'password', type: 'password', placeholder: '' },
      },
      async authorize(credentials: any) {

        if (credentials?.username === 'admin' && credentials?.password === 'password') {
          return { id: 'user1', name: 'Admin', email: 'admin@example.com' };
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect() {
      return "/thanku";
    }
  }
});

export { handler as GET, handler as POST };
