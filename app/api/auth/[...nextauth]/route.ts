// app/api/auth/[...nextauth]/route.ts

// This file configures NextAuth.js for the application's authentication API routes.
// It handles user sign-in, session management, and JWT creation.

import NextAuth from "next-auth"; // Main NextAuth.js library
import CredentialsProvider from "next-auth/providers/credentials"; // Provider for email/password authentication
import { findUserByEmail, verifyPassword } from "@/lib/users"; // Custom user service for mock data

import type { AuthOptions } from "next-auth"; // TypeScript type for NextAuth configuration

/**
 * Defines the authentication options for NextAuth.js.
 * This configuration includes providers, session strategy, JWT secret, and callbacks.
 */
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers.
  // CredentialsProvider is used for email/password login.
  // Explicitly type authOptions
  providers: [
    CredentialsProvider({
      name: "Credentials", // Display name for the sign-in form
      credentials: {
        // Define the expected input fields for the login form
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      /**
       * The authorize function is called when a user attempts to sign in.
       * It validates the provided credentials against the user data.
       * @param {Record<string, string> | undefined} credentials - The email and password from the login form.
       * @param {NextApiRequest} _req - The incoming request object (unused here, hence prefixed with '_').
       * @returns {Promise<User | null>} A user object if authentication is successful, otherwise null.
       */

      async authorize(credentials, _req) {
        // Prefix 'req' with '_' as it's unused
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await findUserByEmail(credentials.email);

        // Use bcrypt.compare to securely verify the plaintext password against the stored hash
        if (user) {
          const isValidPassword = await verifyPassword(
            credentials.password,
            user.passwordHash
          );

          if (isValidPassword) {
            // Return a user object that matches the augmented User type
            return {
              id: user.id,
              email: user.email,
              role: user.role, // TypeScript now knows 'role' exists here
              name: user.name || user.companyName,
            };
          }
        }
        // If user not found or password invalid, return null to indicate authentication failure.
        return null;
      },
    }),
  ],

  // If password is valid, return the user object.
  // This object will be available in the JWT and session
  session: {
    /**
     * Modifies the JWT token after successful authentication.
     * Used to add custom properties (like 'role') to the token.
     * @param {object} params - Contains token, user, account, profile, isNewUser.
     * @returns {Promise<JWT>} The modified JWT token.
     */
    strategy: "jwt", // This string literal 'jwt' now correctly matches SessionStrategy type
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    // TypeScript now understands 'token.role' and 'user.role' due to type augmentation
    async jwt({
      token,
      user,
      account: _account,
      profile: _profile,
      isNewUser: _isNewUser,
    }) {
      // If a user object is provided (meaning successful sign-in), add their role to the token.
      if (user) {
        token.role = user.role; // 'role' is now recognized due to next-auth.d.ts augmentation
      }
      return token;
    },

    /**
     * Modifies the session object that is exposed to the client.
     * Used to add custom properties (like 'role') to the session.user object.
     * @param {object} params - Contains session, token, user.
     * @returns {Promise<Session>} The modified session object.
     */
    // TypeScript now understands 'session.user.role' and 'token.role'
    async session({ session, token, user: _user }) {
      // Prefix unused 'user' param
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  // Pages configuration: Defines custom pages for authentication flows.
  pages: {
    signIn: "/",
  },
  // Global secret for NextAuth.js (should match jwt.secret in production).
  secret: process.env.NEXTAUTH_SECRET,
};
// Create the NextAuth.js handler with the defined options.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
