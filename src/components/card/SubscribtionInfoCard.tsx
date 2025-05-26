import MainButton from "../button/index";
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
    count: number;
}

export default function SubscriptionInfoCard({
    name,
    fullPrice,
    price,
    id,
    count,
}: ISubscriptionSailCard) {
    const navigate = useRouter();

    const handleClick = () => {
        navigate.push('/auth/signin');
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

                    <span className="text-white-900"> 40% savings </span>
                </li>
            </ul>
            <MainButton
                title={"Get Started!"}
                handleClick={handleClick}
                value={id}
                additionalStyles={
                    " bg-primary-500 text-white-500 font-inter-light mt-3 min-w-full"
                }
            />
        </div>
    );
}