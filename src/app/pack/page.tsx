"use client";

import { useUser } from "@/context/UserProvider";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import api from "@/api";
import GeneralLayout from "@/layouts/GeneralLayout";
import MainLoader from "@/components/loaders/MainLoader";
import Toast from "@/components/toast/Toast";
import PackCard from "@/components/card/PackCard";
import { useRouter } from "next/navigation";

interface Pack {
    id: number;
    name: string;
    description: string;
    sumMoney: number;
    sumPoint: number;
}

export default function PackPage() {
    const { user, getUser } = useUser();
    const navigate = useRouter();
    const [packs, setPacks] = useState<Pack[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<string>("");

    useEffect(() => {
        const user = getUser();
        if (!user) {
            navigate.push("/landing");
        }
        const getPlanListAsync = async () => {
            try {
                const {
                    data: { data: packs },
                }: AxiosResponse<{ data: Pack[] | [] }> = await api.get(
                    "pack",
                    {
                        headers: {
                            Authorization: `Bearer ${user?.tokens.accessToken}`,
                        },
                    }
                );
                setIsLoading(false);
                setPacks(packs);
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
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get more CarWashes</h1>
                    </div>
                    <div className=" my-[30px] min-w-full flex flex-grow justify-center items-center sm:flex-col xs:flex-col md:flex-row gap-5">
                        {packs &&
                            packs
                                .map((item, index) => (
                                    <PackCard
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        sumMoney={item.sumMoney}
                                        sumPoint={item.sumPoint}
                                        description={item.description}
                                        user={user}
                                    />
                                ))}
                    </div>
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