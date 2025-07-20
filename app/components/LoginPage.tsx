//
// app/components/LoginPage.tsx

// This component serves as the main entry point for user authentication.
// It displays a two-column layout: a hero section and a dynamic form section
// that allows users to switch between login and signup forms.

"use client";

import React, { useState } from "react"; // useState for managing form visibility
import LoginForm from "./LoginForm"; // Component for the login form
import SignUpForm from "./SignUpForm"; // Component for the signup form

/**
 * LoginPage component.
 * Manages the display and transition between the LoginForm and SignUpForm.
 */
const LoginPage: React.FC = () => {
  // State to control which form is currently visible: true for Login, false for Sign Up.
  const [showLogin, setShowLogin] = useState(true);

  // Function to switch the active form to the Sign Up form.
  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  // Function to switch the active form back to the Login form.
  const handleSignInClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      {/* Main container for the two-column layout, with rounded corners and shadow. */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-6xl">
        {/* Left Column: Hero Image Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-8 relative overflow-hidden z-10">
          {/* Abstract background shapes for modern feel */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>

          {/* Content for the Hero Section */}
          <div className="text-white text-center p-4">
            <svg
              className="w-32 h-32 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M22.767 3.589c0 1.209-.543 2.283-1.37 2.934l-8.034 7.174c-.149.128-.343-.078-.235-.25l2.946-5.9c.083-.165-.024-.368-.194-.368H4.452c-1.77 0-3.219-1.615-3.219-3.59C1.233 1.616 2.682 0 4.452 0h15.096c1.77-.001 3.219 1.614 3.219 3.589zM4.452 24h15.096c1.77 0 3.219-1.616 3.219-3.59 0-1.974-1.449-3.59-3.219-3.59H8.12c-.17 0-.277-.202-.194-.367l2.946-5.9c.108-.172-.086-.378-.235-.25l-8.033 7.173c-.828.65-1.37 1.725-1.37 2.934 0 1.974 1.448 3.59 3.218 3.59z"
              />
            </svg>
            <h3 className="text-2xl font-semibold mb-2">
              Your Journey Starts Here
            </h3>
            <p className="text-lg opacity-90">
              Find the perfect job or the ideal candidate.
            </p>
          </div>
        </div>

        {/* Right Column: Form Section with Transition */}
        {/* Adjusted padding to reduce overall height and added relative h-full */}
        <div className="md:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-10 relative h-full">
          {/* Use a grid to layer the forms so the active one dictates height */}
          <div className="grid grid-cols-1 grid-rows-1 w-full max-w-md">
            {/* Login Form Container */}
            <div
              className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${
                showLogin
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full pointer-events-none"
              }`}
            >
              <LoginForm onSignUpClick={handleSignUpClick} />
            </div>

            {/* Sign Up Form Container */}
            <div
              className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${
                showLogin
                  ? "opacity-0 translate-x-full pointer-events-none"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <SignUpForm onSignInClick={handleSignInClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
