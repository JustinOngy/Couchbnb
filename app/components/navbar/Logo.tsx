"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row gap-x-2 justify-center items-center ">
        <h1 className="hidden md:block cursor-pointer text-rose-500 text-lg font-bold">
          COUCHBNB
        </h1>
        <Image
          className="hidden md:block cursor-pointer"
          alt="logo"
          src="/images/ShrinkLogo.png"
          height="20"
          width="20"
        />
      </div>

      <Image
        className="block md:hidden cursor-pointer"
        alt="logo"
        src="/images/ShrinkLogo.png"
        height="20"
        width="20"
      />
    </>
  );
};

export default Logo;
