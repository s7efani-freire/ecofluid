import { Clock, MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-white to-eco-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-800 mb-4">
            Nossa Localização
          </h2>
          <div className="flex items-center justify-center gap-2 text-eco-700 text-lg">
            <MapPin className="h-6 w-6" />
            <p>
              Pé de Galinha, 116 - Zona Rural 9, Vitória da Conquista - BA,
              45020-377
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-eco-200">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8623456789!2d-40.8390!3d-14.8615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUxJzQxLjQiUyA0MMKwNTAnMjAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ecofluid"
            ></iframe>
          </div>

          <div className="bg-gradient-to-r from-eco-600 to-eco-700 text-white p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Endereço</h3>
                    <p className="text-eco-100">
                      Pé de Galinha, 116
                      <br />
                      Zona Rural 9
                      <br />
                      Vitória da Conquista - BA
                      <br />
                      45020-377
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-eco-100">
                      Segunda a Sexta
                      <br />
                      8h às 12h e 13h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Navigation className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-3">Como Chegar</h3>
                    <a
                      href="https://www.google.com/maps/dir//Ecofluid+plásticos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-white text-eco-700 rounded-lg font-semibold hover:bg-eco-50 transition-all shadow-md hover:shadow-lg"
                    >
                      Abrir no Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
