import Image from "next/image";
import Link from "next/link";

export function WhatsappIcon() {
  return (
    <Link
      href="https://wa.me/5585997646804"
      target="_blank"
      className="fixed bottom-4 right-4 sm:hidden z-50"
    >
      <Image
        src="/whatsapp-icon.png"
        alt="WhatsApp Icon"
        width={60}
        height={60}
        className="hover:scale-110 transition-transform"
      />
    </Link>
  );
}
