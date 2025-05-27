"use client";

import MainButton from "@/components/button/MainButton";
import GeneralLayout from "@/layouts/GeneralLayout";
import { useUser } from "@/context/UserProvider";
import { useEffect, useState } from "react";
import MainLoader from "@/components/loaders/MainLoader";
import api from "@/api";
import Toast from "@/components/toast/Toast";
import axios, {AxiosResponse} from "axios";
import Modal from "@/components/modal/CancellationSubscription";
import OtpInput from "@/components/input/OtpInput";
import Success from "@/components/toast/Success";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const navigate = useRouter();
  const { user, getUser, clearUser, setUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isPayLoading, setIsPayLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [showModalStop, setShowModalStop] = useState<boolean>(false);
  const [showModalReferral, setShowModalReferral] = useState<boolean>(false);
  const [showModalChange, setShowModalChange] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState(false);
  const [userData, setUserData] = useState<{
    newPassword: string;
    checkNewPassword: string;
    otp: string;
  }>({
    newPassword: "",
    checkNewPassword: "",
    otp: "",
  });
  const handleClick = () => {
    navigate.push("/pack");
  };
  const openModalStop = () => {
    setShowModalStop(true);
  };

  const closeModalStop = () => {
    setShowModalStop(false);
  }

  const openModalReferral = () => {
    setShowModalReferral(true);
  };

  const closeModalReferral = () => {
    setShowModalReferral(false);
  }

  const openModalChange = () => {
    setShowModalChange(true);
  };

  const closeModalChange = () => {
    setShowModalChange(false);
  }

  const handleLogout = () => {
    clearUser();
    navigate.push("/auth/signin");
  };

  const handleCopy = () => {
    const contactDetailsElement = document.getElementById('contact-details');
    if (contactDetailsElement) {
      const textWithBreaks = contactDetailsElement.innerHTML.replace(/<br>/g, '\n');
      navigator.clipboard.writeText(textWithBreaks);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
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

  const changePasswordOtp = () => {
    const user = getUser();
    if (!user) {
      navigate.push("/auth/signin");
    }
    const changePasOtp = async () => {
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { status: string; target: string;} }> = await api.post(
            "account/changePassword/otp", {},
            {
              headers: {
                Authorization: `Bearer ${user?.tokens.accessToken}`,
              },
            }
        );
        if(data.status === 'sent_success'){
          openModalChange();
        }
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          setIsError("Something went wrong");
        }
      }
    };
    if (user) {
      changePasOtp();
    }
  }

  const changePassword = () => {
    const changePasswordAsync = async () => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        }: AxiosResponse<{ data: { status: string; target: string;} }> =
            await api.post("account/changePassword", { ...userData }, {
              headers: {
                Authorization: `Bearer ${user?.tokens.accessToken}`,
              },});
        if(data.status === 'change_success'){
          closeModalChange();
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
      setIsLoading(false);
    };
    if (isValid) {
      changePasswordAsync();
    }
  };

  const cancellationSubscribe = () => {
    setIsLoading(true);
    const user = getUser();
    if (!user) {
      navigate.push("/auth/signin");
    }
    const cancellationSub = async () => {
      try {
        const resp = await api.post(
            "subscribe/cancellation", {},
            {
              headers: {
                Authorization: `Bearer ${user?.tokens.accessToken}`,
              },
            }
        );
        console.log(resp.data);
        setIsLoading(false);
        closeModalStop();
        window.location.reload();
        setIsSuccess("The subscription has been successfully updated")
      } catch (error) {
        setIsLoading(false);
        if (axios.isAxiosError(error)) {
          setIsError("Something went wrong");
        }
      }
    };
    if (user) {
      cancellationSub();
    }
  }
  const payCurrentSubscribe = () => {
    setIsPayLoading(true);
    const subId = user?.subscribe?.subscribeId || "";

    const options = {
      "key": "rzp_live_dVUwzpkbXg2YDn",
      "subscription_id": `${subId}`,
      "name": "DSMoy-ka",
      "description": "Monthly Car Wash Plan",
      "image": "",
      "handler": async function (response: any) {
        try {
          await api.post("subscribe/check", {
            response,
            subscriptionId: subId,
          });
          navigate.push("/successRewards");
        } catch (e) {
          navigate.push("/errorRewards");
        }
      },
      "prefill": {
        "email": `${user?.client.email}`,
        "contact": `${user?.client.phone}`
      },
      "theme": {
        "color": "#F37254"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setIsPayLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const user = getUser();
    if (!user) {
      navigate.push("/auth/signin");
    } else {
      const getSubscribeAsync = async () => {
        try {
          /*const resp = await api.get("subscribe/subInfo", {
            headers: {
              Authorization: `Bearer ${user.tokens.accessToken}`,
            },
          });*/
          const resrClient = await api.get("account/me", {
            headers: {
              Authorization: `Bearer ${user.tokens.accessToken}`,
            },
          });
          const lastOperDate = await api.get("pack/usage", {
            headers: {
              Authorization: `Bearer ${user.tokens.accessToken}`,
            },
          });
          const invitedCode = await api.get("account/invited", {
            headers: {
              Authorization: `Bearer ${user.tokens.accessToken}`,
            },
          });
          console.log(resrClient.data);
          const updatedUser = {
            ...user,
            //subscribe: resp.data.data,
            client: resrClient.data.data,
            invitedCode: invitedCode.data.data.invitedCode,
            lastOperDate: lastOperDate.data.data,
          };

          setUser(updatedUser);
          setIsLoading(false);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setIsError("Something went wrong");
          }
          //navigate.push('/auth/singin');
          setIsLoading(false);
        }
      };
      getSubscribeAsync();
    }
  }, []);

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
    <GeneralLayout>
      {isLoading ? (
        <div className=" flex flex-grow justify-center items-center">
          <MainLoader
            additionalStyles=" w-[100px] h-[100px]"
            insideStyles=" bg-white-500 w-[90px] h-[90px]"
          />
        </div>
      ) : (
        <>
          <div className=" mt-5 flex md:flex-row sm:flex-row xs:flex-col gap-[20px] w-full justify-center">
            {user?.subscribe && (
              <div className=" w-full md:max-w-[180px] sm:max-w-[140px] xs:max-w-full bg-white-700 p-3 rounded-lg">
                <p className=" inline-block w-full text-left font-inter-semibold text-sm">
                  Plan:
                </p>
                <p className=" w-full inline-block text-right text-base text-primary-500 font-inter-bold">
                  {user?.subscribe?.name}
                </p>
                <div className=" w-full flex flex-row  justify-between mt-3 xs:text-sm sm:text-base">
                  <p className="  text-white-800 ">Billing</p>
                  <p className=" text-primary-500 ">
                    {user && user.subscribe && user?.subscribe?.amount / 100} ₹
                  </p>
                </div>
                <div className=" w-full flex flex-row justify-between xs:text-sm sm:text-base">
                  <p className=" text-white-800 ">Date</p>
                  <p className=" text-primary-500 bg-">
                    {user?.subscribe?.dateDebiting
                      ? `${user.subscribe.dateDebiting}`
                      : "-"}
                  </p>
                </div>
                <div className=" w-full flex flex-row justify-between items-center gap-1 xs:text-sm sm:text-base">
                  <p className=" text-white-800 ">Status</p>
                  <div className=" flex flex-row items-center gap-2">
                    <p
                      className={`${
                        user?.subscribe?.status === "created"
                          ? " text-white-800"
                          : user?.subscribe?.status === "loading" 
                          ? " text-white-800" 
                          : user?.subscribe?.status === "active" 
                          ? "text-primary-500"
                          : user?.subscribe?.status === "closed"
                          ? " text-red-300"
                          : " text-white-400"
                      }`}
                    >
                      {user?.subscribe?.status}
                    </p>
                    <div
                      className={` animate-pulse w-3 h-3 rounded-full ${
                        user?.subscribe?.status === "created"
                          ? " bg-white-900"
                          : user?.subscribe?.status === "loading"
                          ? " bg-white-900"
                          : user?.subscribe?.status === "active"
                          ? "bg-green-600"
                          : user?.subscribe?.status === "closed"
                          ? " text-red-300"
                          : " text-white-400"
                      }`}
                    ></div>
                  </div>
                </div>
                {(user?.subscribe?.status === "created" ||
                  user?.subscribe?.status === "closed") && (
                  <MainButton
                    title={
                      !isPayLoading ? (
                        "Pay"
                      ) : (
                        <div className=" min-w-full min-h-full flex justify-center items-center">
                          <MainLoader
                            additionalStyles={" w-7 h-7"}
                            insideStyles={" w-5 h-5 bg-primary-500 "}
                          />
                        </div>
                      )
                    }
                    handleClick={payCurrentSubscribe}
                    value={user.subscribe.subscribeId}
                    additionalStyles={
                      " bg-primary-500 text-white-500  py-1 mt-3"
                    }
                  />
                )}
              </div>
            )}
            <div
              className={` w-full ${
                user?.subscribe ? "md:max-w-[300px]" : "md:max-w-[500px]"
              }  sm:max-w-[340px] xs:max-w-full bg-white-700 p-3 rounded-lg`}
            >
              <p className=" inline-block w-full text-left font-inter-semibold text-sm">
                Balance:
              </p>
              <p className=" w-full inline-block text-right text-3xl text-primary-500 font-inter-bold">
                {user?.client.cards.balance}
              </p>
              <div className=" w-full flex flex-row  justify-between mt-3 xs:text-sm sm:text-base">
                <p className=" text-white-800 ">Card number</p>
                <p className=" text-primary-500">{user?.client.cards.number}</p>
              </div>
              <div className=" w-full flex flex-row justify-between xs:text-sm sm:text-base">
                <p className=" text-white-800">Created At</p>
                <p className=" text-primary-500">
                  {user?.client.cards.dateBegin
                    ? `${user.client.cards.dateBegin}`
                    : "-"}
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5 flex md:flex-row sm:flex-row xs:flex-col gap-[20px] w-full justify-center">

            <div
                className={` w-full ${
                    user?.lastOperDate && new Date(user.lastOperDate) > new Date('2024-11-07') ? "md:max-w-[300px]" : "md:max-w-[500px]"
                } font-inter-semibold sm:max-w-[340px] xs:max-w-full bg-white-700 p-3 rounded-lg`}
            >
              <div className=" w-full flex flex-row justify-between">
                <div className=" w-full flex flex-col justify-start mb-3">
                  <p className=" text-primary-500 md:text-2xl text-2xl">
                    {user?.client.name}
                  </p>
                  <p className=" text-white-400 text-xs">name</p>
                </div>
              </div>

              <div className=" w-full flex sm:flex-row justify-between">
                <p>Phone</p>
                <p className=" text-primary-500 bg-">{user?.client.phone}</p>
              </div>
              <div className=" w-full flex flex-row justify-between">
                <p>Email</p>
                <p className=" text-primary-500 bg-">
                  {user?.client.email ? user?.client.email : "-"}
                </p>
              </div>
            </div>

            {user?.lastOperDate && new Date(user.lastOperDate) > new Date('2024-11-07') && (
                <div className=" w-full md:max-w-[180px] sm:max-w-[140px] xs:max-w-full bg-white-700 p-3 rounded-lg">
                  <p className="font-inter-semibold text-center">
                    Invite a friend!
                  </p>
                  <div className='text-primary-500'>
                    <p>Your friends:</p>
                    <ol className="list-decimal pl-6">
                      {user?.client.invitedFriends?.map((friendName, index) => (
                          <li key={index}>{friendName}</li>
                      ))}
                    </ol>
                  </div>
                  <MainButton
                      title={"To learn more"}
                      handleClick={openModalReferral}
                      value={""}
                      additionalStyles={
                        "bg-green-500  text-white-500 mt-5 hover:bg-green-600 transition-all duration-300 max-w-[500px]"
                      }
                  />
                </div>
            )}

          </div>
          <div className=" flex flex-grow flex-col items-center">
            <MainButton
              title={"Upgrade plan"}
              handleClick={handleClick}
              value={""}
              additionalStyles={
                "bg-green-500  text-white-500 mt-5 hover:bg-green-600 transition-all duration-300 max-w-[500px]"
              }
            />
            {user?.subscribe?.status === "active" && (
              <MainButton
                title={"Stop subscription"}
                handleClick={openModalStop}
                value={""}
                additionalStyles={
                  "bg-red-300  text-white-500 mt-5 hover:bg-red-400 transition-all duration-300 max-w-[500px]"
                }
              />
            )}
            <Modal title="Cancellation of subscription" active={showModalStop} onClose={closeModalStop} onSubmit={cancellationSubscribe}>
              <div>Are you sure you want to cancel your subscription?</div>
              <div>In case of cancellation, the remaining points will be withdrawn automatically at the end of the last active billing period.</div>
            </Modal>

            <Modal title="Copy the instructions, send them to 5 friends and get 2 minutes for each!" active={showModalReferral} info={true} onClose={closeModalReferral} onSubmit={cancellationSubscribe} onSubmitName={'Copy!'}>

              <div>
                <address
                    className="relative bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-1"
                >
                  <div
                      id="contact-details"
                      className="space-y-2 text-gray-900 dark:text-white font-medium leading-loose"
                  >
                    1) Follow the link: https://www.dsmoyka.com <br/>
                    2) Come to our self-service car wash and get a customer card <br/>
                    3) Sign up with an invitation code and get a free 5 minutes to wash your car <br/>
                    Invitation code: {user?.invitedCode}
                  </div>
                  <button
                      data-copy-to-clipboard-target="contact-details"
                      data-copy-to-clipboard-content-type="textContent"
                      data-tooltip-target="tooltip-contact-details"
                      onClick={handleCopy}
                      className="absolute end-2 bottom-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
                  >
                    <span id="default-icon-contact-details">
                      <svg
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                      >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <span
                        id="success-icon-contact-details"
                        className={isCopied ? "" : "hidden"}
                        inline-flex
                        items-center
                    >
                      <svg
                          className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                      >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                      id="tooltip-contact-details"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    <span id="default-tooltip-message-contact-details">
                      Copy to clipboard
                    </span>
                    <span
                        id="success-tooltip-message-contact-details"
                        className={isCopied ? "" : "hidden"}
                    >
                      Copied!
                    </span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </address>
              </div>
            </Modal>

            <MainButton
                title={"Change password"}
                handleClick={changePasswordOtp}
                value={""}
                additionalStyles={
                  "bg-white-700 hover:bg-white-400 hover:text-white-500 text-white-900 mt-5 transition-all duration-300 mb-5 max-w-[500px]"
                }
            />
            <Modal title="Change the password" active={showModalChange} onClose={closeModalChange} onSubmit={changePassword}>
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

            <MainButton
              title={"Log out"}
              handleClick={handleLogout}
              value={""}
              additionalStyles={
                "bg-white-700 hover:bg-white-400 hover:text-white-500 text-white-900 mt-5 transition-all duration-300 mb-5 max-w-[500px]"
              }
            />
          </div>
        </>
      )}
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
    </GeneralLayout>
  );
}
