import Image from "next/image";
import Logo from "@/assets/Logo.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen max-h-screen w-screen flex flex-col items-center justify-between px-[30px]">
      <Image src={Logo} alt="Logo" className=" w-[300px] h-auto mt-[50px] mb-0" />
      <div className=" min-h-fit w-full">{children}</div>
      <footer className=" flex flex-col items-center font-inter-light text-sm mb-5">
        <p className=" text-white-400">By signing up you have agreed to our</p>
        <p className=" text-black-500">Terms of Use & Privacy Policy</p>
      </footer>
    </main>
  );
}
