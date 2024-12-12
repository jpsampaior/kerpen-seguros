"use client";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre-nos", label: "Sobre nós" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;

    event.preventDefault();

    if (target.getAttribute("href") === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else if (target.hash) {
      const element = document.querySelector(target.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="hidden items-center lg:flex lg:w-1/2 lg:justify-center">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={handleSmoothScroll}
              className="hover:text-primary transition-all cursor-pointer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
