import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
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
    <Card className="relative overflow-hidden rounded-3xl p-6 transition duration-100 lg:h-[565px] lg:p-16 lg:pe-0">
      <div className="flex h-full w-full flex-col gap-4 lg:w-1/2 z-20">
        <Link prefetch={false} className="w-fit" href={`/projects/${Name}`}>
          <Image
            alt={Name}
            width="70"
            height="70"
            className="h-20"
            src={ProjectIconUrl}
          />
        </Link>
        <p className="text-xl font-extrabold lg:text-3xl">{Name}</p>
        <p className="flex-1 text-muted-foreground text-pretty">
          {Description.substring(0, 350)}
          {Description.length > 350 ? (
            <Link
              prefetch={false}
              className="cursor-pointer rounded-lg items-center inline-flex font-medium group mt-6 justify-start gap-2 transition lg:mt-0"
              href={`/projects/${Name}`}
            >
              ... Learn More
            </Link>
          ) : (
            ""
          )}
        </p>
        <a
          className="cursor-pointer rounded-lg items-center inline-flex font-medium group mt-6 justify-start gap-2 transition lg:mt-0"
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
      <a
        target="_blank"
        className=" absolute bottom-0 h-full -right-32 lg:flex items-center justify-center hidden object-cover overflow-hidden"
        href={ProjectUrl}
      >
        <Image
          alt={`${Name} Icon`}
          width="457"
          height="565"
          className="w-10/12 transition duration-300 ease-out hover:scale-110 rounded-xl"
          src={ProjectImageUrl}
        />
      </a>
    </Card>
  );
};

export default ProjectCard;
