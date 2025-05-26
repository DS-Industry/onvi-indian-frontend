"use client";

import { useEffect, useState } from "react";
import Lock from "@/assets/Lock_icon.svg";
import Mail from "@/assets/Message_icon.svg";
import Card from "@/assets/Card_icon.svg"
/* import LetterA from "../assets/A.svg"; */
import MainButton from "@/components/button/index";
import AuthLayout from "@/layouts/AuthLayout";
import AuthInput from "@/components/input/AuthInput";
import { useUser } from "@/context/UserProvider";
import axios, { AxiosResponse } from "axios";
import api from "@/api";
import MainLoader from "@/components/loaders/MainLoader";
import Toast from "@/components/toast/Toast";
import Modal from "@/components/modal/CancellationSubscription";
import OtpInput from "@/components/input/OtpInput";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const { setUser } = useUser();
  const navigate = useRouter();
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    phone: string;
    email: string;
    uniqNomer: string;
    password: string;
    checkPassword: string;
    otp: string;
    invitedCode: string;
  }>({
    phone: "",
    email: "",
    uniqNomer: "",
    password: "",
    checkPassword: "",
    otp: "",
    invitedCode: "",
  });


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setIsLoading(false);
    setShowModal(false);
  }

  const reqOtp = () => {
    const otpAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { status: string; target: string;} }> =
            await api.post("auth/register/otp", { ...userData });

        if(data.status === 'sent_success'){
          openModal();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsError(
              error.response?.data.code === 9
                  ? "The cw card was not found"
                  : (error.response?.data.code === 10
                      ? "The cw card has already been activated"
                      : (error.response?.data.code === 41
                          ? "The account with the specified phone already exists"
                          : (error.response?.data.code === 42
                              ? "An account with the specified email already exists"
                              : "Something went wrong")))
          );
        }
        setIsLoading(false);
      }
    };
    if (isValid) {
      otpAsync();
    }
  };

  const handleClick = () => {
    const registerAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { client: any; tokens: any; type: string } }> =
          await api.post("auth/register", { ...userData });

        const user = {
          client: data.client,
          tokens: data.tokens,
          subscribe: null,
          invitedCode: "",
        };

        setUser(user);
        setIsLoading(false);
        navigate.push("/profile");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsError(
              error.response?.data.code === 5
                  ? "Passwords don't match"
                  : (error.response?.data.code === 6
                      ? "Invalid verification code"
                      : "Something went wrong")
          );
        }
        setIsLoading(false);
      }
    };
    if (isValid) {
      registerAsync();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    if (isError) {
      const timeOutId = setTimeout(() => {
        setIsError("");
      }, 3000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isError]);

  return (
    <AuthLayout>
      <div className=" flex flex-col items-center w-full gap-3">
        {/*         <AuthInput
          type={"text"}
          placeholder={"Name"}
          icon={LetterA}
          name={"name"}
          value={userData.mail}
          handleChange={handleChange}
          required={false}
        /> */}
        <AuthInput
          type={"phone"}
          placeholder={"write phone started with +91"}
          icon={Mail}
          name={"phone"}
          value={userData.phone}
          handleChange={handleChange}
          required={true}
          regexp={/^\+91(\d{10})$/}
          handleValidation={setIsValid}
          validationMessage="Phone must start on +91 and be no less than 13 digits"
        />
        <AuthInput
            type={"email"}
            placeholder={"email"}
            icon={Mail}
            name={"email"}
            value={userData.email}
            handleChange={handleChange}
            required={true}
            regexp={/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/}
            handleValidation={setIsValid}
            validationMessage="The mail must be valid"
        />
        <AuthInput
            type={"uniqNomer"}
            placeholder={"write the cw card number"}
            icon={Card}
            name={"uniqNomer"}
            value={userData.uniqNomer}
            handleChange={handleChange}
            required={true}
            regexp={/^\d{10}$/}
            handleValidation={setIsValid}
            validationMessage="The cw card number must contain 10 digits"
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          name={"password"}
          value={userData.password}
          handleChange={handleChange}
          required={true}
          regexp={/.{6,}/}
          handleValidation={setIsValid}
          validationMessage="Password must be no less than 6 digits"
        />
        <AuthInput
          type={"password"}
          placeholder={"write password again"}
          icon={Lock}
          name={"checkPassword"}
          value={userData.checkPassword}
          handleChange={handleChange}
          required={true}
          regexp={new RegExp(`${userData.password}`)}
          handleValidation={setIsValid}
          validationMessage="This field should be the same as a password"
        />
        <AuthInput
            type={"invitedCode"}
            placeholder={"write invitation code"}
            icon={Mail}
            name={"invitedCode"}
            value={userData.invitedCode}
            handleChange={handleChange}
            required={false}
            regexp={/^\d{6}$/}
            handleValidation={setIsValid}
            validationMessage="The invitation code must contain 6 digits"
        />
        <MainButton
          title={
            !isLoading ? (
              "CREATE ACCOUNT"
            ) : (
              <div className=" w-full h-full flex justify-center items-center">
                <MainLoader
                  additionalStyles={" w-8 h-8 "}
                  insideStyles={"bg-primary-500 w-6 h-6"}
                />
              </div>
            )
          }
          handleClick={reqOtp}
          value={""}
          additionalStyles={
            " bg-primary-500 text-white-500 text-base md:w-1/2 sm:w-1/2 xs:w-full mt-5"
          }
        />
        <p className=" font-inter-light text-white-900 text-sm text-center mt-2 mb-4">
          Do you already have an account?
          <span
              onClick={() => navigate.push("/auth/signin")}
              className=" text-primary-500 hover:cursor-pointer"
          >
          Log in!
        </span>
        </p>
        <Modal title="Email Confirmation" active={showModal} onClose={closeModal} onSubmit={handleClick}>
          <div>By email <b>{userData.email}</b> a letter with a verification code has been sent. To complete the registration, enter it</div>
          <OtpInput
              type={"otp"}
              placeholder={"write the verification code"}
              name={"otp"}
              value={userData.otp}
              handleChange={handleChange}
              required={true}
              regexp={/.{6,}/}
              handleValidation={setIsValid}
              validationMessage="The verification code must contain 6 digits"
          />
        </Modal>
      </div>
      {isError && (
        <div className=" absolute top-2 flex w-auto min-w-[600px] justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={isError} />
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
