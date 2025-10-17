import { Wrench, BookOpen, Users, Headphones } from 'lucide-react';

export default function Support() {
  return (
    <section id="suporte" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Suporte</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Suporte técnico"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Suporte Técnico</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                A Ecofluid oferece treinamento completo para ajudar distribuidores e usuários
                finais a instalar e otimizar nossos produtos de forma eficiente.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Após a conclusão de cada treinamento, você terá uma compreensão profunda dos
                principais recursos e benefícios, da técnica de instalação correta e das
                vantagens competitivas dos produtos Ecofluid.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <Wrench className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Instalação</h4>
                <p className="text-sm text-slate-600">Orientação técnica especializada</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <BookOpen className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Treinamento</h4>
                <p className="text-sm text-slate-600">Capacitação para sua equipe</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <Users className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Consultoria</h4>
                <p className="text-sm text-slate-600">Projetos personalizados</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <Headphones className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Atendimento</h4>
                <p className="text-sm text-slate-600">Suporte contínuo pós-venda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
