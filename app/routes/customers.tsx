import SideBar from "~/components/SideBar";

export default function CustomersPage() {
    return (
        <div className="flex">
            <SideBar />
            <div className="p-7">
                <h1 className="text-2xl font-semibold">Customers</h1>
            </div>
        </div>
    );
}