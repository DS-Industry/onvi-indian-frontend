import LogoTitle from "@/assets/logo_title.png";
import LogoSmall from "@/assets/logo_small.png";
import { IoIosArrowDropleft } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = usePathname();

  const navigate = useRouter();
  const handleRoute = () => {
    if (location.includes("profile")) {
      navigate.push("/#/home");
    } else {
      navigate.push("/profile");
    }
  };

  return (
    <main className="w-screen min-h-screen flex flex-col justify-between box-border">
      <nav className=" bg-white-700 w-full flex justify-between items-center mx-auto min-h-[60px] px-[10px]">
        <div className="inline-flex">
          <Image
            src={LogoTitle}
            alt="logo"
            className="pl-5 object-contain md:max-w-[180px] sm:max-w-[180px] xs:max-w-[150px]"
          />
        </div>
        <div className="flex items-center gap-5">
          {location.includes("profile") ? (
              <div className="inline-flex">
                <button
                    className=" mr-2 bg-primary-500 text-white-500 font-bold py-2 px-4 rounded-full"
                    onClick={ () => { navigate.push("/pack") }}>
                  Add Points
                </button>
                {/*<IoListCircleOutline
                  className=" text-[40px]"
                  onClick={handleRoute}
                />*/}
              </div>
          ) : location.includes("pack") ? (
              <div className="inline-flex">
              <PiUserCircle className=" mr-2 text-[40px]" onClick={ () => {
                navigate.push("/profile")
              }} />
                {/*<IoListCircleOutline
                    className=" text-[40px]"
                    onClick={() => {
                      navigate("/#/home")
                    }}
                />*/}
              </div>
          ) : (
              <div className="inline-flex">
                <button
                    className=" mr-2 bg-primary-500 text-white-500 font-bold py-2 px-4 rounded-full"
                    onClick={ () => { navigate.push("/pack") }}>
                  Add Points
                </button>
                <PiUserCircle className=" text-[40px]" onClick={handleRoute} />
              </div>
          )}
          <a
            href="/onvi-indian-frontend/landing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosArrowDropleft className=" text-[40px] mr-5" />
          </a>
        </div>
      </nav>
      <section className="flex flex-grow w-full flex-col px-[30px] ">
        {children}
      </section>
      <footer className=" bg-white-700 ">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src={LogoSmall}
              alt="logo"
              className="object-contain"
              width="38"
              height="38"
            />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed font-thin">
            © All Rights Reserved. Powered by ZIXDO TECHNOLOGIES PRIVATE LIMITED
          </p>
        </div>
      </footer>
    </main>
  );
}
