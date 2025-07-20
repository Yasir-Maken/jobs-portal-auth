// app/dashboard/job-seeker/page.tsx
"use client"; // This directive is essential for making this a Client Component,
//            // allowing the use of React Hooks like useSession and useRouter.

// This page component displays the Job Seeker Dashboard.
// It's a Client Component responsible for authentication checks and data fetching for the dashboard.

import JobSeekerDashboard from "../../components/JobSeekerDashboard"; // Import the JobSeekerDashboard UI component
import { Inter } from "next/font/google"; // Google Font import for consistent typography
import { useSession } from "next-auth/react"; // Hook to access authentication session data and status
import { useRouter } from "next/navigation"; // Hook for programmatic navigation in App Router
import { useEffect } from "react"; // React Hook for side effects

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

/**
 * JobSeekerPage component.
 * Handles the logic for displaying the job seeker-specific dashboard.
 * It checks the user's authentication status and role, redirecting if necessary.
 */
export default function JobSeekerPage() {
  // Fetch session data and authentication status
  const { data: session, status } = useSession();
  // Initialize router for navigation
  const router = useRouter();

  // Effect hook to handle redirection based on authentication status and role.
  // This ensures only authenticated job seekers can access this page.
  useEffect(() => {
    // If session status is still loading, do nothing yet.
    if (status === "loading") return; // Do nothing while loading
    // If user is unauthenticated OR authenticated but not a job seeker,
    // redirect them to the login page.
    if (status === "unauthenticated" || session?.user?.role !== "job_seeker") {
      router.push("/"); // Redirect to the root (login) page
    }
  }, [status, session, router]);

  // --- Conditional Rendering Logic ---

  // 1. Show a loading screen while authentication status is being determined.
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
        <p className="text-xl text-gray-700">Loading dashboard...</p>
      </div>
    );
  }

  // 2. If user is authenticated AND has the 'job_seeker' role, display the Job Seeker Dashboard.
  // Only render dashboard if authenticated and correct role
  if (status === "authenticated" && session?.user?.role === "job_seeker") {
    const userName = session.user.name || session.user.email || "Job Seeker"; // Use name from session, fallback to email
    return (
      <main className={inter.className}>
        <JobSeekerDashboard userName={userName} />
      </main>
    );
  }

  // 3. Fallback: If authentication state is still resolving, or if the user
  //    is authenticated but has the wrong role (and is being redirected by useEffect),
  //    return null to prevent rendering incorrect UI before redirection.
  return null; // Or a simple loading spinner if preferre.
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
