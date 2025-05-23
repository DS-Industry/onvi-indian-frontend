"use client";

import { Input as AntInput } from "antd";

export default function Input({
  value,
  setValue,
  placeholder,
}: {
  value: { bay: string; sum: string };
  setValue: ({ bay, sum }: { bay: string; sum: string }) => void | null;
  placeholder: string;
}) {
  return (
    <AntInput
      type="number"
      value={value.sum}
      min={50}
      max={500}
      placeholder={placeholder}
      onChange={(event) =>
        setValue({ ...value, sum: event.currentTarget.value })
      }
      className="w-full rounded-lg text-sm shadow-sm"
    />
  );
}
