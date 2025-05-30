"use client";

import { Typography } from "antd";
import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";

const { Title, Paragraph } = Typography;

export default function RefundPage() {
    return (
        <UnauthorizedLayout>
            {/* Banner */}
            <section className="relative bg-refund-main bg-cover bg-top bg-no-repeat py-20">
                <div className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="mx-auto text-center">
                        <Title className="!text-white" level={1}>
                            Refund and Cancellation
                        </Title>
                    </div>
                </div>
            </section>

            {/* Sections */}
            {[
                {
                    title: "Refunds",
                    content:
                        "We do not provide refunds for unused time or services at our self-service car wash.",
                },
                {
                    title: "Malfunctions",
                    content:
                        "In the event of any malfunctions or issues with the equipment that are beyond our control, we regret that we cannot offer refunds. However, please report any malfunctions to our staff immediately for assistance.",
                },
                {
                    title: "Unauthorized Transactions",
                    content:
                        "If you notice any unauthorized transactions on your card or any payment method, please contact us promptly. We will investigate the matter and, if necessary, take appropriate action.",
                },
                {
                    title: "No Appointments",
                    content:
                        "Our self-service car wash operates on a first-come, first-served basis. As such, we do not accept appointments, and there is no need to cancel your visit.",
                },
                {
                    title: "Unused Time",
                    content:
                        "If, for any reason, you are unable to use the entire prepaid time for a self-service car wash session, we regret that refunds or extensions cannot be provided.",
                },
                {
                    title: "Changes to This Policy",
                    content:
                        "DS Moyka & Zixdo reserves the right to update or modify this Refund and Cancellation Policy at any time. Any changes will be effective immediately upon posting on our website.",
                },
                {
                    title: "Agreement",
                    content:
                        "By using our self-service car wash facilities, you acknowledge that you have read, understood, and agreed to the terms outlined in this Refund and Cancellation Policy.",
                },
            ].map((section, index) => (
                <section
                    key={section.title}
                    className={`bg-gray-50 px-6 md:px-10 lg:px-32 sm:mx-20 ${
                        index === 0 ? "pt-16" : ""
                    } ${index === 6 ? "pb-16" : ""}`}
                >
                    <div className="mx-auto max-w-screen-lg">
                        <Title level={2} className="!text-gray-900">
                            {section.title}
                        </Title>
                        <Paragraph className="!text-gray-600">
                            {section.content}
                        </Paragraph>
                    </div>
                </section>
            ))}
        </UnauthorizedLayout>
    );
}
