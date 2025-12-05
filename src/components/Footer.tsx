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
    <footer className="bg-gradient-to-br from-eco-700 to-eco-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                Eco<span className="text-eco-300">fluid</span>
              </span>
            </div>
            <p className="text-eco-100 mb-4 leading-relaxed">
              Transformando materiais reciclados em soluções sustentáveis para
              irrigação.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-eco-600 rounded-full text-sm font-semibold">
              <Recycle className="h-4 w-4" />
              100% Reciclado
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-eco-200">Navegação</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-eco-100 hover:text-white transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-eco-200">Produtos</h3>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-eco-100 hover:text-white transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-eco-200">Contato</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start gap-2 text-eco-100">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Pé de Galinha, 116
                    <br />
                    Vitória da Conquista - BA
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:contato@ecofluid.com.br"
                  className="flex items-center gap-2 text-eco-100 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">contato@ecofluid.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+557730251551"
                  className="flex items-center gap-2 text-eco-100 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">(77) 3025-1551</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-eco-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-eco-200 text-sm">
            <p>
              &copy; {currentYear} Ecofluid Plásticos. Todos os direitos
              reservados.
            </p>
            <p>
              Desenvolvido por{' '}
              <span className="text-white font-semibold">Stéfani Freire</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
