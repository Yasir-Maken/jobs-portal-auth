# Zool Job Portal - Authentication System

## Project Description

This project implements a secure and responsive authentication system for a fictional "Zool Job Portal." It features distinct user roles (Job Seeker and Employer) with personalized dashboards, a smooth login/signup experience, and a robust, modern UI built with Next.js and Tailwind CSS. The authentication logic is handled by NextAuth.js, currently backed by an in-memory mock database for development.

## Features

- - **Role-Based Authentication:** Differentiates between Job Seekers and Employers.
-
- - **Secure Password Handling:** Implements `bcryptjs` for password hashing and verification.
-
- - **Dynamic Dashboards:** Redirects users to their respective dashboards upon successful login.
-
- - **Smooth UI Transitions:** Seamless form swapping between login and signup.
-
- - **Responsive Design:** Optimized for various screen sizes (mobile, tablet, desktop).
-
- - **User Feedback:** Clear error and success messages for authentication flows.
-
- - **Custom 404 Page:** Provides a friendly experience for invalid URLs.
-
- - **Modular Component Architecture:** Reusable UI components for maintainability.
-
- - **TypeScript:** Enhances code quality and reduces runtime errors.
-

## Technologies Used

- - **Next.js 15+ (App Router):** React framework for production-grade applications.
-
- - **React:** Frontend library for building user interfaces.
-
- - **TypeScript:** Strongly typed superset of JavaScript.
-
- - **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-
- - **NextAuth.js:** Flexible authentication library for Next.js applications.
-
- - **bcryptjs:** Library for secure password hashing.
-

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### 1\. Clone the Repository

```
git clone <your-repository-url> # Replace with your actual repo URL
cd jobs-portal-auth
```

### 2\. Install Dependencies

```
npm install
```

### 3\. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```
# .env.local
NEXTAUTH_SECRET="YOUR_SUPER_STRONG_RANDOM_SECRET_HERE_AT_LEAST_32_CHARS"
```

**Important:** Replace the placeholder with a truly random, long string. You can generate one using `openssl rand -base64 32` in your terminal. Do not commit this file to version control.

### 4\. Generate Mock User Hashes

Since the mock backend uses hashed passwords, you need to generate them for the initial static users:

Create a temporary file `generate-hash.js` in your project root:

```
// generate-hash.js
const bcrypt = require('bcryptjs');

const plaintextPassword1 = 'password123';
const plaintextPassword2 = 'password456';
const plaintextPassword3 = 'companypass1';
const plaintextPassword4 = 'companypass2';

const saltRounds = 10;

async function generateHashes() {
  console.log(`Hash for "${plaintextPassword1}": ${await bcrypt.hash(plaintextPassword1, saltRounds)}`);
  console.log(`Hash for "${plaintextPassword2}": ${await bcrypt.hash(plaintextPassword2, saltRounds)}`);
  console.log(`Hash for "${plaintextPassword3}": ${await bcrypt.hash(plaintextPassword3, saltRounds)}`);
  console.log(`Hash for "${plaintextPassword4}": ${await bcrypt.hash(plaintextPassword4, saltRounds)}`);
}

generateHashes();
```

Run it:

```
node generate-hash.js
```

Copy the generated hashes and paste them into the `passwordHash` fields of the `mockUsers` array in `lib/users.ts`. Then, delete `generate-hash.js`.

### 5\. Run the Development Server

```
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Usage

### Logging In

Use the following mock credentials (from `lib/users.ts`):

**Job Seeker:**

- - **Email:** `jobseeker1@example.com`
-
- - **Password:** `password123`
-

**Employer:**

- - **Email:** `employer1@example.com`
-
- - **Password:** `companypass1`
-

### Signing Up

Navigate to the login page and click "Sign Up". Fill in the details for a new user. After successful registration, you will be redirected to the login page with a success message, prompting you to log in with your new credentials.

### Signing Out

Click the "Sign Out" button located at the top-right of the dashboard pages.
