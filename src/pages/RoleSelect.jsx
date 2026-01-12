import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
    const navigate = useNavigate();

    const goToLogin = (role) => {
        navigate(`/login?role=${role}`);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Select Login Type</h2>

                <button className="auth-button" onClick={() => goToLogin("student")}>
                    Student Login
                </button>

                <br /><br />

                <button className="auth-button" onClick={() => goToLogin("teacher")}>
                    Teacher Login
                </button>

                <br /><br />

                <button className="auth-button" onClick={() => goToLogin("admin")}>
                    Admin Login
                </button>
            </div>
        </div>
    );
}
