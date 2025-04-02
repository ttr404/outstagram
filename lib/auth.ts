import { serverEnv } from '@/env/server'
import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { Role } from '@prisma/client'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    ...(serverEnv.GITHUB_ID && serverEnv.GITHUB_SECRET
      ? [
          GithubProvider({
            clientId: serverEnv.GITHUB_ID,
            clientSecret: serverEnv.GITHUB_SECRET,
            authorization:
              'https://github.com/login/oauth/authorize?scope=read:user+user:email+read:org',
            userinfo: {
              url: 'https://api.github.com/user',
              async request({ client, tokens }) {
                if (!tokens.access_token)
                  throw new Error('Missing GitHub access token')
                const profile = await client.userinfo(tokens.access_token)

                if (!profile.email) {
                  const emails = await (
                    await fetch('https://api.github.com/user/emails', {
                      headers: {
                        Authorization: `token ${tokens.access_token}`,
                      },
                    })
                  ).json()

                  if (emails?.length > 0) {
                    profile.email =
                      emails.find((email: any) => email.primary)?.email ||
                      emails[0].email
                  }
                }

                if (serverEnv.GITHUB_ALLOWED_ORG) {
                  const userOrgs = await (
                    await fetch('https://api.github.com/user/orgs', {
                      headers: {
                        Authorization: `token ${tokens.access_token}`,
                      },
                    })
                  ).json()
                  if (
                    !userOrgs.find(
                      (org: any) => org.login === serverEnv.GITHUB_ALLOWED_ORG
                    )
                  ) {
                    profile.notAllowed = true
                  }
                }

                return profile
              },
            },
          }),
        ]
      : []),

    ...(serverEnv.GOOGLE_CLIENT_ID && serverEnv.GOOGLE_CLIENT_SECRET
      ? [
          GoogleProvider({
            clientId: serverEnv.GOOGLE_CLIENT_ID,
            clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
            profile(profile) {
              return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
              }
            },
          }),
        ]
      : []),

    ...(serverEnv.FACEBOOK_CLIENT_ID && serverEnv.FACEBOOK_CLIENT_SECRET
      ? [
          FacebookProvider({
            clientId: serverEnv.FACEBOOK_CLIENT_ID,
            clientSecret: serverEnv.FACEBOOK_CLIENT_SECRET,
            authorization: {
              params: {
                scope: 'email public_profile',
                fields: 'id,name,email,picture',
              },
            },
            profile(profile) {
              const fbProfile = profile as any
              return {
                id: fbProfile.id,
                name: fbProfile.name,
                email: fbProfile.email,
                image: fbProfile.picture?.data?.url,
              }
            },
          }),
        ]
      : []),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('🧪 SignIn Callback — user:', user)
      console.log('🧪 SignIn Callback — profile:', profile)

      if ((profile as any).notAllowed) return false
      return true
    },
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role,
        },
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl // always redirect to homepage after login
    },
  },
  pages: {
    signIn: '/sign-in',
    newUser: '/', // redirect new users to home
  },
  secret: serverEnv.NEXTAUTH_SECRET,
  debug: false,
}
