import { CheckCircle, Headphones, ShoppingBag, Truck } from 'lucide-react';

export default function Support() {
  const services = [
    {
      icon: Headphones,
      title: 'Consultoria Especializada',
      description:
        'Nossa equipe ajuda você a escolher os produtos mais adequados para suas necessidades.',
    },
    {
      icon: ShoppingBag,
      title: 'Acompanhamento de Pedidos',
      description:
        'Transparência e eficiência em todas as etapas da sua compra.',
    },
    {
      icon: Truck,
      title: 'Suporte Pós-Venda',
      description:
        'Assistência contínua mesmo após a entrega do seu produto.',
    },
    {
      icon: CheckCircle,
      title: 'Garantia de Satisfação',
      description: 'Seu sucesso é a nossa prioridade. Estamos aqui para ajudar.',
    },
  ];

  return (
    <section id="suporte" className="py-20 bg-gradient-to-br from-eco-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-800 mb-4">
            Nosso Compromisso com Você
          </h2>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto">
            Oferecemos suporte completo em toda a jornada do cliente, desde a
            consultoria pré-venda até o acompanhamento pós-entrega.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe de suporte"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-eco-200"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-eco-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-eco-500 to-eco-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-eco-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-eco-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-eco-500 to-eco-600 text-white p-8 rounded-2xl shadow-2xl text-center">
          <h3 className="text-2xl font-bold mb-3">
            Construindo Parcerias Duradouras
          </h3>
          <p className="text-eco-50 text-lg max-w-2xl mx-auto">
            Nosso compromisso vai além da venda. Queremos ser seu parceiro de
            confiança em soluções sustentáveis.
          </p>
        </div>
      </div>
    </section>
  );
}
