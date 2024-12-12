import Image from "next/image";
import Link from "next/link";

export function Logo() {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="/"
      onClick={handleLogoClick}
      className="flex items-center gap-4"
    >
      <Image
        src="/logo-kerpen-white.png"
        alt="logo-kerpen"
        width={50}
        height={50}
      />
      <h1 className="text-2xl font-semibold">Kerpen Seguros</h1>
    </Link>
  );
}
