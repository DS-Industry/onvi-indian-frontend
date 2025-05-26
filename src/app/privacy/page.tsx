"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function PrivacyPage() {

    return (
        <UnauthorizedLayout>
            { /* banner */}
            <section
                className="relative bg-privacy-main bg-cover bg-top bg-no-repeat  py-20"
            >
                <div
                    className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Personal Information
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We may collect personal information, including but not limited to names, contact details, and payment information when you use our self-service car wash facilities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Usage Data
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We may collect information on how you interact with our services, including but not limited to the time and duration of your car wash session.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Service Provision
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We use your personal information to provide and improve our self-service car wash facilities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Communication
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We may use your contact information to communicate with you about our services, promotions, and updates, unless you opt out.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Information Sharing
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share information with trusted third parties who assist us in operating our self-service car wash or servicing you, as long as they agree to keep this information confidential.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Security Measures
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Cookies and Similar Technologies
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We may use cookies and similar technologies to enhance your experience on our website or mobile application. You can control cookies through your browser settings.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Your Rights
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            You have the right to access, correct, or delete your personal information. Please contact us for assistance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Changes to This Privacy Policy
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            We reserve the right to update this Privacy Policy. Any changes will be effective immediately upon posting on our website.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 pl-20 pr-20 pb-16">
                <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                    <div className="mx-auto pl-16 pr-16 text-left">
                        <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                            Contact Information
                        </h4>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            If you have any questions or concerns about our privacy practices, please contact DS Moyka & Zixdo at [Your Contact Information].
                        </p>
                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            By using our self-service car wash facilities, you agree to the terms outlined in this Privacy Policy.
                        </p>
                    </div>
                </div>
            </section>

        </UnauthorizedLayout>
    )
}