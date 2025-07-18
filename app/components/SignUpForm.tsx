// app/components/SignUpForm.tsx

import React from "react";
import Image from "next/image";

interface SignUpFormProps {
  onSignInClick: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignInClick }) => {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
      {/* ... (previous content of SignUpForm.tsx) ... */}

      {/* Main Title */}
      <h2 className="text-2xl font-extrabold text-gray-900 text-center leading-tight">
        Match Qualified Candidate <br /> To Great Organization
      </h2>

      {/* First Name & Last Name Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="sr-only">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            required
            className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="sr-only">
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            required
            className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email-signup" // Changed ID to avoid conflict with login form
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
          placeholder="Email"
        />
      </div>

      {/* Role Selection */}
      <div className="flex items-center justify-center space-x-6 pt-2">
        <div className="flex items-center">
          <input
            id="job-seeker"
            name="role"
            type="radio"
            value="job_seeker"
            defaultChecked // Default to Job Seeker
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="job-seeker"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Job Seeker
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="employer"
            name="role"
            type="radio"
            value="employer"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="employer"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Employer
          </label>
        </div>
      </div>

      {/* Sign Up Button */}
      <div>
        <button
          type="submit"
          className="group relative flex justify-center w-full py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
        >
          Sign Up
        </button>
      </div>

      {/* Google SSO Button */}
      <div>
        <button
          type="button"
          className="group relative flex justify-center w-full py-3 px-6 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-sm hover:shadow-md"
        >
          {/* Using next/image component */}
          <Image
            src="https://www.svgrepo.com/show/512321/google-178.svg"
            alt="Google logo"
            width={20} // Specify width
            height={20} // Specify height
            className="mr-3"
          />
          Sign Up with Google Account
        </button>
      </div>

      {/* Sign In Link (already here) */}
      <div className="text-center text-sm mt-6">
        <p className="text-gray-600">
          Already have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSignInClick();
            }}
            className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
          >
            Sign In
          </a>
        </p>
      </div>

      {/* Footer Text (Moved back inside SignUpForm) */}
      <div className="text-center text-xs text-gray-400 pt-8">
        Zool Job Portal
      </div>
    </div>
  );
};

export default SignUpForm;
