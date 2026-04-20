import { Mail, MapPin, Phone, Recycle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Suporte', href: '#suporte' },
  ];

  const products = [
    { name: 'PEAD', href: '#produtos' },
    { name: 'Tubos de Irrigação', href: '#produtos' },
    { name: 'PEBD', href: '#produtos' },
  ];

  return (
    <footer className="bg-gradient-to-br from-eco-500 via-eco-800 to-eco-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="mb-6 bg-white inline-block p-2 rounded-lg shadow-md">
              <img 
                src="/logo.png" 
                alt="Logo Ecofluid Plásticos" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-white backdrop-blur-sm">
              <Recycle className="h-4 w-4" />
              100% Reciclado
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-eco-400/50 pb-2 inline-block">Navegação</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-eco-100 hover:text-white hover:pl-2 transition-all duration-300 inline-block drop-shadow-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-eco-400/50 pb-2 inline-block">Produtos</h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-eco-100 hover:text-white hover:pl-2 transition-all duration-300 inline-block drop-shadow-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-eco-400/50 pb-2 inline-block">Contato</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-eco-100 drop-shadow-sm">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-white" />
                  <span className="text-sm">
                    Pé de Galinha, 116<br />
                    Vitória da Conquista - BA
                  </span>
                </div>
              </li>
              <li>
                <a href="mailto:contato@ecofluidplasticos.com" className="flex items-center gap-3 text-eco-100 hover:text-white transition-colors drop-shadow-sm">
                  <Mail className="h-5 w-5 text-white" />
                  <span className="text-sm">contato@ecofluidplasticos.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+557730251551" className="flex items-center gap-3 text-eco-100 hover:text-white transition-colors drop-shadow-sm">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-sm">(77) 3025-1551</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-eco-100 text-sm">
            <p>
              &copy; {currentYear} Ecofluid Plásticos. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{' '}
              <span className="text-white font-semibold drop-shadow-sm">Stéfani Freire</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}