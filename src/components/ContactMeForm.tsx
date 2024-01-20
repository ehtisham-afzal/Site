import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const ContactMeForm = () => {
  return (
    <form className="px-6 mb-4">
      <label htmlFor="email" className="flex gap-2 my-4 md:flex-row">
        <span className="font-medium">E-mail:</span>
        <input
          type="email"
          className="flex-1 bg-transparent focus:outline-none focus:ring-0 "
          placeholder="Enter your email"
          id="email"
          name="email"
        />
      </label>
      <Separator />
      <label htmlFor="name" className="flex gap-2 my-4 md:flex-row">
        <span className="font-medium">Name:</span>
        <input
          className="flex-1 bg-transparent focus:outline-none focus:ring-0 "
          placeholder="Enter your name"
          id="name"
          name="name"
        />
      </label>
      <Separator />
      <label htmlFor="subject" className="flex gap-2 my-4 md:flex-row">
        <span className="w-fit">Subject:</span>
        <input
          className="flex-1 bg-transparent focus:outline-none focus:ring-0 "
          placeholder="Enter subject"
          id="subject"
          name="subject"
        />
      </label>
      <Separator />
      <textarea
        className="min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg bg-primary/10 placeholder:text-foreground/60 text-foreground p-4  my-4  focus:outline-none focus:ring-0"
        name="message"
        placeholder="Write your message here"
      />
      <Button
        type="submit"
        size={"lg"}
        className="float-right w-full md:w-fit md:mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full px-1"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>{" "}
        Send
      </Button>
    </form>
  );
};

export default ContactMeForm;
