import { Advertisement } from "./advertisement";
import { FooterContent } from "./footer-content";

export function Footer() {
  return (
    <footer className="bg-background-tertiary">
      <Advertisement />
      <FooterContent />
    </footer>
  );
}
