import AppLayout from "../components/layout/AppLayout";

export default function AdminDashboard() {
    return (
        <AppLayout>
            <h2>Admin Dashboard</h2>
            <p>Manage school/company settings here</p>

            <ul>
                <li>Set work start time</li>
                <li>Set check-in window</li>
                <li>Set closing time</li>
                <li>Set auto sign-out time</li>
            </ul>
        </AppLayout>
    );
}
