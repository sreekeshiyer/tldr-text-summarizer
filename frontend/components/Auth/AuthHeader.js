import Link from "next/link";
import Image from "next/image";

export default function AuthHeader() {
    return (
        <div className="flex w-full items-center justify-between px-2 pt-10 sm:px-5 md:px-10 lg:px-24 xl:px-52">
            <div className="logo">
                <Link href="/">
                    <a>
                        <span className="sr-only">Logo</span>
                        <div className="flex items-center justify-center gap-4">
                            <Image src="/logo.png" width={50} height={50} />

                            <h1 className="text-2xl font-bold">TLDR</h1>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="mb-4 flex items-center justify-center gap-4">
                <div className="mt-8">
                    <a href="https://www.github.com/sreekeshiyer">
                        <span className="text-[1.1rem] text-gray-400">
                            <i className="fa-brands fa-github"></i>
                        </span>
                    </a>
                </div>
                <div className="mt-9">
                    <a href="https://www.buymeacoffee.com/sreekeshiyer">
                        <span className="text-[1.1rem] text-gray-400">
                            <Image
                                src="/assets/bmac.png"
                                height={24}
                                width={24}
                            />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
