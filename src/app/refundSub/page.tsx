"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function RefundSubPage() {
    return (
        <UnauthorizedLayout>
            {/* Banner */}
            <section className="relative bg-refund-main bg-cover bg-top bg-no-repeat py-20">
                <div className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl font-extrabold text-white-500 sm:text-6xl">
                            Refund and Cancellation
                        </h1>
                        <h1 className="text-3xl font-extrabold text-white-500 sm:text-6xl">
                            Subscription
                        </h1>
                    </div>
                </div>
            </section>

            {/** Reusable Section */}
            <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-20 lg:py-24">
                <div className="mx-auto max-w-5xl space-y-20">
                    <Section
                        title="Subscription Cancellation"
                        text="Customers have the option to cancel their subscription at any time. Upon cancellation, the subscription will remain active until the end of the current billing cycle. Refunds will not be provided for any remaining days or unused subscription time. To cancel a subscription, customers can follow the cancellation process outlined on our website or contact our customer support for assistance."
                    />
                    <Section
                        title="Refunds for Subscriptions"
                        text="We do not offer refunds for unused subscription periods or services once a payment has been processed. Any cancellation of a subscription will take effect from the next billing cycle. Refunds will not be issued for partial periods or if the subscription is canceled mid-cycle."
                    />
                    <Section
                        title="Unused Points and Balances"
                        text="In the event of a subscription cancellation, any remaining points or balances accrued from the subscription will remain available for use until the end of the current billing cycle. Customers can continue to redeem these points or balances for services, as outlined in our loyalty program, before they expire at the end of the billing cycle."
                    />
                    <Section
                        title="Updates to Policy"
                        text="Our company reserves the right to update or revise this Refund and Cancellation Policy as needed. Any modifications to the policy will be posted on our website, and the changes will become effective immediately. Customers are responsible for reviewing the policy periodically to stay informed of any updates."
                    />
                    <Section
                        title="Agreement"
                        text="By subscribing to our service and utilizing our website, customers acknowledge that they have reviewed, understood, and agreed to the terms and conditions outlined in this Refund and Cancellation Policy."
                    />
                </div>
            </div>
        </UnauthorizedLayout>
    );
}

function Section({ title, text }: { title: string; text: string }) {
    return (
        <div className="text-left space-y-4">
            <h4 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {title}
            </h4>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {text}
            </p>
        </div>
    );
}
