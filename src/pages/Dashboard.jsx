// import StatusBadge from "./StatusBadge";

// export default function AttendanceCard({ status, onCheckIn, onCheckOut, loading }) {
//     return (
//         <div style={styles.card}>
//             <h3>Today’s Attendance</h3>

//             <StatusBadge status={status} />

//             <div style={{ marginTop: "20px" }}>
//                 {status === "not_checked_in" && (
//                     <button className="primary" onClick={onCheckIn}>
//                         {loading ? "Checking in..." : "Check In"}
//                     </button>
//                 )}

//                 {(status === "present" || status === "late") && (
//                     <button className="danger" onClick={onCheckOut}>
//                         {loading ? "Checking out..." : "Check Out"}
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// }

// const styles = {
//     card: {
//         background: "#fff",
//         padding: "24px",
//         borderRadius: "12px",
//         boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//         maxWidth: "400px",
//     },
// };
import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import AttendanceCard from "../components/AttendanceCard";
import { getLocation } from "../utils/getLocation";
import { checkIn, checkOut } from "../services/attendanceService";

export default function Dashboard() {
    const [status, setStatus] = useState("not_checked_in");
    const [loading, setLoading] = useState(false);

    const handleCheckIn = async () => {
        setLoading(true);
        const location = await getLocation();
        const res = await checkIn(location);
        setStatus(res.status);
        setLoading(false);
    };

    const handleCheckOut = async () => {
        setLoading(true);
        await checkOut();
        setStatus("checked_out");
        setLoading(false);
    };

    return (
        <AppLayout>
            <AttendanceCard
                status={status}
                loading={loading}
                onCheckIn={handleCheckIn}
                onCheckOut={handleCheckOut}
            />
        </AppLayout>
    );
}
