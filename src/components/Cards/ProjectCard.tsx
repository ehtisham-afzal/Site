import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  href,
  tags,
  ImgageUrl,
}: {
  title: string;
  description: string;
  href: string;
  tags: string[];
  ImgageUrl: string;
}) {
  return (
    <div className="w-96 h-fit relative border rounded-xl">
      <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <Card aria-label={title} className="group w-full">
        <Image
          width={100}
          height={100}
          className="object-cover object-center h-full rounded-xl"
          src={ImgageUrl}
          alt={`${title} Image`}
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription> Description</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <HoverPattern mouseX={mouseX} mouseY={mouseY} /> */}
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex-wrap">
          {tags?.map((tag, idx) => (
            <Badge variant="outline" key={idx} className={` italic m-[2px]`}>
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
