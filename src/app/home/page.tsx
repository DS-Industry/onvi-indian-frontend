"use client";

import { useEffect, useState } from "react";
import GeneralLayout from "@/layouts/GeneralLayout";
import { useUser } from "@/context/UserProvider";
import axios, { AxiosResponse } from "axios";
import api from "@/api";
import MainLoader from "@/components/loaders/MainLoader";
import Toast from "@/components/toast/Toast";
import SubscriptionSailCard from "@/components/card/SubscribtionSailCard";
import Modal from "@/components/modal/CancellationSubscription";
import { useRouter } from "next/navigation";

interface Plan {
  id: string;
  name: string;
  amount: number;
  fullPrice: number;
}

export default function MainPage() {
  const { user, getUser } = useUser();
  const navigate = useRouter();
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [showModalBaner, setShowModalBaner] = useState<boolean>(false);

  const closeModalBaner = () => {
    setShowModalBaner(false);
  }

  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate.push("/");
    }
    const getPlanListAsync = async () => {
      try {
        setShowModalBaner(true);
        const {
          data: { data: plans },
        }: AxiosResponse<{ data: Plan[] | [] }> = await api.get(
          "subscribe/plans",
          {
            headers: {
              Authorization: `Bearer ${user?.tokens.accessToken}`,
            },
          }
        );
        setIsLoading(false);
        setPlans(plans);
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          setIsError("Something went wrong");
        }
      }
    };
    if (user) {
      getPlanListAsync();
    }
  }, []);

  useEffect(() => {
    if (isError) {
      const timeOutId = setTimeout(() => {
        setIsError("");
      }, 3000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isError]);

  return (
    <GeneralLayout>
      {isLoading ? (
        <div className=" flex flex-grow justify-center items-center">
          <MainLoader
            additionalStyles=" w-[100px] h-[100px]"
            insideStyles=" bg-white-500 w-[90px] h-[90px]"
          />
        </div>
      ) : (
          <div>
            <div className=" my-[30px] min-w-full flex flex-grow justify-center items-center sm:flex-col xs:flex-col md:flex-row gap-5">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Subscriptions</h1>
            </div>
            <div className=" my-[30px] min-w-full flex flex-grow justify-center items-center sm:flex-col xs:flex-col md:flex-row gap-5">
              {plans &&
                plans
                    .filter((item) => item.name !== user?.subscribe?.name && item.name !== 'Optimum' && !item.name.startsWith('test'))
                  .map((item, index) => (
                    <SubscriptionSailCard
                      key={index}
                      name={item.name}
                      fullPrice={item.fullPrice}
                      price={item.amount / 100}
                      id={item.id}
                      user={user}
                      count={12}
                    />
                  ))}
            </div>

            <Modal title="ATTENTION!" active={showModalBaner} onClose={closeModalBaner} onSubmit={closeModalBaner}>
              <div>Due to technical problems, the subscription function has been temporarily suspended.</div>
              <div>Buying a new subscription and debiting funds for the old one are disabled until troubleshooting. All your subscription points remain active.</div>
              <div>You can also use additional minute packages on our website.</div>
            </Modal>

          </div>
      )}
      {isError && (
        <div className=" absolute top-2 flex w-auto justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={isError} />
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}
