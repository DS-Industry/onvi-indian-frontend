"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import api from "@/api";
import SubscriptionInfoCard from "@/components/card/SubscribtionInfoCard";
import MainLoader from "@/components/loaders/MainLoader";

interface Plan {
    id: string;
    name: string;
    amount: number;
    fullPrice: number;
}
export default function SubscriptionPage() {
    const [plans, setPlans] = useState<Plan[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPlanListAsync = async () => {
            try {
                const {
                    data: { data: plans },
                }: AxiosResponse<{ data: Plan[] | [] }> = await api.get(
                    "subscribe/plans",);
                setIsLoading(false);
                setPlans(plans);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        };
        getPlanListAsync();
    }, []);

    return (
        <UnauthorizedLayout>
            { /* banner */}
            {isLoading ? (
                <div className=" flex flex-grow justify-center items-center">
                    <MainLoader
                        additionalStyles=" w-[100px] h-[100px]"
                        insideStyles=" bg-white-500 w-[90px] h-[90px]"
                    />
                </div>
            ) : (
                <>
                    <section
                        className="relative bg-term-main bg-cover bg-top bg-no-repeat  py-20"
                    >
                        <div
                            className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="mx-auto text-center">
                                <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                                    Subscription
                                </h1>
                            </div>
                        </div>
                    </section>
                    <div
                        className="my-[30px] min-w-full flex flex-grow justify-center items-center sm:flex-col xs:flex-col md:flex-row gap-5 pt-10">
                        {plans && plans.filter(item => item.name !== 'Optimum' && !item.name.startsWith('test')).map((item, index) => (
                            <SubscriptionInfoCard
                                key={index}
                                name={item.name}
                                fullPrice={item.fullPrice}
                                price={item.amount / 100}
                                id={item.id}
                                count={12} />
                        ))}
                    </div>
                    <section className="bg-gray-50 pl-20 pr-20">
                        <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                            <div className="mx-auto pl-16 pr-16 text-left">
                                <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                                    Opportunities
                                </h4>

                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    Our application makes it possible to use a subscription system that is very
                                    convenient and
                                    easy to use for our customers.
                                    How it works:
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-50  pl-20 pr-20">
                        <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                            <div className="mx-auto pl-16 pr-16 text-left">
                                <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                                    Choosing a tariff plan
                                </h4>

                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    The customer can easily choose a suitable tariff plan according to their needs and
                                    preferences.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-50  pl-20 pr-20">
                        <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                            <div className="mx-auto pl-16 pr-16 text-left">
                                <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                                    Subscription activation
                                </h4>

                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    When activating the subscription, the amount equivalent to the price of the selected
                                    tariff
                                    plan is debited from the client. Further, the amount will be automatically debited
                                    every
                                    month.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-50  pl-20 pr-20">
                        <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                            <div className="mx-auto pl-16 pr-16 text-left">
                                <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                                    Points
                                </h4>

                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    Customers receive points for activating and continuing their subscription. These
                                    points can
                                    be used to receive services at our self-service car washes.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-50  pl-20 pr-20">
                        <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                            <div className="mx-auto pl-16 pr-16 text-left">
                                <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                                    Subscription Management
                                </h4>

                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    Customers can cancel their subscription at any time convenient for them. The points
                                    remaining at the time of cancellation will not disappear until the beginning of the
                                    next
                                    period.
                                    Advantages of using our application:
                                </p>

                                <ul className="list-disc pl-4">
                                    <li className=" pt-4">
                                        Easy selection of the tariff plan;
                                    </li>
                                    <li className=" pt-4">
                                        Automatic debiting of funds with a convenient schedule;
                                    </li>
                                    <li className=" pt-4">
                                        Get points and bonuses for subscribing;
                                    </li>
                                    <li className=" pt-4">
                                        Flexible cancellation terms;
                                    </li>
                                    <li className=" pt-4">
                                        The ability to use points at self-service car washes.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-50  pl-20 pr-20">
                        <div className="p-8 md:p-6 lg:px-16 lg:py-24">
                            <div className="mx-auto pl-16 pr-16 text-left">
                                <h4 className="text-4xl font-bold text-gray-900 md:text-3xl">
                                    Summarize
                                </h4>

                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    Our app offers a convenient and profitable subscription system that makes the
                                    process even
                                    more attractive to our customers.
                                </p>
                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    Read the terms of use: <a href="/termSub" className="text-primary-500">Terms and
                                        Conditions
                                        Subscription</a>
                                </p>
                                <p className="hidden text-gray-500 sm:mt-4 sm:block">
                                    Read the terms of the refund and cancellation of the subscription: <a
                                        href="#/refundSub"
                                        className="text-primary-500">Refund
                                        and Cancellation Subscription</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </UnauthorizedLayout>
    )
}