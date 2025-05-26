import { useEffect, useState } from "react";
import { Input, Form } from "antd";
import { BiMessageAltError } from "react-icons/bi";

interface AuthInput {
  type: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleValidation?: (value: boolean) => void;
  validationMessage?: string;
  required: boolean;
  name: string;
  value: string;
  regexp?: RegExp;
}

export default function OtpInput({
  type,
  placeholder,
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
    const valid = !regexp || regexp.test(value);
    setIsValid(value.length === 0 || valid);
    if (handleValidation) {
      handleValidation(valid);
    }
  }, [value]);

  const validateStatus = !isValid ? "error" : undefined;
  const help = !isValid && validationMessage ? (
    <>
      <BiMessageAltError className="inline mr-2 text-red-400" />
      {validationMessage}
    </>
  ) : null;

  return (
    <Form.Item
      validateStatus={validateStatus}
      help={help}
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
          if (regexp) setIsValid(regexp.test(value));
        }}
        className="font-inter-light text-base"
        style={{ padding: "0.6rem 0.8rem" }}
      />
    </Form.Item>
  );
}
