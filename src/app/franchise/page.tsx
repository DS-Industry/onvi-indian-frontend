"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
import Info from "@/components/lending/Info";
import PhotoCard from "@/components/lending/PhotoCard";
import Franchise2 from "@/assets/franchise2.jpg";
import Franchise3 from "@/assets/franchise3.jpg";


export default function FranchisePage() {

    return (
        <UnauthorizedLayout>
            { /* banner */}
            <section
                className="relative bg-franchise-main bg-cover bg-top bg-no-repeat  py-20"
            >
                <div
                    className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                            Franchise
                        </h1>
                    </div>
                </div>
            </section>

            <section  className="bg-white-700 text-white">
                <Info title={"Build Your Business"} text={"Do you want to start your own business and become a partner with DS Moyka & Zixdo?\n" +
                    "We offer a unique opportunity to become the owner of a modern self-service car wash franchise. Our proven business model guarantees high profitability and low personnel costs, while our experienced team will provide you with full support.\n" +
                    "With our innovative technologies, your car wash will be convenient and efficient for customers. You will quickly achieve a return on investment and enjoy a stable, high income. Join us and become part of a successful business!"}
                />

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <PhotoCard photo={Franchise2}/>
                    <PhotoCard pe={"pe-6"} photo={Franchise3}/>
                </div>
            </section>

            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-4xl font-bold text-gray-900 md:text-3xl sm:mb-4">
                            Get in touch
                        </h2>
                        Would you like to learn more about the DS Moyka & Zixdo franchise? Our sales team is available to answer all your questions and provide you with detailed information about our company and its benefits. We are always happy to help new partners build their business and grow their success. Contact us today to learn more!
                        <p className="hidden text-gray-700 text-4xl sm:mt-8 sm:block">
                           atul@zixdo.com
                        </p>
                    </div>
                </div>
            </section>

        </UnauthorizedLayout>
    )
}