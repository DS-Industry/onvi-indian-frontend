"use client";

import UnAuthLayout from "@/layouts/UnAuthorized";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function SuccessPayment() {
  return (
    <UnAuthLayout>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <IoCheckmarkCircleOutline className="h-44 w-44 text-green-600" />
          <p className="text-4xl text-green-600 font-light">PAYMENT SUCCESS</p>
        </div>
      </main>
    </UnAuthLayout>
  );
}
