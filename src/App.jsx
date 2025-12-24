import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

/* ---------- Common Mobile Container ---------- */
const MobileContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-[375px] bg-white p-6">
        {children}
      </div>
    </div>
  );
};

/* ---------- Welcome Page ---------- */
const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <h1 className="text-3xl font-bold mb-3">Welcome to PopX</h1>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/register")}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold mb-3"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="w-full bg-purple-200 text-purple-900 py-3 rounded-lg font-semibold"
      >
        Already Registered? Login
      </button>
    </MobileContainer>
  );
};

/* ---------- Login Page ---------- */
const Login = () => {
  return (
    <MobileContainer>
      <h1 className="text-2xl font-bold mb-2">
        Signin to your PopX account
      </h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <label className="block text-purple-600 font-semibold mb-1">
        Email Address
      </label>
      <input
        type="email"
        placeholder="Enter email address"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-purple-600 font-semibold mb-1">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter password"
        className="w-full border rounded-lg px-3 py-2 mb-6"
      />

      <button
        className="w-full bg-gray-300 text-white py-3 rounded-lg font-semibold"
        disabled
      >
        Login
      </button>
    </MobileContainer>
  );
};

/* ---------- Register Page ---------- */
const Register = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <h1 className="text-2xl font-bold mb-6">
        Create your PopX account
      </h1>

      <label className="block text-purple-600 font-semibold mb-1">
        Full Name *
      </label>
      <input
        placeholder="Marry Doe"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-purple-600 font-semibold mb-1">
        Phone Number *
      </label>
      <input
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-purple-600 font-semibold mb-1">
        Email Address *
      </label>
      <input
        type="email"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-purple-600 font-semibold mb-1">
        Password *
      </label>
      <input
        type="password"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="block text-purple-600 font-semibold mb-1">
        Company Name
      </label>
      <input
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <p className="font-semibold mb-2">Are you an Agency? *</p>
      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input type="radio" name="agency" defaultChecked />
          Yes
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="agency" />
          No
        </label>
      </div>

      <button
        onClick={() => navigate("/settings")}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
      >
        Create Account
      </button>
    </MobileContainer>
  );
};

/* ---------- Account Settings Page ---------- */
const Settings = () => {
  return (
    <MobileContainer>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=PopX"
          alt="profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="font-bold">Marry Doe</h2>
          <p className="text-gray-500">marry@gmail.com</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </MobileContainer>
  );
};

/* ---------- App Root ---------- */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
