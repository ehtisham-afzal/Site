import Image from "next/image";
import React from "react";
import { Card, CardHeader } from "../../../src/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

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
      className={`relative overflow-hidden h-fit p-6 transition duration-100 ${
        ProjectImageUrl ? "min-h-[565px]" : "h-fit"
      } lg:p-16 lg:pe-0 rounded-3xl bg-card`}
    >
      <div
        className={`flex flex-col w-full h-full gap-4 ${
          ProjectImageUrl ? "lg:w-1/2" : "lg:w-11/12"
        }`}
      >
        {ProjectIconUrl && (
          <Link className="w-fit text-black dark:text-white" href={`/Projects/${path}`}>
            <Image
              alt={Name}
              width="70"
              height="70"
              className="size-20"
              src={ProjectIconUrl}
            />
          </Link>
        )}
        <h2 className="text-2xl font-extrabold lg:text-4xl">{Name}</h2>

        {/* set inner html summary description */}
        {Summary && (
          <div
            className="z-10 flex-1 text-pretty prose dark:prose-invert lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: Summary }}
          />
        )}
        <div className="flex flex-wrap gap-2 py-2">
          {Keywords &&
            Keywords.map((keyword, index) => (
              <Badge key={index} variant="secondary">
                {keyword}
              </Badge>
            ))}
        </div>
        <a
          className="inline-flex items-center justify-start gap-2 mt-6 font-medium transition rounded-lg cursor-pointer group lg:mt-0"
          target="_blank"
          href={ProjectUrl}
        >
          Visit Site
          <ArrowSmallRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform ease-in-out" />
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
