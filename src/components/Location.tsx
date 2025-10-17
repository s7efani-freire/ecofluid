import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Localização</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-green-600" />
            Pé de Galinha, 116 - Zona Rural 9, Vitória da Conquista - BA, 45020-377
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.7629464771144!2d-40.89829322488718!3d-14.943374085584603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x74623000f5902db%3A0x106681fd90359d2f!2z4pm777iPIEVjb2ZsdWlkIHBsw6FzdGljb3MgKFR1Ym9zIFZleCk!5e1!3m2!1spt-BR!2sbr!4v1760703390779!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2 text-green-400">Endereço</h3>
                <p className="text-slate-300">Pé de Galinha, 116</p>
                <p className="text-slate-300">Zona Rural 9</p>
                <p className="text-slate-300">Vitória da Conquista - BA</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-green-400">Horário de Funcionamento</h3>
                <p className="text-slate-300">Segunda a Sexta</p>
                <p className="text-slate-300">8h às 12h e 13h às 18h</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-green-400">Como Chegar</h3>
                <a
                  href="https://maps.app.goo.gl/gvDwxVQL4StgGvfu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all mt-2"
                >
                  <Navigation className="w-5 h-5" />
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
