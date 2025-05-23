"use client";

import { Button as AntButton } from "antd";

export default function Button({
  title,
  handleClick,
  value,
}: {
  title: string;
  handleClick: (value: string) => void;
  value: string;
}) {
  return (
    <AntButton
      onClick={() => handleClick(value)}
      type="primary"
      className="!bg-[#009ADC] !text-[#FCFDFF] !w-full !h-auto !text-lg !font-medium !py-3 !px-5 rounded-lg"
    >
      {title}
    </AntButton>
  );
}
