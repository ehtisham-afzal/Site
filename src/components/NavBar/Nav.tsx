"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [width, setWidth] = useState(0);
  // Check if the run on cleint or not if not then return nothing untill the code runs on client sid
  const [IsCleint, setIsCleint] = useState(false);

  useEffect(() => {
    setIsCleint(true);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the handler right away to set the initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 640 && width !== 0;
  if (IsCleint && isMobile) {
    const NaveBarMobile = dynamic(() => import("./NaveBarMobile"));
    return <NaveBarMobile />;
  } else if (IsCleint && !isMobile) {
    const NaveBarDesktop = dynamic(() => import("./NaveBarDesktop"));
    return <NaveBarDesktop />;
  } else {
    return null;
  }
};

export default Nav;
