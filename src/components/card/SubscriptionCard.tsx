import { AxiosResponse } from "axios";
import api from "../../api";
import { User } from "../../types";
import MainButton from "../button/index";
import { useState } from "react";
import MainLoader from "../loaders/MainLoader";

interface ISubscriptionCard {
  name: string;
  price: number;
  id: string;
  user: User;
}

export default function SubscriptionCard({
  name,
  price,
  id,
  user,
}: ISubscriptionCard) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleUpgradePlan = () => {
    console.log(user);
    const addPlanAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            data: { linkForPayment },
          },
        }: AxiosResponse<{ data: { linkForPayment: string; status: string } }> =
          await api.post(
            "subscribe/create",
            {
              planId: id,
              totalCount: price,
            },
            {
              headers: {
                Authorization: `Bearer ${user?.tokens.accessToken}`,
              },
            }
          );
        console.log(linkForPayment);
        const linkElem = document.createElement("a");
        linkElem.href = linkForPayment;
        linkElem.target = "_blank";
        linkElem.click();
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

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-primary-500 sm:text-4xl">
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

          <span className="text-white-900"> {price} points </span>
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
        handleClick={handleUpgradePlan}
        value={id}
        additionalStyles={
          " bg-primary-500 text-white-500 font-inter-light mt-3 min-w-full"
        }
      />
    </div>
  );
}
