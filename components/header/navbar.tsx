import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre-nos", label: "Sobre nós" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <nav className="hidden items-center lg:flex lg:w-1/2 lg:justify-center">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-primary transition-all"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
