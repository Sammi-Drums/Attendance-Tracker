import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // Redirect to role selection
    };

    return (
        <header
            style={{
                height: "60px",
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
            }}
        >
            <strong>{user.role.toUpperCase()} PANEL</strong>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: 500 }}>@{user.username}</span>

                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
}
