export default function StatusBadge({ status }) {
    const colors = {
        present: "#16a34a",
        late: "#f59e0b",
        checked_out: "#2563eb",
        not_checked_in: "#9ca3af",
    };

    return (
        <span
            style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: "999px",
                backgroundColor: colors[status],
                color: "#fff",
                fontSize: "12px",
                marginTop: "10px",
            }}
        >
            {status.replaceAll("_", " ").toUpperCase()}
        </span>
    );
}
