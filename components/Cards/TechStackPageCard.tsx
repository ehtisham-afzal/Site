import Image from "next/image";
import Link from "next/link";
import React from "react";

const TechStackPageCard = ({
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
        className="group h-full min-h-[26rem] lg:min-h-[30rem] flex flex-col items-center justify-between rounded-3xl bg-card relative border text-card-foreground shadow pt-16 transition overflow-hidden"
        href={PageUrl}
      >
        <div>
          <p className="text-3xl md:text-4xl font-bold text-center">{Title}</p>
          <p className="mt-2 text-center text-muted-foreground">
            {Description}
          </p>
        </div>
        <Image
          alt={Title}
          width="415"
          height="265"
          className="absolute bottom-0 w-full mt-4 transition duration-500 ease-out origin-center select-none group-hover:scale-105"
          src={ImageUrl}
        />
      </Link>
    </>
  );
};

export default TechStackPageCard;
