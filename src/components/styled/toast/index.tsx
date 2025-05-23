"use client";

import { notification } from "antd";
import { BiInfoCircle } from "react-icons/bi";

export function showToast(title: string, body: string) {
  notification.open({
    message: title,
    description: body,
    icon: <BiInfoCircle className="text-[#00A0E3] text-xl" />,
    placement: "topRight",
    className: "custom-toast",
  });
}
