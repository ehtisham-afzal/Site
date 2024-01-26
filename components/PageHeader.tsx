import React from "react";
import { Separator } from "../src/components/ui/separator";

const PageHeader = ({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) => {
  return (
    <header className="pl-2 mb-16 md:container mt-52">
      <h1 className="break-words text-5xl font-bold leading-none md:text-[80px]">
        {Title}
      </h1>
      <p className="mt-4 mb-16 text-base text-muted-foreground md:text-2xl">
        {Description}
      </p>
      <Separator />
    </header>
  );
};

export default PageHeader;
