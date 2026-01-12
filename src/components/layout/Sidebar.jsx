import { NavLink } from "react-router-dom";
import { useState } from "react";
import { sidebarConfig } from "../../config/sidebarConfig";
import { useAuth } from "../../context/AuthContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
    const { user } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = sidebarConfig[user.role];

    return (
        <aside
            style={{
                width: collapsed ? "70px" : "220px",
                transition: "width 0.25s",
                backgroundColor: "#111827",
                color: "#ffffff",
                padding: "16px",
            }}
        >
            {/* Logo / App Name */}
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%", // Makes it a circle
                    backgroundColor: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    marginBottom: "24px",
                }}
            >
                {/* Change text size here if needed */}
                AMS
            </div>

            {/* Collapse button */}
            <button onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                {/* ↑ size prop controls icon size */}
            </button>

            {/* Menu items */}
            <nav style={{ marginTop: "20px" }}>
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={({ isActive }) => ({
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "10px",
                                marginBottom: "6px",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#ffffff",
                                backgroundColor: isActive ? "#1f2937" : "transparent",
                                fontWeight: isActive ? "600" : "400",
                            })}
                        >
                            {/* Icon size can be changed here */}
                            <Icon size={18} />

                            {!collapsed && item.label}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}
