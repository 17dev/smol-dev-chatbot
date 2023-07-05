```python
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // ...add more providers here
  ],

  database: process.env.DATABASE_URL,

  session: {
    jwt: true,
  },

  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    async session(session, token) {
      session.id = token.id
      return session
    },
  },
})
```