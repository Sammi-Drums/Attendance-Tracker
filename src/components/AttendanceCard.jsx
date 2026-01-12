export default function AttendanceCard({
    status,
    onCheckIn,
    onCheckOut,
    loading,
}) {
    return (
        <div style={styles.card}>
            <h3>Today’s Attendance</h3>

            <span style={styles.badge}>
                {status.replaceAll("_", " ").toUpperCase()}
            </span>

            <div style={{ marginTop: "20px" }}>
                {status === "not_checked_in" && (
                    <button className="primary" onClick={onCheckIn}>
                        {loading ? "Checking in..." : "Check In"}
                    </button>
                )}

                {(status === "present" || status === "late") && (
                    <button className="danger" onClick={onCheckOut}>
                        {loading ? "Checking out..." : "Check Out"}
                    </button>
                )}
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        maxWidth: "400px",
    },
    badge: {
        display: "inline-block",
        marginTop: "10px",
        padding: "6px 12px",
        borderRadius: "999px",
        backgroundColor: "#2563eb",
        color: "#fff",
        fontSize: "12px",
    },
};
