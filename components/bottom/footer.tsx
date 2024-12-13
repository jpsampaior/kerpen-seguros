import { Advertisement } from "./advertisement";
import { FooterContent } from "./footer-content";
import { WhatsappIcon } from "./whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-background-tertiary">
      <WhatsappIcon />
      <Advertisement />
      <FooterContent />
    </footer>
  );
}
