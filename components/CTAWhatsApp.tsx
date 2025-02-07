"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const CTAWhatsApp = () => {
  const [Message, setMessage] = useState("");
  return (
    <Card className="w-full my-4 rounded-2xl">
      <CardHeader className="text-lg font-bold md:text-xl">
        Want connect or hire me? Lets discuss.
        <CardDescription>Drop your message .</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="relative h-full my-4">
          <Input
            value={Message}
            type="text"
            required
            minLength={4}
            placeholder="Youre message"
            className="w-full h-10 py-2 rounded-sm bg-secondary/70 pr-32"
            onChange={(e) => setMessage(e.target.value)}
          />
          <a
            href={`https://wa.me/+923459695962?text=${Message}`}
            className="absolute flex items-center justify-center h-8 px-4 font-bold bg-green-700 rounded-sm hover:bg-green-600 right-1 top-1 w-28"
            target="__blank"
            type="submit"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="h-full p-1" />
            Send
          </a>
        </form>
      </CardContent>
    </Card>
  );
};

export default CTAWhatsApp;
