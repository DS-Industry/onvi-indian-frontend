"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function PrivacyPage() {
    return (
        <UnauthorizedLayout>
            {/* Banner */}
            <section className="relative bg-privacy-main bg-cover bg-top bg-no-repeat py-20">
                <div className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl font-extrabold sm:text-6xl text-white">
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </section>

            {[
                {
                    title: "Personal Information",
                    content: `We may collect personal information, including but not limited to names, contact details, and payment information when you use our self-service car wash facilities.`,
                },
                {
                    title: "Usage Data",
                    content: `We may collect information on how you interact with our services, including but not limited to the time and duration of your car wash session.`,
                },
                {
                    title: "Service Provision",
                    content: `We use your personal information to provide and improve our self-service car wash facilities.`,
                },
                {
                    title: "Communication",
                    content: `We may use your contact information to communicate with you about our services, promotions, and updates, unless you opt out.`,
                },
                {
                    title: "Information Sharing",
                    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share information with trusted third parties who assist us in operating our self-service car wash or servicing you, as long as they agree to keep this information confidential.`,
                },
                {
                    title: "Security Measures",
                    content: `We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.`,
                },
                {
                    title: "Cookies and Similar Technologies",
                    content: `We may use cookies and similar technologies to enhance your experience on our website or mobile application. You can control cookies through your browser settings.`,
                },
                {
                    title: "Your Rights",
                    content: `You have the right to access, correct, or delete your personal information. Please contact us for assistance.`,
                },
                {
                    title: "Changes to This Privacy Policy",
                    content: `We reserve the right to update this Privacy Policy. Any changes will be effective immediately upon posting on our website.`,
                },
                {
                    title: "Contact Information",
                    content: `If you have any questions or concerns about our privacy practices, please contact DS Moyka & Zixdo at [Your Contact Information].`,
                    additional: `By using our self-service car wash facilities, you agree to the terms outlined in this Privacy Policy.`,
                },
            ].map(({ title, content, additional }, index) => (
                <section key={index} className="bg-gray-50 px-4 sm:px-8 lg:px-16 pt-16 pb-8">
                    <div className="mx-auto max-w-screen-xl text-center sm:text-left">
                        <h4 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            {title}
                        </h4>
                        <p className="text-gray-500 mt-4">{content}</p>
                        {additional && <p className="text-gray-500 mt-4">{additional}</p>}
                    </div>
                </section>
            ))}
        </UnauthorizedLayout>
    );
}
