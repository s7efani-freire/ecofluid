import { Award, BarChart3, Settings, Users } from 'lucide-react';

export default function Company() {
  const pillars = [
    {
      icon: Settings,
      title: 'Tecnologia',
      description:
        'Equipamentos modernos e processos otimizados para máxima eficiência produtiva.',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description:
        'Rigoroso controle de qualidade em todas as etapas para garantir durabilidade.',
    },
    {
      icon: Users,
      title: 'Equipe',
      description: 'Profissionais especializados e comprometidos com a excelência do produto final.',
    },
    {
      icon: BarChart3,
      title: 'Crescimento',
      description: 'Expansão contínua, consolidando nossa marca e inovando nossos processos.',
    },
  ];

  return (
    <section id="empresa" className="py-24 bg-gradient-to-br from-eco-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-eco-600">Ecofluid</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unindo sustentabilidade e tecnologia, transformamos materiais
            reciclados em produtos de alta performance para o agronegócio e a
            indústria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          <div className="relative group">
            <div className="absolute inset-0 bg-eco-500 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              src="/IAF00334.jpg"
              alt="Produção de Mangueiras de irrigação"
              className="relative z-10 rounded-2xl shadow-lg w-full h-[450px] object-cover border border-gray-100"
            />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-l-8 border-eco-500 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-eco-800 mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Fundada no ano de 2023 pelo Sr. Vicente Marinho de Andrade, na cidade de Vitória da Conquista, Bahia, a <strong>Ecofluid Plásticos</strong> nasceu com um propósito claro: unir o desenvolvimento industrial à responsabilidade ambiental.
              </p>
              <p>
                Embora sejamos uma empresa jovem, nossa dedicação inegociável à qualidade e ao atendimento nos permitiu alcançar uma rápida e sólida consolidação no mercado. O que começou como uma visão inovadora, hoje é uma realidade que atende às altas exigências do setor.
              </p>
              <p>
                Somos especialistas na produção de PEAD reciclado e tubos para irrigação, dedicando nossos esforços para transformar toneladas de resíduos em soluções práticas, duradouras e de excelência para nossos clientes.
              </p>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-eco-100 rounded-full flex items-center justify-center mb-6">
                <pillar.icon className="h-8 w-8 text-eco-600" />
              </div>
              <h3 className="text-xl font-bold text-eco-800 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}