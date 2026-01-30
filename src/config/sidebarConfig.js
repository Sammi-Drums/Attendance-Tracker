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

    teacher: [
        { label: "Dashboard", path: "/teacher", icon: LayoutDashboard },
        { label: "Attendance", path: "/attendance", icon: CheckSquare },
        { label: "History", path: "/history", icon: FileText },
    ],

    admin: [
        { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
        { label: "Settings", path: "/admin/settings", icon: Settings },
    ],
};
