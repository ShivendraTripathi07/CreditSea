import { DarkThemeToggle } from "flowbite-react";
import UserNavbar from "./navbar";
import AdminVerifierNav from "./AdminVerifierNav";
import UserDashboard from "./UserDashboard";
import LoanDashboard from "./LoanVerifierDashboard";
import AdminDashboard from "./AdminDashboard";
import LoginPage from "./Login";
import { Routes, Route } from "react-router-dom"
import SignupPage from "./SignUp";
export default function App() {


  return (
    <main className="flex flex-col bg-white px-4 pt-16 dark:bg-gray-900">
      <UserNavbar />

      {/* <div className="mx-20">
    <UserDashboard/>
    </div> */}
      {/* <LoanDashboard /> */}

      {/* <Login */}
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </main>
  );
}
