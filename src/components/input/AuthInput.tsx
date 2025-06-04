import { useEffect, useState } from "react";
import { Input, Form } from "antd";
import { BiMessageAltError } from "react-icons/bi";
import Image from "next/image";

interface AuthInput {
    type: string;
    placeholder: string;
    icon?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation?: (value: boolean) => void;
    validationMessage?: string;
    required: boolean;
    name: string;
    value: string;
    regexp?: RegExp;
}

export default function AuthInput({
    type,
    placeholder,
    icon,
    handleChange,
    handleValidation,
    validationMessage,
    required,
    name,
    value,
    regexp,
}: AuthInput) {
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (handleValidation) {
            const valid = !regexp || regexp.test(value);
            handleValidation(valid);
        }
        if (value.length > 0 && regexp) {
            setIsValid(regexp.test(value));
        } else {
            setIsValid(true);
        }
    }, [value]);

    const suffix = icon && (
        <Image src={icon} alt="icon" className="w-[15px] h-[15px] object-contain" />
    );

    const validateStatus = !isValid ? "error" : undefined;

    return (
        <div style={{ width: "100%", maxWidth: "400px" }}>
            <Form.Item
                validateStatus={validateStatus}
                help={
                    !isValid ? (
                        <div className="text-red-500 text-sm flex items-center gap-2">
                            <BiMessageAltError />
                            <span className="break-words">{validationMessage}</span>
                        </div>
                    ) : null
                }
                required={required}
                colon={false}
                style={{ marginBottom: "1.2rem" }}
            >
                <Input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={() => {
                        if (regexp) {
                            setIsValid(regexp.test(value));
                        }
                    }}
                    suffix={suffix}
                    className="font-inter-light text-base"
                    style={{ padding: "0.6rem 0.8rem" }}
                />
            </Form.Item>
        </div>
    );
}
