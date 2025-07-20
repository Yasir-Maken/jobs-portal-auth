//
// app/components/LoginForm.tsx

// This component provides the user interface for logging into the application.
// It handles input fields, form submission, and displays error messages.

import React, { useState } from "react"; // useState for managing form inputs and error state
import { signIn } from "next-auth/react"; // NextAuth.js function for client-side sign-in
import ErrorMessage from "./ErrorMessages"; // Component to display dynamic error messages
// import { useRouter } from "next/navigation"; // For App Router. If Pages Router, use 'next/router'Hook for programmatic navigation (App Router)

// Define props for the LoginForm component
interface LoginFormProps {
  onSignUpClick: () => void; // Callback function to switch to the signup form
}

/**
 * LoginForm component.
 * Manages user input for email and password, handles login submission,
 * and displays feedback messages.
 */

const LoginForm: React.FC<LoginFormProps> = ({ onSignUpClick }) => {
  // State for form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for displaying error messages
  const [error, setError] = useState<string | null>(null);

  // Initialize router for potential future client-side redirection (though handled by parent for now)
  // const router = useRouter(); // Initialize router

  /**
   * Handles the form submission for user login.
   * Calls NextAuth's signIn function with credentials.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    setError(null); // Clear any previous error messages

    // Attempt to sign in using NextAuth's credentials provider
    const result = await signIn("credentials", {
      redirect: false, // Do not redirect automatically, handle manually
      email,
      password,
    });

    // Check for authentication errors
    if (result?.error) {
      // Map generic NextAuth errors to user-friendly messages for security
      let errorMessage = "An unexpected error occurred. Please try again."; // Default generic message
      if (result.error === "CredentialsSignin") {
        errorMessage =
          "Invalid email or password. Please check your email & password.";
      }
      setError(errorMessage); // Set error message for display
      console.error("Login failed:", result.error); // Keep original error in console for debugging
    } else if (result?.ok) {
      // Login successful. Redirection to dashboard is handled by app/page.tsx
      console.log("Login successful!");
    }
  };

  return (
    // Main container for the login form, with relative positioning for error message overlay
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl relative">
      {/* Error Message Display: Appears as an overlay at the top of the form  like tooltip*/}
      {error && (
        <div className="absolute inset-x-0 top-0 z-10 p-4">
          <ErrorMessage
            message={error}
            onDismiss={() => setError(null)} // Allows user to manually dismiss the message
            autoDismissTimeout={5000} // Message auto-dismisses after 5 seconds
          />
        </div>
      )}

      {/* Main Title */}
      {/* Main Title of the form, with top margin to prevent overlap with error message */}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          <button
            onClick={handleSubmit} // Trigger login on button click
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
