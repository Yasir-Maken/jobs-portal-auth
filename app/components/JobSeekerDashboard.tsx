// app/components/JobSeekerDashboard.tsx
// This component now focuses solely on the specific content for the Job Seeker Dashboard,
// leveraging the reusable DashboardLayout for common structural elements.

import React from "react";
import DashboardLayout from "./DashboardLayout"; // Import the new DashboardLayout

// Define props for the JobSeekerDashboard component
interface JobSeekerDashboardProps {
  userName?: string; // Optional prop for the user's name
}

/**
 * JobSeekerDashboard component.
 * Displays key actions specific to job seekers within the common dashboard layout.
 */
const JobSeekerDashboard: React.FC<JobSeekerDashboardProps> = ({
  userName = "Job Seeker",
}) => {
  // Construct the personalized welcome message
  const welcomeMsg = `Welcome back, ${userName}!`;

  return (
    // Use the reusable DashboardLayout component
    <DashboardLayout welcomeMessage={welcomeMsg} maxWidth="max-w-4xl">
      {/* Main content specific to Job Seeker Dashboard (e.g., action boxes) */}
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
    </DashboardLayout>
  );
};

export default JobSeekerDashboard;
