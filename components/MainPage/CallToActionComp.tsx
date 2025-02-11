import React from "react";
import CTAButton from "../ui/CTAButton";

const CallToActionComp = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-between gap-10 p-4 sm:p-8 border rounded-xl bg-secondary/50 my-24 lg:flex-row">
      <div>
        <h2 className="text-3xl font-bold text-center lg:text-left lg:text-4xl">
          Let&apos;s Collaborate
        </h2>
        <p className="mt-4 text-lg md:text-xl text-center text-muted-foreground lg:text-left text-pretty">
          Want to discuss an opportunity to create something great
          <br className="hidden lg:inline-block" /> I’m ready when you are.
        </p>
      </div>
      <CTAButton className="w-full sm:w-fit" />
    </section>
  );
};

export default CallToActionComp;
