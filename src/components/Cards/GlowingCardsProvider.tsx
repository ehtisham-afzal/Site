"use client";
import React, { Children, ReactNode } from "react";
import "@/Styles/GlowingCard.css";

/**
 * Tiny hook that you can use where you need it
 */
const usePointerGlow = () => {
  const [status, setStatus] = React.useState({});
  React.useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }: { x: any; y: any }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--xp", xp);
      document.documentElement.style.setProperty("--y", y);
      document.documentElement.style.setProperty("--yp", yp);
      setStatus({ x, y, xp, yp });
    };
    document.body.addEventListener("pointermove", syncPointer);
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);
  return [status];
};

const GlowingCards = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [status] = usePointerGlow();

  return <section className=" space-x-1 space-y-1">{children}</section>;
};

export default GlowingCards;
