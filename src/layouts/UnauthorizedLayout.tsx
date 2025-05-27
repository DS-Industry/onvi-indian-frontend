import Logo from '@/assets/logo_title.png';
import LogoF from '@/assets/Logo.svg'
import React from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function UnauthorizedLayout({ children }: { children: React.ReactNode; }) {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Если элемент не найден на текущей странице, переход на другую страницу
            window.location.href = `/?scrollTo=${sectionId}`;
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-between" onLoad={() => {
            window.scrollTo(0, 0)
            if (window.location.pathname.split('/')[1].split('?')[0] === 'home' && window.location.pathname.split('/')[1].split('?')[1] !== undefined) {
                const hash = window.location.pathname;
                const sectionToScroll = hash.split('scrollTo=')[1];
                scrollToSection(sectionToScroll);
            }
        }}>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-2">
                            <Link className="block text-teal-600" href="/">
                                <span className="sr-only">Home</span>
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    className="pl-5"
                                    height="120"
                                    width="190"
                                />
                            </Link>
                            <p className="text-3xl font-extrabold sm:text-2xl text-blue-500 mb-1">
                                +91 9110943649
                            </p>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                                        > About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                                        > Services </Link>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/subscription"> Subscription </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/franchise"> Franchise </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/contacts"> Contacts </a>
                                    </li>

                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        href="/auth/signin"
                                    >
                                        Login
                                    </a>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div>
                <main className="flex w-full h-full flex-col">{children}</main>
            </div>

            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-10 lg:space-y-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-2">
                        <div>
                            <Image
                                src={LogoF}
                                alt="logoF"
                                height="120"
                                width="190"
                            />
                            <p className="text-xs text-gray-500 pt-6 pl-2">&copy; All Rights Reserved. Powered by ZIXDO TECHNOLOGIES PRIVATE LIMITED</p>
                        </div>
                        <div></div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
                            <div>
                                <p className="font-medium text-gray-900">MENU</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="/" className="text-gray-700 transition hover:opacity-75"> Home page </Link>
                                    </li>

                                    <li>
                                        <Link href="/" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                                            className="text-gray-700 transition hover:opacity-75"> About </Link>
                                    </li>

                                    <li>
                                        <Link href="/" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                                            className="text-gray-700 transition hover:opacity-75"> Services </Link>
                                    </li>

                                    <li>
                                        <a href="/term" className="text-gray-700 transition hover:opacity-75"> Terms and condition </a>
                                    </li>

                                    <li>
                                        <a href="/privacy" className="text-gray-700 transition hover:opacity-75"> Privacy policy </a>
                                    </li>

                                    <li>
                                        <a href="/refund" className="text-gray-700 transition hover:opacity-75"> Refunds and cancellation </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
