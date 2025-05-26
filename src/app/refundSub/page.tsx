"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function RefundSubPage() {

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
                            Subscription Cancellation
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Customers have the option to cancel their subscription at any time. Upon cancellation, the subscription will remain active until the end of the current billing cycle. Refunds will not be provided for any remaining days or unused subscription time. To cancel a subscription, customers can follow the cancellation process outlined on our website or contact our customer support for assistance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Refunds for Subscriptions
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We do not offer refunds for unused subscription periods or services once a payment has been processed. Any cancellation of a subscription will take effect from the next billing cycle. Refunds will not be issued for partial periods or if the subscription is canceled mid-cycle.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Unused Points and Balances
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            In the event of a subscription cancellation, any remaining points or balances accrued from the subscription will remain available for use until the end of the current billing cycle. Customers can continue to redeem these points or balances for services, as outlined in our loyalty program, before they expire at the end of the billing cycle.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Updates to Policy
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Our company reserves the right to update or revise this Refund and Cancellation Policy as needed. Any modifications to the policy will be posted on our website, and the changes will become effective immediately. Customers are responsible for reviewing the policy periodically to stay informed of any updates.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Agreement
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            By subscribing to our service and utilizing our website, customers acknowledge that they have reviewed, understood, and agreed to the terms and conditions outlined in this Refund and Cancellation Policy.
                        </p>
                    </div>
                </div>
            </section>
        </UnauthorizedLayout>
    )
}