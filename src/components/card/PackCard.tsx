import { User } from "@/types";
import { useState } from "react";
import api from "@/api";
import MainButton from "@/components/button/index";
import MainLoader from "@/components/loaders/MainLoader";
import { useRouter } from "next/navigation";

declare global {
    interface Window {
        // ⚠️ notice that "Window" is capitalized here
        Razorpay: any;
    }
}
interface IPackCard {
    id: number;
    name: string;
    sumMoney: number;
    sumPoint: number;
    description: string;
    user: User;
}

export default function PackCard({ id, name, sumPoint, sumMoney, description, user }: IPackCard) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useRouter();


    function loadScript(src: string) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const handleUpgradePlan = () => {
        setIsLoading(true);

        const addPlanAsync = async () => {
            const scriptResponse = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!scriptResponse) {
                console.log('Failed to load checkout');
                alert("Somthing went wrong try again later");
            }
            try {
                const packResponse = await api.post('pack/apply', {
                    packId: id,
                }, {
                    headers: {
                        Authorization: `Bearer ${user?.tokens.accessToken}`,
                    },
                })
                setIsLoading(false);
                if (!packResponse) {
                    navigate.push("/error");
                }

                const orderId = packResponse.data.data;

                console.log(orderId)
                const options = {
                    "key": "rzp_live_dVUwzpkbXg2YDn", // Enter the Key ID generated from the Dashboard
                    // key_id: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
                    "amount": sumMoney * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "DSMoy-ka",
                    "description": "Transaction",
                    "image": "",
                    "order_id": `${orderId}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": async function (response: any) {
                        try {
                            await api.post("pack/checkApply", {
                                response,
                                packId: id,
                                orderId: orderId,
                            }, {
                                headers: {
                                    Authorization: `Bearer ${user?.tokens.accessToken}`,
                                },
                            });
                            navigate.push("/success");
                        } catch (e) {
                            navigate.push("/error");
                        }
                    },
                    "prefill": {
                        "email": `${user?.client.email}`,
                        "contact": `${user?.client.phone}`
                    },
                    "theme": {
                        "color": "#0B68E1",
                    },
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        addPlanAsync();
    };
    return (
        <div className="rounded-2xl border border-primary-600 p-6 shadow-sm ring-1 ring-primary-500 sm:px-8 lg:p-12 min-w-[250px]">
            <div className="text-center">
                <h2 className="text-xl font-inter-bold text-black">
                    {name}
                    <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 sm:mt-1">
                    <strong className="text-3xl font-bold text-primary-500 sm:text-4xl">
                        <span style={{
                            fontSize: '1.1rem',
                            color: 'grey',
                            textDecoration: 'line-through',
                        }}>{sumPoint} ₹</span>
                        <br />
                        {sumMoney} ₹
                    </strong>
                </p>
            </div>

            <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-white-900"> {description} </span>
                </li>
                <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-white-900"> good addition to your subscription </span>
                </li>
                <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-indigo-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-white-900"> without expiration date </span>
                </li>
            </ul>
            <MainButton
                title={
                    !isLoading ? (
                        "Get Points!"
                    ) : (
                        <div className=" min-w-full h-full flex justify-center items-center">
                            <MainLoader
                                additionalStyles={" w-7 h-7 "}
                                insideStyles={" w-5 h-5 bg-primary-500"}
                            />
                        </div>
                    )
                }
                handleClick={handleUpgradePlan}
                value=""
                additionalStyles={
                    " bg-primary-500 text-white-500 font-inter-light mt-3 min-w-full"
                }
            />
        </div>
    );
}
