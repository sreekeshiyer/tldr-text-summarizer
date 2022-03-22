import Layout from "@/components/Layout";
import LandingPageHeader from "@/components/LandingPage/LandingHeader";
import Promo from "@/components/LandingPage/Promo";
import DemoWorkSpace from "@/components/LandingPage/DemoWorkSpace";
import { useRef } from "react";

export default function Home() {
    const workspaceRef = useRef(null);

    return (
        <Layout title="TLDR">
            <LandingPageHeader />
            <main className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Promo />
                    <div className="mt-5 justify-center sm:mt-8 sm:flex">
                        <div className="rounded-md shadow">
                            <button
                                onClick={() => {
                                    workspaceRef.current.scrollIntoView({
                                        block: "start",
                                        behavior: "smooth",
                                    });
                                }}
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                            >
                                Try it out!
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div ref={workspaceRef} style={{ height: 0 }} />
                    <DemoWorkSpace />
                </div>
            </main>
        </Layout>
    );
}
