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
            Estrada Industrial, 777 - Zona Industrial - RS
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-video w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4086815879943!2d-51.2067!3d-30.0346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzA0LjYiUyA1McKwMTInMjQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
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
                <p className="text-slate-300">Estrada Industrial, 777</p>
                <p className="text-slate-300">Zona Industrial</p>
                <p className="text-slate-300">Rio Grande do Sul - RS</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-green-400">Horário de Funcionamento</h3>
                <p className="text-slate-300">Segunda a Sexta</p>
                <p className="text-slate-300">8h às 12h e 13h às 18h</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-green-400">Como Chegar</h3>
                <a
                  href="https://maps.google.com/?q=-30.0346,-51.2067"
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
