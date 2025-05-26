"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function TermSubPage() {

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
                        <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                            Subscription
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
                            By using the self-service Car Wash Subscription System application, you agree to comply with and be bound by the terms set out here.
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
                                <b>Operation Hours:</b> Our self-service car wash app is available during the specified opening hours. Users must follow the specified hours.
                            </li>
                            <li className=" pt-4">
                                <b>Equipment Usage:</b> Users must handle the equipment responsibly and follow the instructions provided. Any damage caused by improper use is the responsibility of the user.
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
                                <b>Pricing:</b> The cost of using the subscription system is clearly displayed. Users are responsible for paying the relevant fees.
                            </li>
                            <li className="pt-4">
                                <b>Refunds:</b> Refunds are not provided for unused time or any failures that are beyond our control.
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
                                <b>Safety:</b> Users are responsible for their own safety and the safety of others while using our app.
                            </li>
                            <li className=" pt-4">
                                <b>Liability:</b> Our application is not responsible for any damage to vehicles, personal property or injuries that occurred on site, except in cases of proven negligence on our part.
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
                            Users must properly dispose of waste and comply with environmental regulations. Any fines charged for improper waste disposal are the responsibility of the user.
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
                            For security reasons, our self-service car wash application is under surveillance. Any suspicious or illegal activities will be reported to the relevant authorities.
                        </p>
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
                            Users are expected to behave respectfully and tactfully. Any behavior deemed to be in violation may result in termination of service and reporting to law enforcement if necessary.
                        </p>
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
                            We reserve the right to make changes to these terms at any time. Users will be notified of the changes, and continued use of our app implies acceptance of the changed terms.
                        </p>
                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            By using our self-service car wash subscription system application, you acknowledge that you have read, understood and agreed to these Terms of Use.
                        </p>
                    </div>
                </div>
            </section>
        </UnauthorizedLayout>
    )
}