import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout({ children }) {
    return (
        <div style={styles.container}>
            <Sidebar />
            <div style={styles.main}>
                <Navbar />
                <div style={styles.content}>{children}</div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        height: "100vh",
    },
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f4f6f8",
    },
    content: {
        padding: "24px",
    },
};
