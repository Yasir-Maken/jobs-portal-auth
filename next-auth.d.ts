// next-auth.d.ts

// This file is used to augment the types of NextAuth.js
// It tells TypeScript about custom properties you add to the JWT and Session.

import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

// Extend the default NextAuth session and JWT types
declare module "next-auth" {
  interface Session {
    user: {
      /** The user's role. */
      role?: "job_seeker" | "employer";
    } & DefaultSession["user"]; // Keep other default properties
  }

  interface User extends DefaultUser {
    /** The user's role. */
    role?: "job_seeker" | "employer";
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    /** The user's role. */
    role?: "job_seeker" | "employer";
  }
}
