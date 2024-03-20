import sign from "@/assets/images/signIn.png";
import Image from "next/image";
import { LoginForm } from "../_components/loginform";
import book from "@/assets/images/bookIcon.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="signPage"
      className="flex bg-white h-[100vh] w-[100vw] box-border justify-between"
    >
      <div id="signPage__left" className="">
        <div id="logo" className="flex mt-[21px]">
          <Image className="ml-[89px]" src={book} alt="logo" />
          <h6 className="font-light">
            <span className="font-medium text-primary">CPE</span> E-Library
          </h6>
        </div>
        <div
          id="signPage__left__form"
          className=" h-[461px] mt-[89px] w-[374px] ml-[140px]"
        >
          {children}
        </div>
      </div>
      <div id="signPage__right" className=" p-[1rem]">
        <Image src={sign} width={600} height={450} alt="sign-image" />
      </div>
    </div>
  );
}
