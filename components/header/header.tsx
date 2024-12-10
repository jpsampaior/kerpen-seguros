import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="flex justify-center mx-auto py-5 lg:w-10/12 lg:justify-between">
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
    </header>
  );
}
