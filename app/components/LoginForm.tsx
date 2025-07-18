// app/components/LoginForm.tsx

import React, { useState } from "react";
import ErrorMessage from "./ErrorMessages"; // Adjust path

// const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
//   return (
//     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
//       {/* ... rest of your form ... */}
//       <button>Sign In</button>
//     </div>
//   );
// };

//------------------------------------------------

// Define props for the LoginForm component
interface LoginFormProps {
  onSignUpClick: () => void; // Function to call when "Sign Up" link is clicked
}

const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an error
    setError("Invalid email or password. Please try again.");
    // In a real app, this would come from your API response
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl relative">
      {/* Main Title */}
      <h2 className="text-2xl font-extrabold text-gray-900 text-center leading-tight">
        Match Qualified Candidate <br /> To Great Organization
      </h2>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
          placeholder="Your Email"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
          placeholder="Your Password"
        />
      </div>

      {/* Forgot Password and Sign In Button */}
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
          >
            Forgot your password?
          </a>
        </div>
        <div>
          <div className="absolute inset-x-0 top-0 z-10 p-4">
            {error && (
              <ErrorMessage
                message={error}
                onDismiss={() => setError(null)} // Allows user to dismiss
                autoDismissTimeout={5000} // Optional: auto-dismiss after 5 seconds
              />
            )}
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="group relative flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Sign Up Link (Moved back inside LoginForm) */}
      <div className="text-center text-sm mt-6">
        <p className="text-gray-600">
          Do nott have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSignUpClick();
            }} // Call prop function on click
            className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
          >
            Sign Up
          </a>
        </p>
      </div>

      {/* Footer Text (Moved back inside LoginForm) */}
      <div className="text-center text-xs text-gray-400 pt-8">
        Zool Job Portal
      </div>
    </div>
  );
};

export default LoginForm;
