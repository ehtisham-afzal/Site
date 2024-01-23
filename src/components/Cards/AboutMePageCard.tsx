import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMePageCard = ({
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
        className=" flex flex-col items-center justify-between pt-16 transition border shadow bg-card group rounded-3xl text-card-foreground"
        href={PageUrl}
      >
        <div className="">
          <p className="text-3xl md:text-4xl font-bold text-center">{Title}</p>
          <p className="mt-2 text-center text-muted-foreground">
            {Description}
          </p>
        </div>
        <Image
          alt={Title}
          width="304"
          height="165"
          className="w-8/12 mt-4 transition duration-500 ease-out origin-center group-hover:scale-105"
          src={ImageUrl}
        />
      </Link>
    </>
  );
};

export default AboutMePageCard;
