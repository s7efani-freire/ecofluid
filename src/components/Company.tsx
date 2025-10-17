import { Factory, Award, Users, TrendingUp } from 'lucide-react';

export default function Company() {
  return (
    <section id="empresa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">A Ecofluid</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://casairriga.com.br/wp-content/uploads/2021/02/mangueira-de-polietileno-irrigacao-3-4-01-600x600.jpg"
              alt="Fábrica Ecofluid"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Nossa História</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              A Ecofluid nasceu da visão de unir sustentabilidade e tecnologia, transformando
              materiais reciclados em produtos de alta qualidade para o agronegócio e indústria.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Especializados na produção de PEAD reciclado e mangueiras de irrigação,
              contribuímos para um futuro mais verde, reduzindo o impacto ambiental e
              oferecendo soluções eficientes para nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">2+</div>
                <div className="text-slate-600">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-slate-600">Toneladas Recicladas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors">
            <Factory className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Tecnologia</h4>
            <p className="text-slate-600">Equipamentos modernos e processos otimizados</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Qualidade</h4>
            <p className="text-slate-600">Certificações e controle rigoroso de qualidade</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Equipe</h4>
            <p className="text-slate-600">Profissionais especializados e comprometidos</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Crescimento</h4>
            <p className="text-slate-600">Expansão contínua e inovação constante</p>
          </div>
        </div>
      </div>
    </section>
  );
}
