import Layout from "@/components/Layout";
import Header from "@/components/Dashboard/Header";
import WorkSpace from "@/components/Dashboard/Workspace";

export default function DashboardPage() {
    return (
        <Layout title="TLDR | Dashboard">
            <div className="flex w-full flex-col items-center">
                <Header />
                <div className="flex w-full flex-col items-center justify-center lg:max-w-6xl">
                    <WorkSpace />
                </div>
            </div>
        </Layout>
    );
}
