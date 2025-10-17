import { Droplets, Recycle, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://www.interbrasil.com.br/wp-content/uploads/2021/09/24403_02.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sustentabilidade em <span className="text-green-400">Cada Gota</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A Ecofluid transforma materiais reciclados em produtos de alta qualidade em PEAD,
              oferecendo soluções sustentáveis para irrigação e condução de fluidos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#produtos"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Ver Produtos
              </a>
              <a
                href="#contato"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <Recycle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">100% Reciclado</h3>
              <p className="text-slate-300">
                Nossos produtos são fabricados com PEAD 100% reciclado, contribuindo para um planeta mais limpo.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <Droplets className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Alta Qualidade</h3>
              <p className="text-slate-300">
                Mangueiras e tubos de irrigação com resistência e durabilidade comprovadas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              <Leaf className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sustentável</h3>
              <p className="text-slate-300">
                Reduzimos o impacto ambiental transformando resíduos em produtos úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
