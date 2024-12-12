"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setHasScrolled(currentScrollY > 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed z-10 w-full bg-background-default ${
        hasScrolled ? "shadow-md bg-background-default/90" : ""
      }`}
    >
      <div className="flex justify-center mx-auto py-5 lg:w-10/12 lg:justify-between">
        <div className="lg:w-1/4">
          <Logo />
        </div>
        <Navbar />
        <div className="lg:w-1/4">
          <Button className="hidden lg:flex lg:ml-auto">
            Falar com especialista
            <ArrowRight />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
