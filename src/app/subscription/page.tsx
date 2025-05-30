"use client";

import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import api from "@/api";
import SubscriptionInfoCard from "@/components/card/SubscribtionInfoCard";
import MainLoader from "@/components/loaders/MainLoader";
import Link from "next/link";

interface Plan {
    id: string;
    name: string;
    amount: number;
    fullPrice: number;
}

export default function SubscriptionPage() {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPlanListAsync = async () => {
            try {
                const {
                    data: { data: plans },
                }: AxiosResponse<{ data: Plan[] }> = await api.get("subscribe/plans");
                setPlans(plans);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getPlanListAsync();
    }, []);

    return (
        <UnauthorizedLayout>
            {isLoading ? (
                <div className="flex flex-grow justify-center items-center">
                    <MainLoader
                        additionalStyles="w-[100px] h-[100px]"
                        insideStyles="bg-white-500 w-[90px] h-[90px]"
                    />
                </div>
            ) : (
                <>
                    {/* Banner */}
                    <section className="relative bg-term-main bg-cover bg-top bg-no-repeat py-20">
                        <div className="absolute inset-0 bg-blue-500/35 sm:bg-transparent sm:from-blue-500/75 sm:to-blue-500/15 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
                        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                            <div className="mx-auto text-center">
                                <h1 className="text-3xl font-extrabold sm:text-6xl text-white-500">
                                    Subscription
                                </h1>
                            </div>
                        </div>
                    </section>

                    {/* Subscription Cards */}
                    <div className="my-10 w-full flex flex-wrap justify-center items-start gap-6 px-4 sm:px-8 md:px-12 lg:px-20">
                        {plans
                            .filter(plan => plan.name !== "Optimum" && !plan.name.startsWith("test"))
                            .map((plan, index) => (
                                <SubscriptionInfoCard
                                    key={index}
                                    name={plan.name}
                                    fullPrice={plan.fullPrice}
                                    price={plan.amount / 100}
                                    id={plan.id}
                                    count={12}
                                />
                            ))}
                    </div>

                    {/* Informational Sections */}
                    {[
                        {
                            title: "Opportunities",
                            content:
                                "Our application makes it possible to use a subscription system that is very convenient and easy to use for our customers. How it works:",
                        },
                        {
                            title: "Choosing a tariff plan",
                            content:
                                "The customer can easily choose a suitable tariff plan according to their needs and preferences.",
                        },
                        {
                            title: "Subscription activation",
                            content:
                                "When activating the subscription, the amount equivalent to the price of the selected tariff plan is debited from the client. Further, the amount will be automatically debited every month.",
                        },
                        {
                            title: "Points",
                            content:
                                "Customers receive points for activating and continuing their subscription. These points can be used to receive services at our self-service car washes.",
                        },
                    ].map(({ title, content }) => (
                        <section key={title} className="bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-12">
                            <div className="max-w-5xl mx-auto text-left">
                                <h4 className="text-3xl font-bold text-gray-900">{title}</h4>
                                <p className="mt-4 text-gray-500">{content}</p>
                            </div>
                        </section>
                    ))}

                    {/* Subscription Management */}
                    <section className="bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-12">
                        <div className="max-w-5xl mx-auto text-left">
                            <h4 className="text-3xl font-bold text-gray-900">Subscription Management</h4>
                            <p className="mt-4 text-gray-500">
                                Customers can cancel their subscription at any time convenient for them. The points remaining at the time of cancellation will not disappear until the beginning of the next period.
                            </p>
                            <p className="mt-4 text-gray-500">Advantages of using our application:</p>
                            <ul className="list-disc pl-5 mt-4 text-gray-500 space-y-2">
                                <li>Easy selection of the tariff plan;</li>
                                <li>Automatic debiting of funds with a convenient schedule;</li>
                                <li>Get points and bonuses for subscribing;</li>
                                <li>Flexible cancellation terms;</li>
                                <li>The ability to use points at self-service car washes.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Summary */}
                    <section className="bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-12">
                        <div className="max-w-5xl mx-auto text-left">
                            <h4 className="text-3xl font-bold text-gray-900">Summarize</h4>
                            <p className="mt-4 text-gray-500">
                                Our app offers a convenient and profitable subscription system that makes the process even more attractive to our customers.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Read the terms of use:{" "}
                                <Link href="/termSub" className="text-primary-500 underline">
                                    Terms and Conditions Subscription
                                </Link>
                            </p>
                            <p className="mt-4 text-gray-500">
                                Read the terms of the refund and cancellation of the subscription:{" "}
                                <Link href="/refundSub" className="text-primary-500 underline">
                                    Refund and Cancellation Subscription
                                </Link>
                            </p>
                        </div>
                    </section>
                </>
            )}
        </UnauthorizedLayout>
    );
}
