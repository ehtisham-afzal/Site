"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Input } from "./ui/input";

const CTAWhatsApp = () => {
  const [Message, setMessage] = useState(
    "I want to work on a project with you"
  );
  return (
    <Card className="w-full my-4 rounded-2xl">
      <CardHeader className="text-lg font-bold md:text-xl">
        Want connect or hire me as a freelancer? Lets discuss.
        <CardDescription>Drop your message .</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="relative h-full my-4">
          <Input
            value={Message}
            type="text"
            placeholder="Youre message"
            className="w-full h-10 py-2 rounded-sm"
            onChange={(e) => setMessage(e.target.value)}
          />
          <a
            href={`https://wa.me/+923459695962?text=${Message}`}
            className="absolute flex items-center justify-center h-8 px-4 font-bold text-gray-900 bg-green-500 rounded-sm hover:bg-green-400 right-1 top-1 w-28"
            target="__blank"
            type="submit"
          >
            <svg
              className="h-full px-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="m10 10-2 2 2 2" />
              <path d="m14 10 2 2-2 2" />
            </svg>
            Send
          </a>
        </form>
      </CardContent>
    </Card>
  );
};

export default CTAWhatsApp;
