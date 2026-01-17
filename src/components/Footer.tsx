import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Walber Vieira Advocacia" 
            className="h-12 brightness-0 invert"
          />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5549999219490"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-navy-dark transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/walbervieira.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-navy-dark transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/walbervieira.adv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-navy-dark transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Walber Vieira Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
