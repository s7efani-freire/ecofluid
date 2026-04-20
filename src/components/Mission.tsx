import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function Mission() {
  const items = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description:
        'Fornecer soluções eficientes e sustentáveis em tubos de PEAD e PEBD, transformando resíduos plásticos em produtos de alta qualidade e durabilidade para o agronegócio e a indústria.',
    },
    {
      icon: Eye,
      title: 'Nossa Visão',
      description:
        'Ser reconhecida nacionalmente como a principal referência na fabricação de tubos plásticos reciclados, destacando-se pela união entre inovação tecnológica e preservação ambiental.',
    },
    {
      icon: ShieldCheck,
      title: 'Nossos Valores',
      description: (
        <>
          Pautamos nossa atuação no respeito absoluto à <strong className="text-eco-700">sustentabilidade</strong>, no rigor técnico para garantir a máxima <strong className="text-eco-700">qualidade</strong>, na <strong className="text-eco-700">ética</strong> transparente com parceiros e na busca constante por <strong className="text-eco-700">inovação</strong>.
        </>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fundo (opcional, bem sutil) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-eco-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-eco-600">Propósito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A base sólida que guia nossas decisões e o futuro sustentável que construímos a cada dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group overflow-hidden flex flex-col items-center"
            >
              {/* Linha de degradê no topo do card (a "gracinha" premium) */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-eco-400 to-eco-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              
              {/* Marca d'água do ícone no fundo do card */}
              <item.icon className="absolute -bottom-10 -right-10 w-48 h-48 text-eco-50 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />

              {/* Ícone Principal */}
              <div className="w-20 h-20 bg-eco-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-eco-100 relative z-10 group-hover:bg-eco-600 transition-colors duration-500">
                <item.icon className="h-10 w-10 text-eco-600 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                {item.title}
              </h3>
              
              <div className="text-gray-600 leading-relaxed text-base relative z-10">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}