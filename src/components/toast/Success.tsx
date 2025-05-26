import { notification } from "antd";
import { BiInfoCircle } from "react-icons/bi";
import { useEffect } from "react";

export default function Success({
  title = "Success",
  body,
}: {
  title?: string;
  body: string;
}) {
  useEffect(() => {
    notification.success({
      message: title,
      description: body,
      icon: <BiInfoCircle style={{ color: "#52c41a", fontSize: 20 }} />,
      placement: "top", // or 'topRight', 'bottomLeft', 'bottomRight'
      duration: 4,
      style: {
        backgroundColor: "#16a34a", // Tailwind green-600
        borderRadius: 8,
        color: "white",
      },
    });
  }, [title, body]);

  return null; // No UI rendered — handled by notification
}
