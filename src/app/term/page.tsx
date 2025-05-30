"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Section = ({ title, content, list }: { title: string; content?: string[]; list?: string[] }) => (
  <section className="bg-gray-50 px-4 sm:px-8 lg:px-20 py-12">
    <div className="mx-auto max-w-4xl text-left">
      <Title level={3} className="!text-gray-900 text-2xl sm:text-3xl">
        {title}
      </Title>

      {content?.map((text, idx) => (
        <Paragraph key={idx} className="text-gray-600 text-base sm:text-lg mt-4">
          {text}
        </Paragraph>
      ))}

      {list && (
        <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-700 text-base sm:text-lg">
          {list.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
    </div>
  </section>
);

export default function TermPage() {
  return (
    <UnauthorizedLayout>
      {/* Banner */}
      <section className="relative bg-term-main bg-cover bg-top bg-no-repeat py-20">
        <div className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-6xl text-white">
              Terms and Conditions
            </h1>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Section
        title="1. Acceptance of Terms"
        content={[
          "By using DSMoyka & Zixdo's self-service car wash facilities, you agree to comply with and be bound by the terms and conditions outlined herein.",
        ]}
      />

      <Section
        title="2. Use of Facilities"
        list={[
          "<b>Operation Hours:</b> Our self-service car wash is available during specified operating hours. Users are expected to adhere to posted hours.",
          "<b>Equipment Usage:</b> Users must operate the equipment responsibly and in accordance with provided instructions. Any damage caused due to misuse is the responsibility of the user.",
        ]}
      />

      <Section
        title="3. Payment and Fees"
        list={[
          "<b>Pricing:</b> Charges for DSMoyka & Zixdo's self-service car wash facilities are clearly displayed. Users are responsible for the payment of applicable fees.",
          "<b>Refunds:</b> Refunds are not provided for unused time or any malfunctions that are beyond our control.",
        ]}
      />

      <Section
        title="4. Safety and Liability"
        list={[
          "<b>Safety:</b> Users are responsible for their safety and the safety of others during the use of DSMoyka & Zixdo's facilities.",
          "<b>Liability:</b> Our facility is not liable for any damage to vehicles, personal property, or injuries that occur on the premises, except in cases of proven negligence on our part.",
        ]}
      />

      <Section
        title="5. Environmental Responsibility"
        content={[
          "Users are expected to dispose of waste properly and adhere to environmental regulations. Any fines incurred due to improper waste disposal are the responsibility of the user.",
        ]}
      />

      <Section
        title="6. Security and Surveillance"
        content={[
          "For security purposes, DSMoyka & Zixdo's self-service car wash facility is under surveillance. Any suspicious or unlawful activities will be reported to the authorities.",
        ]}
      />

      <Section
        title="7. Code of Conduct"
        content={[
          "Users are expected to conduct themselves in a respectful and considerate manner. Any behavior deemed disruptive may result in the termination of services and reporting to law enforcement if necessary.",
        ]}
      />

      <Section
        title="8. Modifications to Terms"
        content={[
          "We reserve the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of DSMoyka & Zixdo's facilities implies acceptance of the revised terms.",
          "By using DSMoyka & Zixdo's self-service car wash facilities, you acknowledge that you have read, understood, and agreed to these terms and conditions.",
        ]}
      />
    </UnauthorizedLayout>
  );
}
