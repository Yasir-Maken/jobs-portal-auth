// app/dashboard/employer/page.tsx
// This page component displays the Employer Dashboard.
// It's a Client Component responsible for authentication checks and data fetching for the dashboard.

"use client"; // This directive indicates that this is a Client Component,
// allowing the use of React Hooks like useSession and useRouter.

import EmployerDashboard from "../../components/EmployerDashboard"; // Import the EmployerDashboard UI component
import { Inter } from "next/font/google"; // Google Font import for consistent typography
import { useSession } from "next-auth/react"; // Hook to access authentication session data and status
import { useRouter } from "next/navigation"; // Hook for programmatic navigation in App Router
import { useEffect } from "react"; // React Hook for side effects

// Intialize for Inter
const inter = Inter({ subsets: ["latin"] });

/**
 * EmployerPage component.
 * Handles the logic for displaying the employer-specific dashboard.
 * It checks the user's authentication status and role, redirecting if necessary.
 */
export default function EmployerPage() {
  // Fetch session data and authentication status
  const { data: session, status } = useSession();
  // Initialize router for navigation
  const router = useRouter();

  // Redirect if not authenticated or not an employer
  // Effect hook to handle redirection based on authentication status and role.
  // This ensures only authenticated employers can access this page.

  useEffect(() => {
    // If session status is still loading, do nothing yet.
    if (status === "loading") return; // Do nothing while loading

    // If user is unauthenticated OR authenticated but not an employer,
    // redirect them to the login page.

    if (status === "unauthenticated" || session?.user?.role !== "employer") {
      router.push("/"); // Redirect to login page if not authenticated or wrong role
    }
  }, [status, session, router]); // If user is unauthenticated OR authenticated but not an employer,
  // redirect them to the login page.

  // --- Conditional Rendering Logic ---

  // 1. Show a loading screen while authentication status is being determined.
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
        <p className="text-xl text-gray-700">Loading dashboard...</p>
      </div>
    );
  }

  // Only render dashboard if authenticated and correct role
  // 2. If user is authenticated AND has the 'employer' role, display the Employer Dashboard.
  if (status === "authenticated" && session?.user?.role === "employer") {
    // Safely get the company name from the session, falling back to email or a generic 'Employer'

    const companyName =
      session.user.name || session.user.email || "XYZ Company"; // Use name from session, fallback to email
    return (
      <main className={inter.className}>
        <EmployerDashboard companyName={companyName} />
      </main>
    );
  }

  // 3. Fallback: If authentication state is still resolving, or if the user
  //    is authenticated but has the wrong role (and is being redirected by useEffect),
  //    return null to prevent rendering incorrect UI before redirection.
  return null; // Or a simple loading spinner if preferred
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
