import { CheckCircleIcon } from "@heroicons/react/24/outline";
import PageHeader from "../../components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notfications",
};

const page = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row-reverse items-center justify-center">
      <PageHeader
        Title="Youre Message Recieved!"
        Description="I Will Get back to you as soon as possible"
      />
      <span className="w-4/6 md:w-1/3 flex md:mt-36">
        <CheckCircleIcon className="m-2 text-green-400" />
      </span>
    </div>
  );
};

export default page;
