import { useState } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Suporte', href: '#suporte' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="bg-eco-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-end items-center gap-6 text-sm">
          <a
            href="mailto:contato@ecofluidplasticos.com"
            className="flex items-center gap-2 hover:text-eco-200 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">contato@ecofluidplasticos.com</span>
          </a>
          <a
            href="tel:+557730251551"
            className="flex items-center gap-2 hover:text-eco-200 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(77) 3025-1551</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo Ecofluid Plásticos" 
              className="h-12 w-auto object-contain" 
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-eco-600 font-semibold transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eco-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-eco-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-4 px-6 text-gray-700 hover:text-eco-700 hover:bg-eco-50 transition-all font-medium border-l-4 border-transparent hover:border-eco-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}