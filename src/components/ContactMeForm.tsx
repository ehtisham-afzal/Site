"use client";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useFormState } from "react-dom";
import { AuthinticatMessage } from "@/lib/Actions";
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const ContactMeForm = () => {
  const [ErrorMessage, dispatch] = useFormState(AuthinticatMessage, undefined);
  return (
    <form action={dispatch} className="px-6 mb-4">
      <label htmlFor="email" className="flex gap-2 my-1 md:flex-row">
        <span className="font-medium">E-mail:</span>
        <input
          type="email"
          className="flex-1 bg-transparent focus:outline-none focus:ring-0 "
          placeholder="Enter your email"
          id="email"
          name="email"
        />
      </label>
      {ErrorMessage?.error.email && (
        <span className="w-full flex h-5 items-center text-red-500 mb-4 whitespace-nowrap">
          <ExclamationCircleIcon className="h-full pr-2" />
          {ErrorMessage?.error.email}
        </span>
      )}
      <Separator className="my-4" />
      <label htmlFor="name" className="flex gap-2 my-1 md:flex-row">
        <span className="font-medium">Name:</span>
        <input
          className="flex-1 bg-transparent focus:outline-none focus:ring-0 "
          placeholder="Enter your name"
          id="name"
          name="name"
        />
      </label>
      {ErrorMessage?.error.name && (
        <span className="w-full flex h-5 items-center text-red-500 mb-4 whitespace-nowrap">
          <ExclamationCircleIcon className="h-full pr-2" />
          {ErrorMessage?.error.name}
        </span>
      )}
      <Separator className="my-4" />
      <label htmlFor="subject" className="flex gap-2 my-1 md:flex-row">
        <span className="w-fit">Subject:</span>
        <input
          className="flex-1 bg-transparent focus:outline-none focus:ring-0 "
          placeholder="Enter subject"
          id="subject"
          name="subject"
        />
      </label>
      {ErrorMessage?.error.subject && (
        <span className="w-full flex h-5 items-center text-red-500 mb-4 whitespace-nowrap">
          <ExclamationCircleIcon className="h-full pr-2" />
          {ErrorMessage?.error.subject}
        </span>
      )}
      <Separator className="my-4" />
      {ErrorMessage?.error.message && (
        <span className="w-full flex h-5 items-center text-red-500 mb-4 whitespace-nowrap">
          <ExclamationCircleIcon className="h-full pr-2" />
          {ErrorMessage?.error.message}
        </span>
      )}
      <textarea
        className="min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg bg-primary/10 placeholder:text-foreground/60 text-foreground p-4  mb-4  focus:outline-none focus:ring-0"
        id="message"
        name="message"
        placeholder="Write your message here"
      />
      <span className="w-full flex flex-col md:flex-row min-h-fit md:h-12 relative md:mb-2">
        {ErrorMessage && (
          <span className=" py-1 flex h-8 items-center text-red-500 md:absolute top-0 left-2 whitespace-nowrap ">
            <ExclamationCircleIcon className="h-full pr-2 md:px-2" />
            {ErrorMessage.message}
          </span>
        )}
        <Button
          type="submit"
          size={"lg"}
          className="float-right w-full md:w-fit md:mb-2 md:absolute right-0 md:right-2 bottom-0"
        >
          <EnvelopeIcon className="h-5 pr-2" />
          Send
        </Button>
      </span>
    </form>
  );
};

export default ContactMeForm;
