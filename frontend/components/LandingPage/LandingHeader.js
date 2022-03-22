import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

export default function LandingPageHeader() {
    const navigation = [
        { name: "Features", href: "#" },
        { name: "About Us", href: "#" },
    ];

    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 justify-between pb-8 sm:pb-16 md:pb-20 lg:flex lg:w-full lg:pb-28 xl:max-w-[66rem] xl:items-center xl:pb-32">
                    {/* <div className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </div> */}

                    <Popover>
                        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                            <nav
                                className="relative flex items-center sm:h-10 lg:justify-start "
                                aria-label="Global"
                            >
                                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                    <div className="flex w-full items-center justify-between md:w-auto">
                                        <Link href="/">
                                            <a>
                                                <span className="sr-only">
                                                    Logo
                                                </span>
                                                <Image
                                                    src="/logo.png"
                                                    width={50}
                                                    height={50}
                                                />
                                            </a>
                                        </Link>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                                                <span className="sr-only">
                                                    Open main menu
                                                </span>
                                                <MenuIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:ml-10 md:flex md:justify-center md:space-x-8 md:pr-4">
                                    <div className="md:flex md:gap-6">
                                        {navigation.map((item) => (
                                            <Link
                                                href={item.href}
                                                key={navigation.indexOf(item)}
                                            >
                                                <a
                                                    key={item.name}
                                                    className="font-medium text-white hover:text-gray-200"
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/login">
                                        <a className="font-medium text-blue-600 hover:text-blue-400">
                                            Log in
                                        </a>
                                    </Link>
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute inset-x-0 top-0 z-10 m-1 origin-top-right transform rounded-lg bg-gray-700 bg-opacity-95 transition md:hidden"
                            >
                                <div className="overflow-hidden rounded-lg shadow-md">
                                    <div className="flex items-center justify-between px-5 pt-4">
                                        <div>
                                            <Image
                                                src="/logo.png"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                                                <span className="sr-only">
                                                    Close main menu
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="space-y-1 px-2 pt-2 pb-3">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-900 hover:text-gray-200"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>

                                    <Link href="/login">
                                        <a className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-600 hover:bg-gray-100">
                                            Log in
                                        </a>
                                    </Link>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <div className="hidden lg:mr-8 lg:flex lg:items-center lg:justify-center lg:gap-2">
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
            </div>
        </div>
    );
}
