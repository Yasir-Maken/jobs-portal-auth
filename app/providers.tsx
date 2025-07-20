// app/providers.tsx
// This file centralizes client-side providers for the Next.js App Router.
// It must be a Client Component to use React Context providers.

"use client"; // This component must be a Client Component

import { SessionProvider } from "next-auth/react"; // Import NextAuth's SessionProvider
import React from "react"; // React is needed for JSX and component definition

/**
 * Providers component.
 * Wraps the entire application's children with necessary client-side contexts.
 * Currently, it provides the NextAuth session context to all components.
 * @param {React.ReactNode} children - The child components to be wrapped by the providers.
 */

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // SessionProvider makes the authentication session available
  // to all components wrapped within it via the useSession hook.
  return (
    <SessionProvider>
      {children} {/* Renders the actual content of the application */}
    </SessionProvider>
  );
}
