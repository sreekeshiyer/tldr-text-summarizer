import Layout from "@/components/Layout";
import Header from "@/components/Dashboard/Header";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Summary from "@/components/Summary";
import { getUserScans } from "@/store/index";
import { useEffect, useState } from "react";
import { SUPABASE_STORAGE_URL } from "@/config/index";

export default function ScansPage() {
    const [scans, setScans] = useState(null);

    useEffect(() => {
        const setAllScans = async () => {
            let s = await getUserScans();
            setScans(s);
        };
        setAllScans();
    }, []);

    return (
        <Layout title="TLDR | Previous Scans">
            <div className="min-h-[100vh] pb-4">
                <Header />
                <div></div>
                <div className="w-full px-4 pt-16">
                    <div className="mx-auto w-full max-w-xl rounded-2xl bg-gray-100 p-5">
                        {!scans || scans.length === 0 ? (
                            <div className="text-black">
                                <h1>No Scans Found.</h1>
                            </div>
                        ) : (
                            <div>
                                <h1 className="mt-1 mb-4 text-center text-3xl font-bold text-black">
                                    Previous Scans
                                </h1>
                                {scans.map((sc) => (
                                    <div
                                        className="my-2"
                                        key={scans.indexOf(sc)}
                                    >
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                                        <div className="">
                                                            <span className="mr-4">
                                                                {scans.indexOf(
                                                                    sc
                                                                ) + 1}
                                                            </span>
                                                            <span className="mr-4">
                                                                {sc.input_text
                                                                    .length > 5
                                                                    ? sc.input_text.substring(
                                                                          0,
                                                                          25
                                                                      )
                                                                    : sc.input_text}
                                                                ...
                                                            </span>
                                                            {sc.file && (
                                                                <span className="mr-4 justify-self-end">
                                                                    <a
                                                                        rel="noopener noreferrer"
                                                                        download={
                                                                            SUPABASE_STORAGE_URL +
                                                                            sc.file
                                                                        }
                                                                        target="_blank"
                                                                        href={
                                                                            SUPABASE_STORAGE_URL +
                                                                            sc.file
                                                                        }
                                                                    >
                                                                        <i className="fa-solid fa-file-arrow-down"></i>
                                                                    </a>
                                                                </span>
                                                            )}
                                                            {sc.url && (
                                                                <span className="justify-self-end">
                                                                    <a
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        href={
                                                                            sc.url
                                                                        }
                                                                    >
                                                                        <i className="fa-solid fa-link"></i>
                                                                    </a>
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <h3 className="text-[0.8rem]">
                                                                {sc.created_at.substring(
                                                                    0,
                                                                    10
                                                                )}
                                                            </h3>
                                                            <ChevronUpIcon
                                                                className={`${
                                                                    open
                                                                        ? ""
                                                                        : "rotate-180 transform"
                                                                } h-5 w-5 text-blue-500`}
                                                            />
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        <Summary
                                                            text={
                                                                sc.result_text
                                                            }
                                                            size={sc.size}
                                                        />
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
