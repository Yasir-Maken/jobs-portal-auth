// app/components/EmployerDashboard.tsx
"use client";

import React from "react";
// import { useRouter } from 'next/router'; // Uncomment if using Pages Router and need redirection

// Define props for the EmployerDashboard component
interface EmployerDashboardProps {
  companyName?: string; // Optional prop for the company's name
}

const EmployerDashboard: React.FC<EmployerDashboardProps> = ({
  companyName = "Company",
}) => {
  // In a real app, you'd get the company's name from authentication context/session
  // const router = useRouter(); // Uncomment if using Pages Router

  // Function to handle sign out (placeholder for now)
  const handleSignOut = () => {
    // In a real app, you'd call signOut() from next-auth here
    console.log("Employer signed out!");
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

      {/* Main Content Area - full-width container for the dashboard elements */}
      <div className="w-full max-w-5xl text-center pt-16 pb-8">
        {" "}
        {/* Increased max-w for three boxes */}
        {/* Welcome Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Welcome back, <span className="text-indigo-600">{companyName}</span>!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Reach Qualified Candidates Faster with Zool Job Portal
        </p>
        {/* Action Boxes Container */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mb-12">
          {/* Post Job Box */}
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
              Post Job
            </p>
          </div>

          {/* View Applicants Box */}
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-700">
              View Applicants
            </p>
          </div>

          {/* Your Jobs List Box */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl w-64 h-64 sm:w-72 sm:h-72 cursor-pointer hover:border-green-500 hover:bg-green-50 transition duration-200 ease-in-out group bg-white shadow-sm">
            <div className="text-green-500 group-hover:text-green-600 mb-4 transition duration-200 ease-in-out">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>

                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 13.255A23.55 23.55 0 0112 15c-1.685 0-3.325-.119-4.907-.344M4.5 14.106V17a1 1 0 001 1h2.5M19.5 14.106V17a1 1 0 01-1 1h-2.5m-11-10H8.5m-3 4H7.5m-2.5 4H6.5m-1.5 4H5.5m-1.5 4H4.5m-1.5 4H3.5m-1.5 4H2.5m-1.5 4H1.5m-1.5 4H.5M12 21V3m-4 8h8m-8 4h8m-8 4h8"
                ></path> */}
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-green-700">
              Your Jobs List
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

export default EmployerDashboard;
