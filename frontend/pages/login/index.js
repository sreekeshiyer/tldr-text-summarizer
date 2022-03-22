import Layout from "@/components/Layout";
import Auth from "@/components/Auth/Auth";
import AuthHeader from "@/components/Auth/AuthHeader";

export default function LoginPage() {
    return (
        <Layout title="TLDR | Login">
            <div className="flex h-[100vh] flex-col">
                <AuthHeader />
                <div className="flex h-2/3 items-center justify-center justify-self-end sm:h-full">
                    <Auth />
                </div>
            </div>
        </Layout>
    );
}
