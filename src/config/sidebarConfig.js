import {
    LayoutDashboard,
    CheckSquare,
    Users,
    Settings,
    FileText,
} from "lucide-react";

export const sidebarConfig = {
    student: [
        { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
        { label: "Attendance", path: "/attendance", icon: CheckSquare },
        { label: "History", path: "/history", icon: FileText },
    ],

    admin: [
        { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
        { label: "Users", path: "/admin/users", icon: Users },
        { label: "Settings", path: "/admin/settings", icon: Settings },
        { label: "Reports", path: "/admin/reports", icon: FileText },
    ],
};
