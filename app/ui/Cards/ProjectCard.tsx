import Image from "next/image";
import React from "react";
import { Card, CardHeader } from "../../../src/components/ui/card";
import Link from "next/link";

export type ProjectCardTypes = {
  Name: string;
  Description: string;
  Summary: string;
  ProjectIconUrl?: string;
  ProjectUrl?: string;
  ProjectImageUrl?: string;
  path: string;
  Keywords?: string[];
};

const ProjectCard = ({ Data }: { Data: ProjectCardTypes }) => {
  const {
    Name,
    Description,
    Summary,
    ProjectIconUrl,
    ProjectUrl,
    ProjectImageUrl,
    path,
    Keywords,
  } = Data;
  return (
    <Card
      className={`relative overflow-hidden p-6 transition duration-100 ${
        ProjectImageUrl ? "h-[565px]" : "h-fit"
      } lg:p-16 lg:pe-0 rounded-3xl bg-card`}
    >
      <div
        className={`flex flex-col w-full h-full gap-4 ${
          ProjectImageUrl ? "lg:w-1/2" : "lg:w-11/12"
        }`}
      >
        {ProjectIconUrl && (
          <Link className="w-fit text-primary" href={`/Projects/${path}`}>
            <Image
              alt={Name}
              width="70"
              height="70"
              className="size-20"
              src={ProjectIconUrl}
            />
          </Link>
        )}
        <div>
          <h2 className="text-2xl font-extrabold lg:text-4xl">{Name}</h2>
          <p>{Description}</p>
        </div>
        {/* set inner html summary description */}
        {Summary && (
          <div
            className="z-10 flex-1 text-pretty prose"
            dangerouslySetInnerHTML={{ __html: Summary }}
          />
        )}
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
      {ProjectImageUrl && (
        <Link
          href={`/Projects/${path}`}
          className={`absolute -right-32 top-[10%] w-7/12 hidden  hover:rotate-3 lg:block transition duration-300 ease-out hover:scale-110`}
        >
          <Image
            alt={`${Name} Image`}
            width="600"
            height="450"
            className="object-cover w-full h-full rounded-xl"
            src={ProjectImageUrl}
          />
        </Link>
      )}
    </Card>
  );
};

export default ProjectCard;
