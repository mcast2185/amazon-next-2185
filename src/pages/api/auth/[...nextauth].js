import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const googleId = String(process.env.GOOGLE_ID);
const googleSecret = String(process.env.GOOGLE_SECRET);
export default NextAuth ({

  providers: [
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
})