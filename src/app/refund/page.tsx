"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function RefundPage() {

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
                            Refund and cancellation
                        </h1>
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 pl-20 pr-20 pt-16">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Refunds
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We do not provide refunds for unused time or services at our self-service car wash.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Malfunctions
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            In the event of any malfunctions or issues with the equipment that are beyond our control, we regret that we cannot offer refunds. However, please report any malfunctions to our staff immediately for assistance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Unauthorized Transactions
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            If you notice any unauthorized transactions on your card or any payment method, please contact us promptly. We will investigate the matter and, if necessary, take appropriate action.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            No Appointments
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Our self-service car wash operates on a first-come, first-served basis. As such, we do not accept appointments, and there is no need to cancel your visit.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Unused Time
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            If, for any reason, you are unable to use the entire prepaid time for a self-service car wash session, we regret that refunds or extensions cannot be provided.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Changes to This Policy
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            DS Moyka & Zixdo reserves the right to update or modify this Refund and Cancellation Policy at any time. Any changes will be effective immediately upon posting on our website.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20 pb-16">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Agreement
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            By using our self-service car wash facilities, you acknowledge that you have read, understood, and agreed to the terms outlined in this Refund and Cancellation Policy.
                        </p>
                    </div>
                </div>
            </section>
        </UnauthorizedLayout>
    )
}