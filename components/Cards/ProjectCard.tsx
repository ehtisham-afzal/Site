import Image from "next/image";
import { Card } from "../ui/card";
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
      className={`relative overflow-hidden h-fit p-4 md:p-6 transition duration-200 
        ${ProjectImageUrl ? "min-h-[400px] md:min-h-[565px]" : "h-fit"}
        lg:p-8 rounded-3xl bg-card hover:shadow-lg`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-full gap-6">
        <div
          className={`flex flex-col gap-3 md:gap-4 ${
            ProjectImageUrl ? "lg:w-5/12" : "lg:w-full"
          }`}
        >
          {ProjectIconUrl && (
            <Link className="w-fit text-foreground" href={`/Projects/${path}`}>
              <Image
                alt={Name}
                width="150"
                height="150"
                className="size-16 md:size-20 overflow-hidden rounded-lg shadow-sm 
                  hover:shadow-md transition-shadow"
                src={ProjectIconUrl}
              />
            </Link>
          )}
          <Link href={`/Projects/${path}`}>
            <h2 className="text-xl md:text-2xl font-extrabold lg:text-3xl xl:text-4xl">
              {Name}
            </h2>
          </Link>

          {Summary && (
            <div
              className="z-10 flex-1 text-pretty prose dark:prose-invert text-sm md:text-base 
                lg:prose-lg lg:max-w-none"
              dangerouslySetInnerHTML={{ __html: Summary }}
            />
          )}
          <div className="flex flex-wrap gap-1.5 md:gap-2 py-2">
            {Keywords?.map((keyword, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs md:text-sm rounded-full hover:border-primary"
              >
                {keyword}
              </Badge>
            ))}
          </div>
          <a
            className="inline-flex items-center justify-start gap-2 mt-4 md:mt-6 text-sm 
              md:text-base font-medium transition rounded-lg cursor-pointer group 
              hover:text-primary"
            target="_blank"
            href={ProjectUrl}
          >
            Visit Site
            <ArrowSmallRightIcon
              className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 
                transition-transform ease-in-out"
            />
          </a>
        </div>

        {ProjectImageUrl && (
          <Link
            href={`/Projects/${path}`}
            className={`
              relative block w-full mt-4 md:mt-6
              lg:w-6/12 lg:mt-0
              lg:hover:rotate-2 transition duration-300 ease-out lg:hover:scale-105
            `}
          >
            <Image
              alt={`${Name} Image`}
              width="1200"
              height="900"
              quality={100}
              className="object-cover w-full rounded-xl shadow-md hover:shadow-xl 
                transition duration-300"
              src={ProjectImageUrl}
            />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
