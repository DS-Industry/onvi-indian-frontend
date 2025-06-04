"use client";

import AuthInput from "@/components/input/AuthInput";
import AuthLayout from "@/layouts/AuthLayout";
import Lock from "@/assets/Lock_icon.svg";
// import Mail from "@/assets/Message_icon.svg";
import MainButton from "@/components/button/index";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserProvider";
import api from "@/api";
import axios, { AxiosResponse } from "axios";
import MainLoader from "@/components/loaders/MainLoader";
import {  User } from "@/types";
import Toast from "@/components/toast/Toast";
import Success from "@/components/toast/Success";
import OtpInput from "@/components/input/OtpInput";
import Modal from "@/components/modal/CancellationSubscription";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const navigate = useRouter();
  const { setUser } = useUser();

  const [userData, setUserData] = useState<{
    phone: string;
    password: string;
    newPassword: string;
    checkNewPassword: string;
    otp: string;
  }>({
    phone: "",
    password: "",
    newPassword: "",
    checkNewPassword: "",
    otp: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [showModalPhone, setShowModalPhone] = useState<boolean>(false);
  const [showModalPassword, setShowModalPassword] = useState<boolean>(false);

  const openModalPhone = () => {
    setShowModalPhone(true);
  };

  const closeModalPhone = () => {
    setShowModalPhone(false);
  }

  const openModalPassword = () => {
    setShowModalPassword(true);
  };

  const closeModalPassword = () => {
    setShowModalPassword(false);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevVal) => {
      return {
        ...prevVal,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleClick = () => {
    const loginAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: {
            data: { client, tokens },
          },
        }: AxiosResponse<{ data: { client: any; tokens: any; type: string } }> =
          await api.post("auth/login", { ...userData });

        /*const {
          data: { data: subscribe },
        }: AxiosResponse<{ data: Subscribe }> = await api.get(
          "subscribe/subInfo",
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );*/

        const user: User = {
          client: client,
          tokens: tokens,
          //subscribe: subscribe,
        };
        setUser(user);
        setIsLoading(false);
        /*if (!subscribe) {
          navigate("/");
        } else {*/
          navigate.push("/profile");
        //}
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsError(
            error.response?.data.code === 7
              ? "Wrong phone number or password"
              : "Something went wrong"
          );
        }
        setIsLoading(false);
      }
    };
    if (isValid) {
      loginAsync();
    }
  };

  const changePasswordOtp = () => {
    const otpAsync = async () => {
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { status: string; target: string;} }> =
            await api.post("auth/changePassword/otp", { ...userData });

        if(data.status === 'sent_success'){
          closeModalPhone()
          openModalPassword();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsError(
              error.response?.data.code === 4
                  ? "The account was not found"
                  : "Something went wrong"
          );
        }
      }
    };
    if (isValid) {
      otpAsync();
    }
  };

  const changePassword = () => {
    const changePasswordAsync = async () => {
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { status: string; target: string;} }> =
            await api.post("auth/changePassword", { ...userData });
        if(data.status === 'change_success'){
          closeModalPassword();
          setIsSuccess("The password has been successfully changed")
        }
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
      }
    };
    if (isValid) {
      changePasswordAsync();
    }
  };

  useEffect(() => {
    if (isError) {
      const timeOutId = setTimeout(() => {
        setIsError("");
      }, 3000);
      return () => {
        clearTimeout(timeOutId);
      };
    } else if (isSuccess){
      const timeOutId = setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isError, isSuccess]);

  return (
    <AuthLayout>
      <div className={` flex flex-col items-center w-full gap-5`}>
        <AuthInput
          type={"phone"}
          placeholder={"phone"}
        //   icon={Mail}
          handleChange={handleChange}
          required={false}
          name={"phone"}
          value={userData.phone}
          regexp={/^\+91(\d{10})$/}
          handleValidation={setIsValid}
          validationMessage="Phone must start on +91 and be no less than 13 digits"
        />
        <AuthInput
          type={"password"}
          placeholder={"password"}
          icon={Lock}
          handleChange={handleChange}
          required={false}
          name={"password"}
          value={userData.password}
          regexp={/.{6,}/}
          handleValidation={setIsValid}
          validationMessage="Password must be no less than 6 digits"
        />
        <MainButton
          title={
            !isLoading ? (
              "LOGIN"
            ) : (
              <MainLoader
                additionalStyles={" w-8 h-8 "}
                insideStyles={"bg-primary-500 w-6 h-6"}
              />
            )
          }
          handleClick={handleClick}
          value={""}
          additionalStyles={
            " bg-primary-500 text-white-500 text-base md:w-1/3 xs:w-full mt-[20px] flex items-center justify-center"
          }
        />
      </div>
      <p className=" font-inter-light text-white-900 text-sm text-center mt-6">
        Don&apos;t remember your password?
        <span
            onClick={() => openModalPhone()}
            className=" text-primary-500 hover:cursor-pointer"
        >
          Recover!
        </span>
      </p>
      <p className=" font-inter-light text-white-900 text-sm text-center mt-2">
        Don’t have an account?
        <span
          onClick={() => navigate.push("/auth/signup")}
          className=" text-primary-500 hover:cursor-pointer"
        >
          Sign Up!
        </span>
      </p>
      <p className=" font-inter-light text-white-900 text-sm text-center mt-2 mb-4">
        Any problems? Contact us
        <span
            className=" text-primary-500"
        >
          +91 9110943649
        </span>
      </p>
      <Modal title="Change the password" active={showModalPhone} onClose={closeModalPhone} onSubmit={changePasswordOtp}>
        <div>Specify the phone number that was specified when creating the account.</div>
        <OtpInput
            type={"phone"}
            placeholder={"phone"}
            name={"phone"}
            value={userData.phone}
            handleChange={handleChange}
            required={true}
            regexp={/^\+91(\d{10})$/}
            handleValidation={setIsValid}
            validationMessage="Phone must start on +91 and be no less than 13 digits"
        />
      </Modal>
      <Modal title="Change the password" active={showModalPassword} onClose={closeModalPassword} onSubmit={changePassword}>
        <div>A verification code has been sent to the email address specified during registration. Specify it for a successful password change.</div>
        <OtpInput
            type={"password"}
            placeholder={"password"}
            name={"newPassword"}
            value={userData.newPassword}
            handleChange={handleChange}
            required={true}
            regexp={/.{6,}/}
            handleValidation={setIsValid}
            validationMessage="Password must be no less than 6 digits"
        />
        <OtpInput
            type={"password"}
            placeholder={"write password again"}
            name={"checkNewPassword"}
            value={userData.checkNewPassword}
            handleChange={handleChange}
            required={true}
            regexp={new RegExp(`${userData.newPassword}`)}
            handleValidation={setIsValid}
            validationMessage="This field should be the same as a password"
        />
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
      {isError && (
        <div className=" absolute top-2 flex w-auto min-w-[600px] justify-start items-center z-40 ">
          <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
            <Toast title={"Ooops..."} body={isError} />
          </div>
        </div>
      )}
      {isSuccess && (
          <div className=" absolute top-2 flex w-auto min-w-[600px] justify-start items-center z-40 ">
            <div className=" md:w-1/2 sm:w-1/2 xs:w-fit">
              <Success body={isSuccess} />
            </div>
          </div>
      )}
    </AuthLayout>
  );
}
