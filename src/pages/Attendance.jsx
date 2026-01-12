import AppLayout from "../components/layout/AppLayout";
import AttendanceCard from "../components/attendance/AttendanceCard";

export default function Attendance() {
    return (
        <AppLayout>
            <h2>Attendance</h2>
            <p>Please check in when you arrive and check out when you leave.</p>

            <AttendanceCard />
        </AppLayout>
    );
}
