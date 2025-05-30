"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

export default function TermSubPage() {
    return (
        <UnauthorizedLayout>
            {/* Banner */}
            <section className="relative bg-term-main bg-cover bg-top bg-no-repeat py-20">
                <div className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 text-center sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="mx-auto">
                        <h1 className="text-4xl font-extrabold text-white-500 sm:text-6xl">
                            Terms and Conditions Subscription
                        </h1>
                    </div>
                </div>
            </section>

            {/* Terms Sections */}
            {sections.map((section, index) => (
                <section key={index} className="bg-gray-50 px-4 pt-12 sm:px-6 lg:px-20">
                    <div className="mx-auto max-w-5xl py-12">
                        <h4 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            {section.title}
                        </h4>

                        {section.paragraphs && section.paragraphs.map((p, i) => (
                            <p key={i} className="mt-4 text-gray-600">
                                {p}
                            </p>
                        ))}

                        {section.list && (
                            <ul className="mt-4 list-disc pl-6 text-gray-600">
                                {section.list.map((li, i) => (
                                    <li key={i} className="pt-2">
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            ))}
        </UnauthorizedLayout>
    );
}

// Terms content as structured data
const sections = [
    {
        title: "1. Acceptance of Terms",
        paragraphs: [
            "By using the self-service Car Wash Subscription System application, you agree to comply with and be bound by the terms set out here.",
        ],
    },
    {
        title: "2. Use of Facilities",
        list: [
            "<b>Operation Hours:</b> Our self-service car wash app is available during the specified opening hours. Users must follow the specified hours.",
            "<b>Equipment Usage:</b> Users must handle the equipment responsibly and follow the instructions provided. Any damage caused by improper use is the responsibility of the user.",
        ],
    },
    {
        title: "3. Payment and Fees",
        list: [
            "<b>Pricing:</b> The cost of using the subscription system is clearly displayed. Users are responsible for paying the relevant fees.",
            "<b>Refunds:</b> Refunds are not provided for unused time or any failures that are beyond our control.",
        ],
    },
    {
        title: "4. Safety and Liability",
        list: [
            "<b>Safety:</b> Users are responsible for their own safety and the safety of others while using our app.",
            "<b>Liability:</b> Our application is not responsible for any damage to vehicles, personal property or injuries that occurred on site, except in cases of proven negligence on our part.",
        ],
    },
    {
        title: "5. Environmental Responsibility",
        paragraphs: [
            "Users must properly dispose of waste and comply with environmental regulations. Any fines charged for improper waste disposal are the responsibility of the user.",
        ],
    },
    {
        title: "6. Security and Surveillance",
        paragraphs: [
            "For security reasons, our self-service car wash application is under surveillance. Any suspicious or illegal activities will be reported to the relevant authorities.",
        ],
    },
    {
        title: "7. Code of Conduct",
        paragraphs: [
            "Users are expected to behave respectfully and tactfully. Any behavior deemed to be in violation may result in termination of service and reporting to law enforcement if necessary.",
        ],
    },
    {
        title: "8. Modifications to Terms",
        paragraphs: [
            "We reserve the right to make changes to these terms at any time. Users will be notified of the changes, and continued use of our app implies acceptance of the changed terms.",
            "By using our self-service car wash subscription system application, you acknowledge that you have read, understood and agreed to these Terms of Use.",
        ],
    },
];
