import { Award, BarChart3, Settings, Users } from 'lucide-react';

export default function Company() {
  const pillars = [
    {
      icon: Settings,
      title: 'Tecnologia',
      description:
        'Equipamentos modernos e processos otimizados para máxima eficiência',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description:
        'Certificações do setor e rigoroso controle de qualidade em todas as etapas',
    },
    {
      icon: Users,
      title: 'Equipe',
      description: 'Profissionais especializados e comprometidos com a excelência',
    },
    {
      icon: BarChart3,
      title: 'Crescimento',
      description: 'Expansão contínua e inovação constante em nossos processos',
    },
  ];

  return (
    <section id="empresa" className="py-20 bg-gradient-to-br from-eco-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-800 mb-4">
            Sobre a Ecofluid
          </h2>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto">
            Unindo sustentabilidade e tecnologia, transformamos materiais
            reciclados em produtos de alta qualidade para o agronegócio e
            indústria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/about.png"
              alt="Mangueiras de irrigação"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-eco-200"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-eco-500">
              <h3 className="text-2xl font-bold text-eco-800 mb-3">
                Nossa História
              </h3>
              <p className="text-eco-700 leading-relaxed">
                A Ecofluid é especializada na produção de PEAD reciclado e
                mangueiras de irrigação, focando em reduzir o impacto ambiental
                enquanto oferece soluções práticas aos nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-eco-500 to-eco-600 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-3xl font-bold mb-1">2+</div>
                <div className="text-eco-100 text-sm">Anos de Experiência</div>
              </div>
              <div className="bg-gradient-to-br from-eco-600 to-eco-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-eco-100 text-sm">Toneladas Recicladas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-eco-500"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-eco-500 to-eco-600 rounded-xl flex items-center justify-center mb-4">
                <pillar.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-eco-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-eco-700 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
