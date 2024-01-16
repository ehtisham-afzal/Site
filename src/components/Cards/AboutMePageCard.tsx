import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnotherPageCard = ({
  PageUrl,
  Title,
  Description,
  ImageUrl,
}: {
  PageUrl: string;
  Title: string;
  Description: string;
  ImageUrl: string;
}) => {
  return (
    <>
      <Link
      prefetch={false}
        className="group flex flex-col items-center justify-between relative rounded-xl border bg-card text-card-foreground shadow pt-16 transition"
        href={PageUrl}
      >
        {/* <div className="absolute -top-[33px] right-10 mt-px flex h-8 items-end overflow-hidden">
          <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div> */}
        <div className="">
          <p className="text-center text-2xl font-bold">
            {Title}
          </p>
          <p className="mt-2 text-center text-muted-foreground">{Description}</p>
        </div>
        <Image
          alt={Title}
          width="304"
          height="165"
          className=" w-8/12 transition duration-500 ease-out group-hover:scale-105 origin-center mt-4"
          src={ImageUrl}
        />
      </Link>
    </>
  );
};

export default AnotherPageCard;
