// app/components/ErrorMessage.tsx
"use client";

import React, { useState, useEffect } from "react";

interface ErrorMessageProps {
  message: string; // The message to display
  type?: "error" | "success" | "info"; // Type of message for styling
  onDismiss?: () => void; // Optional callback when message is dismissed
  autoDismissTimeout?: number; // Optional: time in ms before auto-dismiss (0 for no auto-dismiss)
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  type = "error",
  onDismiss,
  autoDismissTimeout = 0,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Determine styling based on message type
  let bgColor = "bg-red-100";
  let textColor = "text-red-800";
  let iconColor = "text-red-500";
  let iconPath = (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  ); // X in circle for error

  if (type === "success") {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
    iconColor = "text-green-500";
    iconPath = (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    ); // Checkmark in circle for success
  } else if (type === "info") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-800";
    iconColor = "text-blue-500";
    iconPath = (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    ); // Info circle for info
  }

  // Auto-dismiss logic
  useEffect(() => {
    if (autoDismissTimeout > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onDismiss) {
          onDismiss();
        }
      }, autoDismissTimeout);
      return () => clearTimeout(timer); // Clean up timer on unmount
    }
  }, [autoDismissTimeout, onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md transition-opacity duration-300 ease-in-out ${bgColor}`}
      role="alert"
    >
      <div className="flex items-center">
        <div className={`flex-shrink-0 mr-3 ${iconColor}`}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {iconPath}
          </svg>
        </div>
        <p className={`text-sm font-medium ${textColor}`}>{message}</p>
      </div>
      <button
        onClick={handleDismiss}
        className={`ml-4 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${iconColor} hover:bg-opacity-75 transition duration-150 ease-in-out`}
        aria-label="Dismiss"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ErrorMessage;
