import CTAWhatsApp from "../ui/CTAWhatsApp";
import ContactMeForm from "../ui/ContactMeForm";
import PageHeader from "../ui/PageHeader";
import SocialLinks from "../ui/SocialLinks";
import { Card } from "../../src/components/ui/card";
import { Separator } from "../../src/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <>
      <PageHeader
        Title="Get in touch"
        Description="Let's build something awesome."
      />

      <main className="md:container">
        <Card className="relative backdrop-blur-sm bg-card min-h-[565px] overflow-hidden rounded-2xl pb-3">
          <div className="relative flex flex-col items-center justify-center py-4">
            <div className="absolute left-4 top-[22px] flex gap-2">
              <div className="h-3 w-3 rounded-full border-[1px] border-[#F63636] bg-[#FF6057] " />
              <div className="h-3 w-3 rounded-full border-[1px] border-[#F6C136] bg-[#FDBC2E] " />
              <div className="h-3 w-3 rounded-full border-[1px] border-[#53CC28] bg-[#27C840] " />
            </div>
            <p className="mb-4 font-medium ">Your message</p>
            <Separator />
          </div>
          <ContactMeForm />
        </Card>
        <CTAWhatsApp />
        <SocialLinks />
      </main>
    </>
  );
};

export default page;
