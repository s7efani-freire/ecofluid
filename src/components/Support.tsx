import { Users, Headphones, ClipboardCheck, ThumbsUp } from 'lucide-react';

export default function Support() {
  return (
    <section id="suporte" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nosso Compromisso com Você
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Imagem mais focada em atendimento/consultoria */}
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Equipe de atendimento ao cliente em uma reunião"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Suporte Pré e Pós-venda
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Nosso compromisso vai além da entrega do produto. Acompanhamos você em
                cada etapa, desde a escolha da solução ideal para sua necessidade até o
                suporte contínuo após a compra, garantindo sua total satisfação.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Acreditamos em parcerias de longo prazo, oferecendo um atendimento
                ágil e dedicado para que você tenha a melhor experiência com a
                Ecofluid.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Consultoria Especializada</h4>
                <p className="text-sm text-slate-600">
                  Ajudamos você a escolher o produto certo.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <ClipboardCheck className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Acompanhamento de Pedidos</h4>
                <p className="text-sm text-slate-600">
                  Visibilidade e agilidade em sua compra.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Headphones className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Atendimento Pós-venda</h4>
                <p className="text-sm text-slate-600">
                  Estamos aqui para ajudar após a entrega.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <ThumbsUp className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Garantia de Satisfação</h4>
                <p className="text-sm text-slate-600">Seu sucesso é a nossa prioridade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}