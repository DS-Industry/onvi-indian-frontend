"use client";

import UnAuthLayout from "@/layouts/UnAuthorized";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorPayment() {
  return (
    <UnAuthLayout>
      <main className="w-full h-auto flex items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <MdErrorOutline className="h-44 w-44 text-red-700" />
          <p className="text-4xl text-red-700 font-light">PAYMENT ERROR</p>
        </div>
      </main>
    </UnAuthLayout>
  );
}
