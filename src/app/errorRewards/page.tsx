"use client";

import ErrorCard from "@/assets/error_confirmation.svg";
import MainButton from "@/components/button/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const navigate = useRouter();
  return (
    <>
      <div className=" flex flex-col min-h-screen min-w-screen items-center justify-between pt-[100px] pb-[20px] px-[20px]">
        <div>
          <Image
            src={ErrorCard}
            alt="error payment"
            className=" size-[150px] object-contain ml-[20px]"
          />
          <p className=" font-inter-bold text-center">Payment Error!</p>
          <p className=" font-inter-light text-center">
            You can try again later.
          </p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center">
          <p className=" font-inter-light text-center">
            Something went wrong...
          </p>
          <MainButton
            title={"TRY AGAIN"}
            handleClick={() => navigate.push("/home")}
            value={""}
            additionalStyles={" bg-primary-500 text-white-500 w-full"}
          />
        </div>
      </div>
    </>
  );
}
