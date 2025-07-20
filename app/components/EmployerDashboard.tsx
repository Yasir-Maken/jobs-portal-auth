// app/components/EmployerDashboard.tsx
// This component now focuses solely on the specific content for the Employer Dashboard,
// leveraging the reusable DashboardLayout for common structural elements.

import React from "react";
import DashboardLayout from "./DashboardLayout"; // Import the new DashboardLayout

// Define props for the EmployerDashboard component
interface EmployerDashboardProps {
  companyName?: string; // Optional prop for the company's name
}

/**
 * EmployerDashboard component.
 * Displays key actions specific to employers within the common dashboard layout.
 */
const EmployerDashboard: React.FC<EmployerDashboardProps> = ({
  companyName = "Company",
}) => {
  // Construct the personalized welcome message
  const welcomeMsg = `Welcome back, ${companyName}!`;

  return (
    // Use the reusable DashboardLayout component, with a wider max-width for three boxes
    <DashboardLayout welcomeMessage={welcomeMsg} maxWidth="max-w-5xl">
      {/* Main content specific to Employer Dashboard (e.g., action boxes) */}
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
                d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-800 group-hover:text-green-700">
            Your Jobs List
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployerDashboard;
