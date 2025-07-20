//
// app/components/SignUpForm.tsx

// This component provides the user interface for registering a new account.
// It includes fields for personal details, role selection, and handles form submission.

import React, { useState } from "react"; // useState for managing form inputs and state
import Image from "next/image"; // Next.js Image component for optimized images
import { signIn } from "next-auth/react"; // NextAuth.js function for automatic sign-in after registration
import { useRouter } from "next/navigation"; // Hook for programmatic navigation (App Router)
import { createUser } from "@/lib/users"; // Custom function to create a new user (mock backend)
import ErrorMessage from "./ErrorMessages"; // Component to display dynamic error messages

// Define props for the SignUpForm component
interface SignUpFormProps {
  onSignInClick: () => void; // Callback function to switch back to the login form
}

/**
 * SignUpForm component.
 * Manages user input for registration, handles form submission,
 * performs client-side validation, and displays feedback messages.
 */
const SignUpForm: React.FC<SignUpFormProps> = ({ onSignInClick }) => {
  // State for form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for user role selection, defaulting to 'job_seeker'
  const [role, setRole] = useState<"job_seeker" | "employer">("job_seeker"); // Default role
  // State for displaying error messages
  const [error, setError] = useState<string | null>(null);
  // State for managing loading status during form submission
  const [isLoading, setIsLoading] = useState(false); // For loading state

  // Initialize router for potential redirection
  const router = useRouter();

  /**
   * Handles the form submission for user registration.
   * Performs validation, calls createUser, and attempts automatic sign-in.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null); // Clear any previous error messages
    setIsLoading(true); // Set loading state to true

    // --- Client-Side Validation ---
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      // Example: minimum password length
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      // 1. Attempt to create the user using our mock backend function.
      const newUser = await createUser(
        email,
        password,
        role,
        firstName + " " + lastName
      );
      console.log("User registered (mock):", newUser);

      // 2. If registration is successful, automatically sign in the new user.
      const result = await signIn("credentials", {
        redirect: false, // Prevent automatic redirection; handle manually
        email, // Use the newly registered email
        password, // Use the plaintext password for sign-in
      });

      // Check for issues during automatic sign-in
      if (result?.error) {
        // This error would typically be 'CredentialsSignin' if the auto-login failed for some reason
        setError(
          "Registration successful, but automatic sign-in failed. Please try logging in."
        );
        console.error("Auto-login failed after registration:", result.error);
        router.push("/"); /// Redirect to login page if auto-login fails
      } else if (result?.ok) {
        console.log("Auto-login successful after registration!");
        // Redirection to dashboard is handled by app/page.tsx (or pages/index.tsx)
      }
    } catch (err: any) {
      // Catch and display errors from the createUser function (e.g., email already exists)
      setError(err.message || "Registration failed. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false); // Reset loading state: // Always reset loading state after attempt
    }
  };

  return (
    // Main container for the signup form, with relative positioning for error message overlay
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
      {/* Error Message Display: Appears as an overlay at the top of the form */}
      {error && (
        <div className="absolute inset-x-0 top-0 z-10 p-4">
          <ErrorMessage
            message={error}
            onDismiss={() => setError(null)}
            autoDismissTimeout={5000}
          />
        </div>
      )}

      {/* Main Title of the form, with top margin to prevent overlap with error message */}
      <h2 className="text-2xl font-extrabold text-gray-900 text-center leading-tight mt-8">
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email-signup" className="sr-only">
          Email address
        </label>
        <input
          id="email-signup"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
          placeholder="Email"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password-signup" className="sr-only">
          Password
        </label>
        <input
          id="password-signup"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
          placeholder="Password"
        />
      </div>

      {/* Confirm Password Input */}
      <div>
        <label htmlFor="confirm-password" className="sr-only">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="relative block w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
          placeholder="Confirm Password"
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
            checked={role === "job_seeker"} // Controlled component
            onChange={() => setRole("job_seeker")}
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
            checked={role === "employer"} // Controlled component
            onChange={() => setRole("employer")}
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
          onClick={handleSubmit} // Trigger signup on button click
          disabled={isLoading} // Disable button while loading
          className="group relative flex justify-center w-full py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Sign Up"
          )}
        </button>
      </div>

      {/* Google SSO Button */}
      <div>
        <button
          type="button"
          disabled={isLoading} // Disable button while loading
          className="group relative flex justify-center w-full py-3 px-6 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image
            src="https://www.svgrepo.com/show/512321/google-178.svg"
            alt="Google logo"
            width={20}
            height={20}
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
              onSignInClick(); // callback handler back bring back the sign in form
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
