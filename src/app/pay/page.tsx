"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UnAuthLayout from "@/layouts/UnAuthorized";
import Button from "@/components/button";
import Human from "@/assets/Saly-34.png";
import Logo from "@/assets/logoSmall.png";
import api from "@/api";

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function Payment() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sum = searchParams.get("sum");
    const box = searchParams.get("box");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!sum || !box) {
            router.push("/");
        }
    }, [sum, box, router]);

    const loadScript = (src: string) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleClick = async () => {
        setLoading(true);

        try {
            const scriptLoaded = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!scriptLoaded) return router.push("/error");

            const orderResponse = await api.post("order/create", {
                amount: Number(sum) * 100,
            });

            const { orderId } = orderResponse.data.data;

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: Number(sum) * 100,
                currency: "INR",
                name: "MOY-KA!DS",
                description: "Transaction",
                image: Logo.src,
                order_id: orderId,
                handler: async function (response: any) {
                    try {
                        await api.post("order/check", {
                            response,
                            orderId,
                            deviceId: box,
                            amount: sum,
                        });
                        router.push("/success");
                    } catch {
                        router.push("/error");
                    }
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#0B68E1",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (err) {
            console.error(err);
            router.push("/error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UnAuthLayout>
                <div className="flex items-center justify-center w-full mb-28">
                    <div className="flex flex-col bg-white sm:w-full md:w-1/3 mx-5 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <div className="w-full flex justify-center items-center mt-5">
                            <Image src={Human} alt="human" className="w-40 rounded-3xl" />
                        </div>

                        <div className="flex flex-col sm:justify-start md:items-center items-start text-sm">
                            <p className="font-bold text-gray-900 text-xl">Your selection:</p>
                            <div className="flex flex-row sm:justify-between md:justify-center w-full gap-5 mt-2">
                                <p className="text-gray-500 md:text-base sm:text-lg">
                                    Amount to pay
                                </p>
                                <p className="text-gray-500 md:text-base sm:text-lg">
                                    {sum} ₹
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 flex w-full justify-center">
                            {!loading ? (
                                <Button value="" handleClick={handleClick} title="Pay" />
                            ) : (
                                <button
                                    type="button"
                                    className="rounded-lg bg-[#009ADC] px-5 py-3 text-md font-medium text-[#FCFDFF] w-full flex items-center justify-center"
                                    disabled
                                >
                                    <div className="animate-spin flex items-center justify-center rounded-full w-6 h-6 bg-gradient-to-tr from-toastPrimary to-toastSecondary mr-5">
                                        <div className="h-4 w-4 rounded-full bg-white"></div>
                                    </div>
                                    <p className="text-[#FCFDFF]">Loading...</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </UnAuthLayout>
        </Suspense>
    );
}
