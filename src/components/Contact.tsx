import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    'Produtos 100% sustentáveis',
    'Qualidade garantida',
    'Suporte especializado',
    'Entrega regional',
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-eco-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto">
            Estamos prontos para atender você. Envie sua mensagem ou utilize
            nossos canais de contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-eco-500">
            <h3 className="text-2xl font-bold text-eco-800 mb-6">
              Envie uma Mensagem
            </h3>

            {showSuccess && (
              <div className="mb-6 p-4 bg-eco-100 border-l-4 border-eco-500 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-eco-600" />
                <p className="text-eco-800 font-medium">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-eco-800 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-eco-200 rounded-lg focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-colors text-eco-800"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-eco-800 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-eco-200 rounded-lg focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-colors text-eco-800"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-eco-800 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-eco-200 rounded-lg focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-colors text-eco-800"
                  placeholder="(77) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-eco-800 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-eco-200 rounded-lg focus:border-eco-500 focus:ring-2 focus:ring-eco-200 transition-colors resize-none text-eco-800"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-lg font-semibold hover:from-eco-600 hover:to-eco-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-eco-600 to-eco-700 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-eco-100 mb-1">Endereço</p>
                    <p className="text-eco-50">
                      Pé de Galinha, 116
                      <br />
                      Zona Rural 9
                      <br />
                      Vitória da Conquista - BA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-eco-100 mb-1">E-mail</p>
                    <a
                      href="mailto:contato@ecofluid.com.br"
                      className="text-eco-50 hover:text-white transition-colors"
                    >
                      contato@ecofluid.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-eco-100 mb-1">Telefone</p>
                    <a
                      href="tel:+557730251551"
                      className="text-eco-50 hover:text-white transition-colors"
                    >
                      (77) 3025-1551
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-eco-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-eco-100 mb-1">Horário</p>
                    <p className="text-eco-50">
                      Segunda a Sexta
                      <br />
                      das 8h às 11h30 e das 13h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-eco-500">
              <h4 className="text-xl font-bold text-eco-800 mb-4">
                Por que escolher a Ecofluid?
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-eco-700"
                  >
                    <CheckCircle className="h-5 w-5 text-eco-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
