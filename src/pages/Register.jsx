import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock, User, Briefcase, UserCheck } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [params] = useSearchParams();
  const roleParam = params.get("role");
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(roleParam || "student");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    login({
      username,
      email,
      phone,
      role,
      organizationId: "school_001",
    });

    navigate(role === "admin" ? "/admin/dashboard" : "/dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-brand">
          <div className="auth-logo">AMS</div>
        </div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join as {role}</p>

        {error && <div style={{ color: "#dc2626", fontSize: "13px", marginBottom: "12px", textAlign: "center", padding: "8px", backgroundColor: "#fee2e2", borderRadius: "6px" }}>{error}</div>}

        <div className="auth-field">
          <User size={18} className="icon" />
          <input
            type="text"
            placeholder="Full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <Mail size={18} className="icon" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <Briefcase size={18} className="icon" />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">📚 Student</option>
            <option value="teacher">👨‍🏫 Teacher</option>
            <option value="admin">🛡️ Admin</option>
          </select>
        </div>

        <div className="auth-field">
          <Lock size={18} className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <Lock size={18} className="icon" />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <UserCheck size={18} className="icon" />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button className="auth-button" type="submit">Create Account</button>

        <p className="auth-note">Already have an account? <Link className="auth-link" to={`/login?role=${role}`}>Sign in</Link></p>
      </form>
    </div>
  );
}
