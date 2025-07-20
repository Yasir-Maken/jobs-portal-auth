// app/components/DashboardLayout.tsx
// This component provides a common layout structure for both Job Seeker and Employer Dashboards.
// It includes the full-page background, a dynamic welcome message, a sign-out button,
// and a footer, taking the main dashboard content as children.

"use client"; // This component uses client-side hooks (useRouter, signOut)

import React from "react";
import { signOut } from "next-auth/react"; // NextAuth.js function to sign out the user
import { useRouter } from "next/navigation"; // Hook for programmatic navigation (App Router)

// Define props for the DashboardLayout component
interface DashboardLayoutProps {
  welcomeMessage: string; // The personalized welcome message (e.g., "Welcome back, Alice!")
  children: React.ReactNode; // The main content of the dashboard (e.g., action boxes)
  maxWidth?: string; // Optional: Tailwind max-width class for the inner content container
}

/**
 * DashboardLayout component.
 * Provides a consistent full-page layout for different user dashboards.
 * Handles sign-out functionality and displays a personalized welcome.
 */
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  welcomeMessage,
  children,
  maxWidth = "max-w-4xl", // Default max-width for content
}) => {
  // Initialize router for redirection after sign-out
  const router = useRouter();

  /**
   * Handles the sign-out process.
   * Calls NextAuth's signOut function and redirects to the login page.
   */
  const handleSignOut = async () => {
    console.log("User attempting to sign out from dashboard...");
    // Call signOut and redirect to the root (login) page after logout
    await signOut({ callbackUrl: "/" });
  };

  return (
    // Main container for the full-page dashboard layout
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8 font-inter relative">
      {/* Sign Out Button: Positioned absolutely at the top-right of the page */}
      <button
        onClick={handleSignOut}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 transition duration-150 ease-in-out shadow-sm"
      >
        Sign Out
      </button>

      {/* Main Content Area: Centered and max-width constrained for readability */}
      {/* The maxWidth prop allows customization for different dashboard content widths */}
      <div className={`w-full ${maxWidth} text-center pt-16 pb-8`}>
        {/* Welcome Section: Personalized greeting */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          {welcomeMessage}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Find Your Dream Job with Zool Job Portal
        </p>

        {/* This is where the specific dashboard content (e.g., action boxes) will be rendered */}
        {children}

        {/* Footer Text */}
        <div className="text-center text-xs text-gray-400 pt-8 border-t border-gray-200 mx-auto w-48">
          Zool Job Portal
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
