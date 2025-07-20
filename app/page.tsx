// app/page.tsx
"use client"; // This directive indicates that this is a Client Component,
// allowing the use of React Hooks like useState, useEffect, and useSession.

import { Inter } from "next/font/google"; // Google Font import for consistent typography
import { useRouter } from "next/navigation"; // Hook for programmatic navigation in App Router
import { useEffect } from "react"; // React Hook for side effects// Import useEffect
import { useSession } from "next-auth/react"; // Hook to access session data and status

// Import UI components for different states/roles
import LoginPage from "./components/LoginPage"; // Login Page Component
// import JobSeekerDashboard from "./components/JobSeekerDashboard";
// import EmployerDashboard from "./components/EmployerDashboard"; // Adjust path

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

/**
 * The main Home component for the application.
 * It conditionally renders the login page or a dashboard based on the user's
 * authentication status and role.
 */
export default function Home() {
  // Fetch session data and authentication status
  const { data: session, status } = useSession();
  // Initialize router for navigation
  const router = useRouter();

  // Effect hook to handle redirection based on authentication status and role.
  // This runs after every render where 'status', 'session', or 'router' changes.
  useEffect(() => {
    // If user is authenticated, redirect them to their respective dashboard.
    if (status === "authenticated") {
      const userRole = session?.user?.role;
      if (userRole === "job_seeker") {
        router.push("/dashboard/job-seeker"); // Redirect to Job Seeker Dashboard
      } else if (userRole === "employer") {
        router.push("/dashboard/employer"); // Redirect to Employer Dashboard
      }
    }

    // No explicit else for 'unauthenticated' or 'loading'
    // The component will render LoginPage or Loading state as fallback
  }, [status, session, router]); // Depend on status, session, and router

  // If session status is still loading, do nothing yet.
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
        <p className="text-xl text-gray-700">
          Loading authentication status...
        </p>
      </div>
    );
  }

  // If status is 'unauthenticated', the component will naturally render the LoginPage below.

  if (status === "unauthenticated") {
    return (
      <main className={inter.className}>
        <LoginPage />
      </main>
    );
  }

  // If authenticated, but useEffect hasn't redirected yet (brief flicker)
  // or if there's an issue with role, we can show a temporary message
  // This part will ideally be skipped quickly by the useEffect redirect
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
      <p className="text-xl text-gray-700">Redirecting...</p>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
