"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { CustomLink } from "../custom-link";

export function Advertisement() {
  const [isFixed, setIsFixed] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const advertisement = document.querySelector("#advertisement");

      if (footer && advertisement) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const advertisementHeight =
          advertisement.getBoundingClientRect().height;

        setIsFixed(footerTop > windowHeight - advertisementHeight);
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY || !isFixed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      id="advertisement"
      className={`w-full bg-background-tertiary z-50 shadow-lg`}
      style={{
        position: isFixed ? "fixed" : "static",
        bottom: isFixed ? 0 : "auto",
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
        transition: { type: "spring", stiffness: 80 },
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileInView={{
        scale: [1, 1.02, 1],
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
    >
      <div className="py-6">
        <div className="flex flex-col justify-between mx-auto text-center space-y-3 lg:flex-row lg:text-start lg:w-9/12 lg:space-y-0">
          <div>
            <h3 className="font-bold text-2xl">Gostou do que viu?</h3>
            <p>
              Entre em contato com um dos nossos consultores e descubra a melhor
              solução para você.
            </p>
          </div>
          <div className="flex items-center">
            <CustomLink
              href={"https://wa.me/5585997646804"}
              className="w-fit mx-auto h-10 lg:mx-auto"
              target="_blank"
            >
              Falar com consultor
              <ArrowRight />
            </CustomLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
