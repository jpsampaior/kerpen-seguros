import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function Advertisement() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-between mx-auto w-10/12 text-center space-y-3 lg:flex-row lg:text-start">
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
  );
}
