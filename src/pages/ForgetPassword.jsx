import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Backend integration would go here
        setSubmitted(true);
    };

    return (
        <div className="auth-container">
            <form className="auth-card" onSubmit={handleSubmit}>
                <div className="auth-brand">
                    <div className="auth-logo">AMS</div>
                </div>
                <h2 className="auth-title">Reset Password</h2>
                <p className="auth-subtitle">We'll send you a recovery link</p>

                {!submitted ? (
                    <>
                        <p style={{ marginBottom: "20px", textAlign: "center", color: "#475569", fontSize: "13px" }}>
                            Enter the email address associated with your account and we'll send you a link to reset your password.
                        </p>
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
                        <button className="auth-button" type="submit">
                            Send Reset Link
                        </button>
                    </>
                ) : (
                    <>
                        <div style={{ textAlign: "center", marginBottom: "20px" }}>
                            <CheckCircle size={48} style={{ color: "#10b981", margin: "0 auto" }} />
                        </div>
                        <p style={{ marginBottom: "20px", textAlign: "center", color: "#10b981", fontWeight: "600" }}>
                            Check your email!
                        </p>
                        <p style={{ marginBottom: "20px", textAlign: "center", color: "#475569", fontSize: "13px" }}>
                            We've sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.
                        </p>
                        <button className="auth-button" type="button" onClick={() => navigate("/")}>
                            <ArrowLeft size={16} style={{ marginRight: "6px", display: "inline" }} />
                            Back to Login
                        </button>
                    </>
                )}

                {!submitted && <p className="auth-note"><Link className="auth-link" to="/"><ArrowLeft size={14} style={{ display: "inline", marginRight: "4px" }} />Back to login</Link></p>}
            </form>
        </div>
    );
}
