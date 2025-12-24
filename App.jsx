import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Container = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
    <div className="w-full max-w-[375px] bg-white rounded-lg p-6">
      {children}
    </div>
  </div>
);

/* ---------------- WELCOME ---------------- */
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Container>
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
    </Container>
  );
};

/* ---------------- LOGIN ---------------- */
const Login = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <label className="text-purple-600 font-semibold">Email Address</label>
      <input
        className="w-full border rounded-lg px-3 py-2 mb-4"
        placeholder="Enter email address"
      />

      <label className="text-purple-600 font-semibold">Password</label>
      <input
        type="password"
        className="w-full border rounded-lg px-3 py-2 mb-6"
        placeholder="Enter password"
      />

      <button className="w-full bg-gray-300 text-white py-3 rounded-lg font-semibold">
        Login
      </button>
    </Container>
  );
};

/* ---------------- REGISTER ---------------- */
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>

      <label className="text-purple-600 font-semibold">Full Name *</label>
      <input
        className="w-full border rounded-lg px-3 py-2 mb-4"
        placeholder="Marry Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="text-purple-600 font-semibold">Phone Number *</label>
      <input className="w-full border rounded-lg px-3 py-2 mb-4" />

      <label className="text-purple-600 font-semibold">Email Address *</label>
      <input className="w-full border rounded-lg px-3 py-2 mb-4" />

      <label className="text-purple-600 font-semibold">Password *</label>
      <input
        type="password"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <label className="text-purple-600 font-semibold">Company Name</label>
      <input className="w-full border rounded-lg px-3 py-2 mb-4" />

      <p className="font-semibold mb-2">Are you an Agency? *</p>
      <div className="flex gap-4 mb-6">
        <label><input type="radio" defaultChecked /> Yes</label>
        <label><input type="radio" /> No</label>
      </div>

      <button
        onClick={() => navigate("/settings", { state: { name } })}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
      >
        Create Account
      </button>
    </Container>
  );
};

/* ---------------- SETTINGS ---------------- */
const Settings = ({ location }) => {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=PopX"
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="font-bold">Marry Doe</h2>
          <p className="text-gray-500">marry@gmail.com</p>
        </div>
      </div>

      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </Container>
  );
};

/* ---------------- APP ---------------- */
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
