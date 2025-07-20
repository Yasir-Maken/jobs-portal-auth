// This is the root layout for your Next.js application (App Router).
// It defines the HTML structure, metadata, and wraps the entire app with necessary providers.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Import Google Font for consistent typography
import { Providers } from "./providers"; // Import the custom Providers component (which includes SessionProvider)
import "./globals.css"; // Import global CSS styles (e.g., Tailwind CSS base, components, utilities)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the application.
// This will be used to populate <head> tags like <title> and <meta name="description">.
export const metadata: Metadata = {
  title: "Zool",
  description:
    "Zool Job Protal, Matches Qualified Candidates with Great Organization",
};

/**
 * The RootLayout component.
 * It wraps all pages and nested layouts in the application.
 * @param {React.ReactNode} children - The content of the current page or nested layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/** */}
      {/* Set the language for the document */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*
          The Providers component wraps the entire application.
          It's a Client Component that includes NextAuth's SessionProvider,
          making the authentication session available throughout the app.
        */}
        <Providers>{children}</Providers>
        {/* This prop represents the actual page content */}
      </body>
    </html>
  );
}
