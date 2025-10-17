import { Recycle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="px-4 py-2 rounded inline-block mb-4">
              <img src="/logo.png" alt="Logo da Ecofluid" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 mb-4">
              Transformando materiais reciclados em soluções sustentáveis para irrigação.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <Recycle className="w-5 h-5" />
              <span className="text-sm font-semibold">100% Reciclado</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#empresa" className="text-slate-400 hover:text-green-400 transition-colors">
                  Empresa
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-green-400 transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#suporte" className="text-slate-400 hover:text-green-400 transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2 text-slate-400">
              <li>PEAD</li>
              <li>Tubos de Irrigação</li>
              <li>PEBD</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Pé de Galinha, 116<br />Zona Rural 9, Vitória da Conquista -BA</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contato@ecofluid.com.br" className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                  contato@ecofluid.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+557730251551" className="text-slate-400 hover:text-green-400 transition-colors text-sm">
                  (77) 3025-1551
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {currentYear} Ecofluid. Todos os direitos reservados.
            </p>
            <p className="text-slate-400 text-sm">
              Desenvolvido por Stéfani Freire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
