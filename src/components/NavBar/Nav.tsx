"use client";
import React, { lazy, useState, useEffect } from "react";
const NaveBarMobile = lazy(() => import("./NaveBarMobile"));
const NaveBarDesktop = lazy(() => import("./NaveBarDesktop"));

const Nav = () => {
  const [isClient, setIsClient] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== undefined ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setIsClient(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 640 && width > 0;
  if (!isClient) {
    return null;
  } else if (isClient && !isMobile) {
    return <NaveBarDesktop />;
  } else if (isMobile) {
    return <NaveBarMobile />;
  }
};

export default Nav;
