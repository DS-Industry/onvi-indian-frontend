import { AxiosResponse } from "axios";
import api from "../../api";
import { User } from "../../types";
import MainButton from "../button/index";
import { useState } from "react";
import MainLoader from "../loaders/MainLoader";
import Modal from "../modal/CancellationSubscription";
import { useRouter } from "next/router";

declare global {
    interface Window {
        // ⚠️ notice that "Window" is capitalized here
        Razorpay: any;
    }
}
interface ISubscriptionSailCard {
    name: string;
    fullPrice: number;
    price: number;
    id: string;
    user: User;
    count: number;
}

export default function SubscriptionSailCard({
    name,
    fullPrice,
    price,
    id,
    user,
    count,
}: ISubscriptionSailCard) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const navigate = useRouter();
    const closeModal = () => {
        setShowModal(false);
    }

    const checkSub = () => {
        if (user?.subscribe === null) {
            handleUpgradePlan();
        } else {
            setShowModal(true);
        }
    }

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
        closeModal();

        const addPlanAsync = async () => {
            const scriptResponse = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
            if (!scriptResponse) {
                console.log('Failed to load checkout');
                alert("Somthing went wrong try again later");
            }
            try {
                const body = {
                    planId: id,
                    totalCount: count
                };
                const config = {
                    headers: {
                        Authorization: `Bearer ${user?.tokens.accessToken}`,
                    },
                }
                const responseCreate: AxiosResponse = await api.post('subscribe/create', body, config);
                const subId = responseCreate.data.data.subId;
                console.log(subId);
                const options = {
                    "key": "rzp_live_dVUwzpkbXg2YDn",
                    "subscription_id": `${subId}`,
                    "name": "DSMoy-ka",
                    "description": "Monthly Car Wash Plan",
                    "image": "",
                    "handler": async function (response: any) {
                        try {
                            await api.post("subscribe/check", {
                                response,
                                subscriptionId: subId,
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
                        "color": "#F37254"
                    }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
                setIsLoading(false);
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
                <h2 className="text-xl font-inter-bold text-gray">
                    {count} month
                    <span className="sr-only">Count</span>
                </h2 >
                <p className="mt-2 sm:mt-1">
                    <strong className="text-3xl font-bold text-primary-500 sm:text-4xl">
                        <span style={{
                            fontSize: '1.1rem',
                            color: 'grey',
                            textDecoration: 'line-through',
                        }}>{fullPrice} ₹</span>
                        <br />
                        {price} ₹
                    </strong>
                    <span className="text-sm font-medium text-gray-700">/month</span>
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

                    <span className="text-white-900"> ≈11 car washes every month </span>
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

                    <span className="text-white-900"> ≈30% savings </span>
                </li>
            </ul>
            <MainButton
                title={
                    !isLoading ? (
                        "Get Started!"
                    ) : (
                        <div className=" min-w-full h-full flex justify-center items-center">
                            <MainLoader
                                additionalStyles={" w-7 h-7 "}
                                insideStyles={" w-5 h-5 bg-primary-500"}
                            />
                        </div>
                    )
                }
                handleClick={checkSub}
                value={id}
                additionalStyles={
                    " bg-primary-500 text-white-500 font-inter-light mt-3 min-w-full"
                }
            />
            <Modal title="Changing your subscription" active={showModal} onClose={closeModal} onSubmit={handleUpgradePlan}>
                <div>You already have a subscription. Are you sure you want to start a new one?</div>
                <div>Information about the current subscription can be found in your personal account.</div>
                <div>In case of confirmation, the remaining points will be deducted and new ones will be credited, in accordance with the selected tariff plan.</div>
            </Modal>
        </div>
    );
}
