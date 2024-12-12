"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function Advertisement() {
  const [isFixed, setIsFixed] = useState(true); // Estado para definir posição fixa
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar visibilidade
  const [lastScrollY, setLastScrollY] = useState(0); // Última posição de rolagem

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const advertisement = document.querySelector("#advertisement");

      // Verificar se o footer está na tela
      if (footer && advertisement) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const advertisementHeight =
          advertisement.getBoundingClientRect().height;

        setIsFixed(footerTop > windowHeight - advertisementHeight);
      }

      // Detectar direção do scroll
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scroll para baixo
        setIsVisible(true);
      } else {
        // Scroll para cima
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    // Escuta o evento de rolagem
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
      initial={{ y: 100, opacity: 0 }} // Animação inicial
      animate={{
        y: isVisible ? 0 : 100, // Move para fora da tela quando invisível
        opacity: isVisible ? 1 : 0,
        transition: { type: "spring", stiffness: 80 },
      }}
      whileHover={{
        scale: 1.02, // Efeito de hover
        transition: { duration: 0.3 },
      }}
      whileInView={{
        scale: [1, 1.02, 1], // Pequeno pulso infinito ao entrar na viewport
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
    >
      <div className="py-6">
        <div className="flex flex-col justify-between mx-auto text-center space-y-3 lg:flex-row lg:text-start lg:w-9/12">
          <div>
            <h3 className="font-bold text-2xl">Gostou do que viu?</h3>
            <p>
              Entre em contato com um dos nossos consultores e descubra a melhor
              solução para você.
            </p>
          </div>
          <div>
            <Button className="w-fit mx-auto lg:mx-auto">
              Falar com consultor
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
