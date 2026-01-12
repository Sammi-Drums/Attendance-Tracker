import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
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
                <h2 className="auth-title">
                    {role.charAt(0).toUpperCase() + role.slice(1)} Login
                </h2>

                <input
                    className="auth-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    className="auth-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="auth-button" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}
