import { useState, useEffect } from "react";

()=>{
  const handleScroll = ()=>{
    const currentScrollHeight =
      typeof window !== "undefined"
        ? window.pageYOffset || document.documentElement.scrollTop
        : 0;
    setScrollHeight(currentScrollHeight);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
}