import Logo from "./../../assets/Logo.png";
import ArrowBack from "../../assets/arrow_back.png";
import LogoSmall from "../../assets/logo_small.png";
import Image from "next/image";

export default function UnAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-white">
      <nav className="bg-[#FCFDFF] w-full flex justify-between items-center mx-auto min-h-16">
        <div className="inline-flex">
          <Image
            src={Logo}
            alt="logo"
            className="pl-5"
            height="150"
            width="200"
          />
        </div>
        <div className="flex items-center">
          <a
            href="https://dsmoyka.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ArrowBack}
              alt="back"
              className="pr-5"
              height="48"
              width="48"
            />
          </a>
        </div>
      </nav>
      <main className="flex w-full h-full flex-col ">{children}</main>
      <footer className="bg-[#9E9E9E] bg-opacity-20">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src={LogoSmall}
              alt="logo"
              className="object-contain"
              width="38"
              height="38"
            />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-[#9E9E9E] font-thin">
            © All Rights Reserved. Powered by DSMOYKA PRIVATE LIMITED
          </p>
        </div>
      </footer>
    </div>
  );
}
