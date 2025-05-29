"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
import Info from "@/components/lending/Info";
import InfoCard from "@/components/lending/InfoCard";
import PhotoCard from "@/components/lending/PhotoCard";
import About1 from "@/assets/about_1.jpeg"
import About2 from "@/assets/about_2.jpeg"
import About3 from "@/assets/about_3.jpeg"
import Service1 from "@/assets/service_1.jpeg"
import Service2 from "@/assets/service_2.jpeg"
import Service3 from "@/assets/service_3.jpeg"
import Service4 from "@/assets/service_4.jpeg"
import Pig from "@/assets/pig.svg"
import Cw from "@/assets/carwash.svg"
import Soap from "@/assets/soap.svg"
import Store from "@/assets/store_24.svg"
import Safety from "@/assets/safety.svg"
import Link from "next/link";

export default function Landing() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Если элемент не найден на текущей странице, переход на другую страницу
            window.location.href = `/?scrollTo=${sectionId}`;
        }
    }

    return (
        <UnauthorizedLayout>
                <section
                    className="relative bg-banner-main bg-cover bg-top bg-no-repeat  py-20"
                >
                    <div
                        className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    ></div>

                    <div
                        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                    >
                        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl text-white-500">
                                DS Moyka & Zixdo
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white-500">
                                First self-service car wash chain in India
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <Link
                                    href="/pay"
                                    className="block w-full rounded bg-red-400 px-12 py-3 text-sm font-medium text-white-500 shadow hover:bg-white-500/95 focus:outline-none focus:ring active:bg-white-500 sm:w-auto"
                                >
                                    Pay Online
                                </Link>

                                <Link
                                    href="/" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                                    className="block w-full rounded border-white-500 border-2 px-12 py-3 text-sm font-medium text-white-500 shadow hover:bg-white-500/95 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section  className="bg-white-700 text-white"  id="about">
                    <Info title={"About Us"} text={"DS Moyka & Zixdo is the pure result and cost savings. DS Moyka & Zixdo, the pleasure of taking care of your car on your own, service in details.\n" +
                        "We are pleased to provide car owners with a complete set of technologies and means for high-quality self-care of the car. We guarantee affordable prices for basic car wash programs: exterior and wheel washing soap, protective wax and spot free rinsing, interior cleaning with a vacuum cleaner."}/>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <PhotoCard photo={About1}/>
                        <PhotoCard photo={About2}/>
                        <PhotoCard pe={"pe-6"} photo={About3}/>
                    </div>
                </section>

                <section id="services">
                    <Info title={"Services"} text={"We bring you a comprehensive range of options for maintaining the impeccable appearance of your vehicle. Our self-service car wash facility offers a variety of services designed to cater to every aspect of your car's cleanliness and protection."}/>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <PhotoCard photo={Service1}
                                   title={"Wheel Wash"} text={"An effective solution for removing dirt from tires, wheels, and brake pads."}/>
                        <PhotoCard photo={Service2}
                                   title={"Active soap"} text={"Low pressure, softened water, concentrated composition.\n" +
                            "Highly effective emulsion effortlessly tackles dirt, requiring no prolonged exposure to the car's body (just 40-60 seconds is sufficient)."}/>
                        <PhotoCard photo={Service3}
                                   title={"Wax"} text={"Creates a protective film on the car's body, possessing water-repellent and dirt-repellent capabilities, giving it shine and brilliance."}/>
                        <PhotoCard pe={"pe-6"} photo={Service4}
                                   title={"Spot free rinsing"} text={"Purified from impurities. Leaves no streaks on the body when drying."}/>
                    </div>
                </section>

                <section className="bg-white-700 text-white">
                    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <Info title={"What You'll Get"} text={"Our goal is to deliver value to our client through high quality services"}/>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <InfoCard img={Cw} title={"Leading Technologies"} text={"Discover the ultimate in self-service car wash innovation with our state-of-the-art equipment. Effortlessly achieve superior cleaning and efficiency as you take control of your car's care."}/>
                            <InfoCard img={Soap} title={"High-quality chemicals"} text={"Experience excellence with our high-quality chemical solutions. Specially formulated for effective and premium results, our chemicals ensure a superior level of care for your vehicle, leaving it impeccably clean and well-maintained."}/>
                            <InfoCard img={Pig} title={"Affordable prices"} text={"Enjoy budget-friendly rates without compromising on quality. Our services come at accessible prices, making car care both effective and economical for you."}/>
                            <InfoCard img={Store} title={"Working 24/7"} text={"We operate 24/7 to cater to your needs at any time. Our commitment to round-the-clock service ensures convenience and accessibility whenever you choose to take care of your car."}/>
                            <InfoCard img={Safety} title={"Car safety"} text={"Ensuring the safety of your vehicle, our products and services are car-friendly. Experience peace of mind as we prioritize the well-being of your automobile throughout our care processes."}/>
                        </div>
                    </div>
                </section>
        </UnauthorizedLayout>
    )
}
