import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [params] = useSearchParams();
    const role = params.get("role");
    const navigate = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if (!role) {
        navigate("/");
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        login({
            username,
            role,
            organizationId: "school_001",
        });

        if (role === "admin") {
            navigate("/admin/settings");
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-card" onSubmit={handleSubmit}>
                <div className="auth-brand">
                    <div className="auth-logo">AMS</div>
                </div>
                <h2 className="auth-title">{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
                <p className="auth-subtitle">Sign in to your account</p>

                <div className="auth-field">
                    <Mail size={18} className="icon" />
                    <input
                        type="text"
                        placeholder="Username or email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
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

                <div className="auth-actions">
                    <Link className="auth-link" to={`/register?role=${role}`}>Create account</Link>
                    <Link className="auth-link" to="/forgot-password">Forgot password?</Link>
                </div>

                <button className="auth-button" type="submit">
                    <LogIn size={16} style={{ marginRight: "6px", display: "inline" }} />
                    Sign In
                </button>

                <p className="auth-note">Don't have an account? <Link className="auth-link" to={`/register?role=${role}`}>Register here</Link></p>
            </form>
        </div>
    );
}
