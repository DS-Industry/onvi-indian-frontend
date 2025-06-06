"use client";

import { Card as AntCard } from "antd";

interface ICard {
    sum: string;
    bgColor: string;
    prevOrder: {
        bay: string;
        sum: string;
    };
    handleClick: ({ bay, sum }: { bay: string; sum: string }) => void;
}

export default function Card({ sum, prevOrder, handleClick }: ICard) {
    return (
        <AntCard
            onClick={() => handleClick({ ...prevOrder, sum })}
            styles={{
                body: {
                    padding: "6px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 160, 227, 0.2)",
                    borderRadius: "9999px", // pill shape
                    cursor: "pointer",
                }
            }}
            style={{
                border: "none",
                width: "fit-content",
                display: "inline-block",
            }}
        >
            <p className="whitespace-nowrap text-sm font-bold text-[#00A0E3] pr-1">
                ₹
            </p>
            <p className="whitespace-nowrap text-sm font-bold text-[#00A0E3]">
                {sum}
            </p>
        </AntCard>
    );
}
