// lib/users.ts
import bcrypt from "bcryptjs"; // Library for hashing and comparing passwords securely
// This file simulates a user database for authentication purposes.
// In a real application, this logic would interact with a persistent database like MongoDB Atlas.

/**
 * Defines the structure for a User object.
 * Passwords are stored as hashes for security.
 */
export interface User {
  id: string;
  email: string;
  passwordHash: string; // Stores the bcrypt hashed password
  role: "job_seeker" | "employer";
  name?: string; // Optional: for displaying in dashboards
  companyName?: string; // Optional: for employer dashboard
}

// Our mock user data (in-memory "database")

/**
 * An in-memory array serving as a mock user database.
 * Passwords are pre-hashed for demonstration purposes.
 * IMPORTANT: This data resets when the server process restarts.
 */
export const mockUsers: User[] = [
  // Example Job Seeker Accounts (passwords are 'password123' and 'password456' respectively)
  {
    id: "js1",
    email: "jobseeker1@example.com",
    passwordHash:
      "$2b$10$/txBCT3DEMGewdWc.o2/ROJPmVgWWeKR4Z8.rQTDk2oHbj6567etC", // Hashed 'password123'
    role: "job_seeker",
    name: "Alice Smith",
  },
  {
    id: "js2",
    email: "jobseeker2@example.com",
    passwordHash:
      "$2b$10$w8DIuBc0gGiEc8OKto7NMu/aPgc.NIairz9QrL9GKJOE7GRVHR5w.", // Hashed 'password456'
    role: "job_seeker",
    name: "Bob Johnson",
  },
  // Example Employer Accounts (passwords are 'companypass1' and 'companypass2' respectively)
  {
    id: "emp1",
    email: "employer1@example.com",
    passwordHash:
      "$2b$10$rvMhZPJJKUNi1OhZrHH7/OoU7Nz.hVumEsesyJ/W/n0x8rYJTYlZG", // Hashed 'companypass1'
    role: "employer",
    companyName: "Tech Solutions Inc.",
  },
  {
    id: "emp2",
    email: "employer2@example.com",
    passwordHash:
      "$2b$10$TkSq60xYPetc2hUYPUPabu3Syen4/eCfO8NRNfDGCuJDWJtTLFBty", // Hashed 'companypass2'
    role: "employer",
    companyName: "Global Recruiters LLC",
  },
];

/**
 * A temporary, in-memory cache for users created during the current server process lifecycle.
 * This is a workaround for auto-login immediately after creation in a mock setup,
 * as `mockUsers` is a static array. This cache resets on server restart.
 */
const recentlyCreatedUsers: User[] = [];

/**
 * Finds a user by their email address.
 * Simulates an asynchronous database lookup.
 * @param {string} email - The email address to search for.
 * @returns {Promise<User | null>} The found user object or null if not found.
 */
export async function findUserByEmail(email: string): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Prioritize recently created users for immediate lookup
      const recentlyCreated = recentlyCreatedUsers.find(
        (u) => u.email === email
      );
      if (recentlyCreated) {
        console.log(
          "findUserByEmail: Found in recentlyCreatedUsers:",
          recentlyCreated.email
        ); // DEBUG LOG
        resolve(recentlyCreated);
        return;
      }

      // Fallback to mockUsers
      const user = mockUsers.find((u) => u.email === email);
      if (user) {
        console.log("findUserByEmail: Found in mockUsers:", user.email); // DEBUG LOG
      } else {
        console.log("findUserByEmail: User not found for email:", email); // DEBUG LOG
      }
      resolve(user || null);
    }, 100); // Simulate network delay
  });
}

/**
 * Verifies a plaintext password against a stored bcrypt hashed password.
 * @param {string} inputPassword - The plaintext password provided by the user.
 * @param {string} storedPasswordHash - The hashed password retrieved from storage.
 * @returns {Promise<boolean>} True if passwords match, false otherwise.
 */
export async function verifyPassword(
  inputPassword: string,
  storedPasswordHash: string
): Promise<boolean> {
  return bcrypt.compare(inputPassword, storedPasswordHash);
}

/**
 * Creates a new user, hashes their password, and adds them to the mock database.
 * @param {string} email - The user's email address.
 * @param {string} passwordPlain - The user's plaintext password.
 * @param {'job_seeker' | 'employer'} role - The user's role.
 * @param {string} [name] - Optional: The user's full name.
 * @param {string} [companyName] - Optional: The user's company name (for employers).
 * @returns {Promise<User>} The newly created user object.
 * @throws {Error} If a user with the given email already exists.
 */
export async function createUser(
  email: string,
  passwordPlain: string,
  role: "job_seeker" | "employer",
  name?: string,
  companyName?: string
): Promise<User> {
  // Check if a user with this email already exists in either static or dynamic mock data
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  // Hash the plaintext password
  const saltRounds = 10; // Recommended salt rounds // Cost factor for hashing; higher is more secure but slower
  const passwordHash = await bcrypt.hash(passwordPlain, saltRounds);

  // Generate a simple unique ID for the mock user
  const id = `mock-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  const newUser: User = {
    id,
    email,
    passwordHash,
    role,
    name,
    companyName,
  };

  mockUsers.push(newUser); // Add to our static in-memory array
  recentlyCreatedUsers.push(newUser);

  console.log("New user created (mock):", newUser); // Log new user creation for development
  console.log("All mock users:", mockUsers);

  return newUser;
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
