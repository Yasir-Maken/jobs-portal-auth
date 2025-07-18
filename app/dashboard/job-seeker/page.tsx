// app/dashboard/job-seeker/page.tsx
import JobSeekerDashboard from "../../components/JobSeekerDashboard"; // Adjust path
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function JobSeekerPage() {
  // In a real app, you'd get the user's name from NextAuth session
  const userName = "Yasir"; // Placeholder for now
  return (
    <main className={inter.className}>
      <JobSeekerDashboard userName={userName} />
    </main>
  );
}
