import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Suporte', href: '#suporte' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900 shadow-lg">
      <div className="bg-slate-800 py-2 px-4 md:px-8 text-sm text-slate-300">
        <div className="max-w-7xl mx-auto flex justify-end gap-6">
          <a href="mailto:contato@ecofluid.com.br" className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">contato@ecofluid.com.br</span>
          </a>
          <a href="+557730251551" className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span>(77) 3025-1551</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
<a href="#home" className="flex items-center">
  <div className="px-4 py-2 rounded">
    <img src="/logo.png" alt="Logo da Ecofluid" className="h-12 w-auto" />
  </div>
</a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-green-400 transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-white hover:text-green-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
