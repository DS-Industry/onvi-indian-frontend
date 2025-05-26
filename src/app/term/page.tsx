"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function TermPage() {

    return (
        <UnauthorizedLayout>
            { /* banner */}
            <section
                className="relative bg-term-main bg-cover bg-top bg-no-repeat  py-20"
            >
                <div
                    className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                            Terms and Conditions
                        </h1>
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 pl-20 pr-20 pt-16">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            1. Acceptance of Terms
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            By using DSMoyka & Zixdo&apos;s self-service car wash facilities, you agree to comply with and be bound by the terms and conditions outlined herein.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50  pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            2. Use of Facilities
                        </h4>

                        <ul className="list-disc pl-4">
                            <li className=" pt-4">
                                <b>Operation Hours:</b> Our self-service car wash is available during specified operating hours. Users are expected to adhere to posted hours.
                            </li>
                            <li className=" pt-4">
                                <b>Equipment Usage:</b> Users must operate the equipment responsibly and in accordance with provided instructions. Any damage caused due to misuse is the responsibility of the user.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50  pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            3. Payment and Fees
                        </h4>

                        <ul className="list-disc pl-4">
                            <li className=" pt-4">
                                <b>Pricing:</b> Charges for DSMoyka & Zixdo&apos;s self-service car wash facilities are clearly displayed. Users are responsible for the payment of applicable fees.
                            </li>
                            <li className="pt-4">
                                <b>Refunds:</b> Refunds are not provided for unused time or any malfunctions that are beyond our control.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50  pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            4. Safety and Liability
                        </h4>

                        <ul className="list-disc pl-4">
                            <li className="pt-4">
                                <b>Safety:</b> Users are responsible for their safety and the safety of others during the use of DSMoyka & Zixdo&apos;s facilities.
                            </li>
                            <li className=" pt-4">
                                <b>Liability:</b> Our facility is not liable for any damage to vehicles, personal property, or injuries that occur on the premises, except in cases of proven negligence on our part.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50  pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            5. Environmental Responsibility
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Users are expected to dispose of waste properly and adhere to environmental regulations. Any fines incurred due to improper waste disposal are the responsibility of the user.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50  pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            6. Security and Surveillance
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            For security purposes, DSMoyka & Zixdo&apos;s self-service car wash facility is under surveillance. Any suspicious or unlawful activities will be reported to the authorities.                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            7. Code of Conduct
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Users are expected to conduct themselves in a respectful and considerate manner. Any behavior deemed disruptive may result in the termination of services and reporting to law enforcement if necessary                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50  pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            8. Modifications to Terms
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We reserve the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of DSMoyka & Zixdo&apos;s facilities implies acceptance of the revised terms.                        </p>
                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            By using DSMoyka & Zixdo&apos;s self-service car wash facilities, you acknowledge that you have read, understood, and agreed to these terms and conditions.
                        </p>
                    </div>
                </div>
            </section>
        </UnauthorizedLayout>
    )
}