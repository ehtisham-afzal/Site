import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import PageHeader from "../../components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notfications",
};

const page = () => {
  return (
    <div>
      <PageHeader
        Title="Youre Message Recieved"
        Description="I Will Get back to you as soon as possible"
      />
      <main className="w-full flex justify-center items-center">
        <ClipboardDocumentCheckIcon className="m-2" />
      </main>
    </div>
  );
};

export default page;
