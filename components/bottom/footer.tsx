import { Advertisement } from "./advertisement";
import { FooterContent } from "./footer-content";
import { WhatsappIcon } from "./whatsapp-icon";

export function Footer() {
  return (
    <footer className="bg-background-tertiary">
      <WhatsappIcon />
      <Advertisement />
      <FooterContent />
      <div className="bg-background-footer">
        <hr className="border-black lg:hidden" />
        <p className="text-center text-sm">
          Kerpen Seguros &copy; {new Date().getFullYear()}
        </p>
        <p className="text-center py-2 text-xs">
          Site desenvolvido por{" "}
          <a
            className="font-bold"
            href="https://linkedin.com/in/joao-pedro-sampaio-ribeiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            João Pedro Sampaio Ribeiro
          </a>
        </p>
      </div>  
    </footer>
  );
}
