import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";

export const metadata: Metadata = {
  title: "Notfications",
};

const page = () => {
  return (
    <div className="container h-screen flex flex-col md:flex-row-reverse items-center justify-center">
      <PageHeader
        Title="Opps Can't Send"
        Description="Pleas Try Again Or Consider Another Way To Comunicate"
      />
      <span className="w-4/6 md:w-1/3 flex md:mt-36">
        <InformationCircleIcon className="m-2 text-orange-500" />
      </span>
    </div>
  );
};

export default page;
