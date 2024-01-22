import Image from "next/image";
import React from "react";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";

const ProjectCard = ({
  Name,
  Description,
  ProjectIconUrl,
  ProjectUrl,
  ProjectImageUrl,
}: {
  Name: string;
  Description: string;
  ProjectIconUrl: string;
  ProjectUrl: string;
  ProjectImageUrl: string;
}) => {
  return (
    <Card className="relative overflow-hidden p-6 transition duration-100 lg:h-[565px] lg:p-16 lg:pe-0 rounded-3xl bg-card">
      <div className="flex flex-col w-full h-full gap-4 lg:w-1/2">
        {/* <Link  className="w-fit" href={`/projects/${Name}`}> */}
          <Image
            alt={Name}
            width="70"
            height="70"
            className="h-20"
            src={ProjectIconUrl}
          />
        {/* </Link> */}
        <h2 className="text-2xl font-extrabold lg:text-4xl">{Name}</h2>
        <p className="z-10 flex-1 text-muted-foreground text-pretty">
          {Description.substring(0, 350)}
          {Description.length > 350 ? (
            <Link  href={`/projects/${Name}`}>
              ... Learn More
            </Link>
          ) : (
            ""
          )}
        </p>
        <a
          className="inline-flex items-center justify-start gap-2 mt-6 font-medium transition rounded-lg cursor-pointer group lg:mt-0"
          target="_blank"
          href={ProjectUrl}
        >
          Visit Site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="transition group-hover:translate-x-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.17 5a30.23 30.23 0 0 1 5.62 5.406c.14.174.21.384.21.594m-5.83 6a30.232 30.232 0 0 0 5.62-5.406A.949.949 0 0 0 21 11m0 0H3"
            ></path>
          </svg>
        </a>
      </div>
      <Link
        
        href={`/projects/${Name}`}
        className="absolute -right-32 top-[10%] w-7/12 hidden rotate-3 hover:rotate-0 lg:block transition duration-300 ease-out hover:scale-110"
      >
        <Image
          alt={`${Name} Image`}
          width="457"
          height="565"
          className="object-cover w-full h-full rounded-xl"
          src={ProjectImageUrl}
        />
      </Link>
    </Card>
  );
};

export default ProjectCard;
