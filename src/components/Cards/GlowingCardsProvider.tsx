"use client";
import React, { ReactNode, useEffect } from "react";
import "@/Styles/GlowingCard.css";

const GlowingCards = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const syncPointer = ({ x, y }: { x: any; y: any }) => {
      document.documentElement.style.setProperty("--x", x.toFixed(2));
      document.documentElement.style.setProperty(
        "--xp",
        (x / window.innerWidth).toFixed(2)
      );
      document.documentElement.style.setProperty("--y", y.toFixed(2));
      document.documentElement.style.setProperty(
        "--yp",
        (y / window.innerHeight).toFixed(2)
      );
    };
    document.body.addEventListener("pointermove", syncPointer);
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return <section className=" space-x-1 space-y-1">{children}</section>;
};

export default GlowingCards;
