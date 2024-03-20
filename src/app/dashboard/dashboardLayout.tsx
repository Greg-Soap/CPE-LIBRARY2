import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout( {children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div id="dashboard-body" className="flex ">
                <Sidebar />
            <div id="shit" className="w-[70%] h-[100%]">
                <div id="dashboard-top" className="h-[75px]">topp</div>
                {children}
            </div>

        </div>
    )
}