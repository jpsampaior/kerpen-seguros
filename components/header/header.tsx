"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { Navbar } from "./navbar";
import { CustomLink } from "../custom-link";

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
      className={`fixed z-10 w-full ${
        hasScrolled ? "shadow-md bg-background-default/90" : "bg-fixed bg-gradient bg-cover"
      }`}
    >
      <div className="flex justify-center mx-auto py-5 lg:w-10/12 lg:justify-between">
        <div className="lg:w-1/4">
          <Logo />
        </div>
        <Navbar />
        <div className="lg:w-1/4">
          <CustomLink
            href={"https://wa.me/5585997646804"}
            className="hidden lg:flex lg:ml-auto"
            target="_blank"
          >
            Falar com especialista
            <ArrowRight />
          </CustomLink>
        </div>
      </div>
    </motion.header>
  );
}
