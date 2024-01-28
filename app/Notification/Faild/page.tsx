import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";

export const metadata: Metadata = {
  title: "Notfications",
};

const page = () => {
  return (
    <div>
      <PageHeader
        Title="Opps Can't Send"
        Description="Pleas Try Again Or Consider Another Way To Comunicate"
      />
      <main className="w-full flex justify-center items-center">
        <InformationCircleIcon className="m-2 text-orange-500" />
      </main>
    </div>
  );
};

export default page;
