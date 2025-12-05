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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="bg-eco-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-end items-center gap-4 text-sm">
          <a
            href="mailto:contato@ecofluid.com.br"
            className="flex items-center gap-2 hover:text-eco-100 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">contato@ecofluid.com.br</span>
          </a>
          <a
            href="tel:+557730251551"
            className="flex items-center gap-2 hover:text-eco-100 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(77) 3025-1551</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold text-eco-700">
              Eco<span className="text-eco-500">fluid</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-eco-800 hover:text-eco-500 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eco-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-eco-700 hover:text-eco-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 bg-eco-50 rounded-b-lg">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-eco-800 hover:text-eco-500 hover:bg-white transition-all font-medium"
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
