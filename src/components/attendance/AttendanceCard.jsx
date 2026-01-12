import { useState } from "react";

export default function AttendanceCard() {
    const [checkedIn, setCheckedIn] = useState(false);
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);

    const handleCheckIn = () => {
        setCheckedIn(true);
        setCheckInTime(new Date().toLocaleTimeString());
    };

    const handleCheckOut = () => {
        setCheckedIn(false);
        setCheckOutTime(new Date().toLocaleTimeString());
    };

    return (
        <div style={styles.card}>
            <h3>Attendance Status</h3>

            <p>
                Status:{" "}
                <strong style={{ color: checkedIn ? "green" : "red" }}>
                    {checkedIn ? "Checked In" : "Not Checked In"}
                </strong>
            </p>

            {checkInTime && <p>Check-in Time: {checkInTime}</p>}
            {checkOutTime && <p>Check-out Time: {checkOutTime}</p>}

            <div style={styles.actions}>
                {!checkedIn ? (
                    <button style={styles.checkInBtn} onClick={handleCheckIn}>
                        Check In
                    </button>
                ) : (
                    <button style={styles.checkOutBtn} onClick={handleCheckOut}>
                        Check Out
                    </button>
                )}
            </div>
        </div>
    );
}

/* 
  Styles kept inside component for now.
  Later we can move them to CSS or Tailwind.
*/
const styles = {
    card: {
        background: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },
    actions: {
        marginTop: "20px",
    },
    checkInBtn: {
        width: "100%",
        padding: "10px",
        background: "#16a34a",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    checkOutBtn: {
        width: "100%",
        padding: "10px",
        background: "#dc2626",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
};
