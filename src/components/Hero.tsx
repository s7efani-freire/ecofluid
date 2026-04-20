import { ArrowRight, Droplet, Leaf, Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: "url('/IAF00411.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-eco-900/80 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bem-vindo à{' '}
              <span className="text-eco-400">
                Ecofluid Plásticos
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-eco-50 leading-relaxed">
              Transformamos materiais reciclados em produtos de PEAD para
              irrigação e condução de fluidos, unindo sustentabilidade e
              qualidade superior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center px-8 py-4 bg-eco-600 text-white rounded-lg font-bold hover:bg-eco-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-eco-800 rounded-lg font-bold hover:bg-eco-50 transition-colors shadow-lg"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-b-4 border-eco-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center">
                    <Recycle className="h-7 w-7 text-eco-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    100% Reciclado
                  </h3>
                  <p className="text-gray-600">
                    Utilizamos PEAD 100% reciclado, contribuindo para um planeta
                    mais limpo e sustentável.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-b-4 border-eco-600">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center">
                    <Droplet className="h-7 w-7 text-eco-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Alta Qualidade
                  </h3>
                  <p className="text-gray-600">
                    Mangueiras e tubos para irrigação com durabilidade comprovada
                    e desempenho excepcional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-b-4 border-eco-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-7 w-7 text-eco-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Sustentável
                  </h3>
                  <p className="text-gray-600">
                    Reduzimos impacto ambiental transformando resíduos em
                    soluções práticas e eficientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}