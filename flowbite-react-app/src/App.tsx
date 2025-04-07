// src/App.tsx
import React, { useEffect, useState } from "react";
import AppContext from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login";
import SignupPage from "./SignUp";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import VerifierDashboard from "./LoanVerifierDashboard"; // assuming you have this
import UserNavbar from "./Navbar";

type UserType = {
  _id: string;
  fullName: string;
  email: string;
  role: string;
};

const App: React.FC = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true); // For better UX

  const fetchUserDetail = async () => {
    try {
      const res = await fetch("http://localhost:8000/user/userDetail", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.data);
        console.log("User fetched:", data.data);
      } else {
        console.error("Error:", data.message);
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  // Conditional dashboard logic
  const renderDashboard = () => {
    if (!user) return <LoginPage />;
    if (user.role === "admin") return <AdminDashboard />;
    if (user.role === "user") return <UserDashboard />;
    if (user.role === "verifier") return <VerifierDashboard />;
    return <div>Invalid role</div>;
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AppContext.Provider value={{ fetchUserDetail, user, setUser }}>

      <UserNavbar />
      <div className="mt-10">
      <Routes>
        <Route path="/" element={renderDashboard()} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      </div>

    </AppContext.Provider>
  );
};

export default App;
