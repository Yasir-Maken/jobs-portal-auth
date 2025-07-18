// import Image from "next/image";
// app/page.tsx
import LoginPage from "./components/LoginPage"; // Adjust path as needed
import { Inter } from "next/font/google"; // Import Inter font

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export default function Home() {
  return (
    <>
      <main className={inter.className}>
        {" "}
        {/* Apply font to main */}
        <LoginPage />
      </main>
    </>
  );
}
