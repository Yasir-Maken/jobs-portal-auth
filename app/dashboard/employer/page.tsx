// app/dashboard/employer/page.tsx
import EmployerDashboard from "../../components/EmployerDashboard"; // Adjust path
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function EmployerPage() {
  // In a real app, you'd get the company's name from NextAuth session
  const companyName = "XYZ Company"; // Placeholder for now
  return (
    <main className={inter.className}>
      <EmployerDashboard companyName={companyName} />
    </main>
  );
}
