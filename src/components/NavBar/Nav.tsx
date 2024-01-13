"use client";
import React, { lazy, useState, useEffect } from "react";
const NaveBarMobile = lazy(() => import("./NaveBarMobile"));
const NaveBarDesktop = lazy(() => import("./NaveBarDesktop"));

const Nav = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the handler right away to set the initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 640;
  if (isMobile) {
    return <NaveBarMobile />;
  } else {
    return <NaveBarDesktop />;
  }
};

export default Nav;
