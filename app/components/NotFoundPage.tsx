// app/components/NotFoundPage.tsx
"use client";

import React from "react";
import Link from "next/link"; // Use next/link for client-side navigation

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter text-center">
      <div className="bg-gray-100 p-8 sm:p-10 lg:p-12 max-w-2xl w-full">
        {/* 404 Icon */}
        <div className="text-indigo-500 mb-8 mx-auto">
          <svg
            className="w-32 h-32 sm:w-48 sm:h-48 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        {/* Title and Message */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 mb-4 leading-tight">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Go to Homepage
        </Link>

        {/* Footer Text */}
        <div className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200 mx-auto w-48">
          Zool Job Portal
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
