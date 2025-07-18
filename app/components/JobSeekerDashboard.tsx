// app/components/JobSeekerDashboard.tsx
"use client";

// app/components/JobSeekerDashboard.tsx

import React from "react";
// import { useRouter } from 'next/router'; // Uncomment if using Pages Router and need redirection

// Define props for the JobSeekerDashboard component
interface JobSeekerDashboardProps {
  userName?: string; // Optional prop for the user's name
}

const JobSeekerDashboard: React.FC<JobSeekerDashboardProps> = ({
  userName = "Job Seeker",
}) => {
  // In a real app, you'd get the user's name from authentication context/session
  // const router = useRouter(); // Uncomment if using Pages Router

  // Function to handle sign out (placeholder for now)
  const handleSignOut = () => {
    // In a real app, you'd call signOut() from next-auth here
    console.log("User signed out!");
    // router.push('/login'); // Redirect to login page after sign out (if using Pages Router)
    // For App Router, you'd use redirect('/login') or a client-side push to /login
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8 font-inter relative">
      {/* Sign Out Button (Top Right - remains relative to the full page container) */}
      <button
        onClick={handleSignOut}
        className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 transition duration-150 ease-in-out shadow-sm"
      >
        Sign Out
      </button>

      {/* Main Content Area - now a full-width container for the dashboard elements */}
      <div className="w-full max-w-4xl text-center pt-16 pb-8">
        {" "}
        {/* Added pt-16 to give space for sign-out button */}
        {/* Welcome Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Welcome back, <span className="text-indigo-600">{userName}</span>!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Find Your Dream Job with Zool Job Portal
        </p>
        {/* Action Boxes Container */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mb-12">
          {/* Upload Resume Box */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl w-64 h-64 sm:w-72 sm:h-72 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition duration-200 ease-in-out group bg-white shadow-sm">
            <div className="text-indigo-500 group-hover:text-indigo-600 mb-4 transition duration-200 ease-in-out">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700">
              Upload your Resume
            </p>
          </div>

          {/* Complete Profile Box */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl w-64 h-64 sm:w-72 sm:h-72 cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition duration-200 ease-in-out group bg-white shadow-sm">
            <div className="text-purple-500 group-hover:text-purple-600 mb-4 transition duration-200 ease-in-out">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-700">
              Complete your profile
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-purple-800 transition duration-200 ease-in-out">
              20%
            </p>
          </div>
        </div>
        {/* Footer Text */}
        <div className="text-center text-xs text-gray-400 pt-8 border-t border-gray-200 mx-auto w-48">
          Zool Job Portal
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
