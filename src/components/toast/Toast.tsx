import { notification } from "antd";
import { BiInfoCircle } from "react-icons/bi";
import { useEffect } from "react";

export default function Toast({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  useEffect(() => {
    notification.error({
      message: title,
      description: body,
      icon: <BiInfoCircle style={{ color: "#ef4444", fontSize: 24 }} />, // red-500 color
      placement: "top",
      duration: 4,
      style: {
        backgroundColor: "#fca5a5", // red-300 background
        borderRadius: 8,
        color: "white",
      },
    });
  }, [title, body]);

  return null; // No UI rendered, notification handles display
}
