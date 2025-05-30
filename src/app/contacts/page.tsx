"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function ContactsPage() {

    return (
        <UnauthorizedLayout>
            { /* banner */}
            <section
                className="relative bg-refund-main bg-cover bg-top bg-no-repeat  py-20"
            >
                <div
                    className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                            Contacts
                        </h1>
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 pl-20 pr-20 pt-16">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Contact Information
                        </h4>
                        <p className="text-gray-500 sm:mt-4 block">
                            For any questions, you can always contact us using the following means:
                        </p>
                        <ul className="list-disc pl-4">
                            <li className=" pt-4">
                                <b>Email:</b> info@moy-ka.com
                            </li>
                            <li className=" pt-4">
                                <b>Phone:</b> +91 91109 43649
                            </li>
                            <li className=" pt-4">
                                <b>Address:</b> 22 Midway Road, Opposite The Case.Sector 64, Guru ram, Haryana 122001, beside Live Cafe, Haryana 122102, India
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </UnauthorizedLayout>
    )
}