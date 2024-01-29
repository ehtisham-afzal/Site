import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import PageHeader from "../../ui/PageHeader";

export const metadata: Metadata = {
  title: "Notfications",
};

const page = ({ params }: { params: { Message: string } }) => {
  if (params.Message == "FailedToSend") {
    return (
      <div className="h-screen flex flex-col md:flex-row-reverse items-center justify-center">
        <PageHeader
          Title="Opps Can't Send"
          Description="Pleas Try Again Or Consider Another Way To Comunicate"
        />
        <span className="w-4/6 md:w-1/3 flex md:mt-36">
          <InformationCircleIcon className="m-2 text-orange-500" />
        </span>
      </div>
    );
  } else if (params.Message === "MessageSended") {
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
  } else {
    return (
      <div className="h-screen flex flex-col md:flex-row-reverse items-center justify-center text-yellow-400">
        <PageHeader Title="There is no notification" Description=" " />
        <span className="w-4/6 md:w-1/3 flex md:mt-36">
          <InformationCircleIcon className="m-2" />
        </span>
      </div>
    );
  }
};

export default page;
