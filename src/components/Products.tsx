import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Package, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  specifications: Record<string, string>;
  image_url?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('category', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'mangueiras', 'PEAD', 'PEBD'];
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <section id="produtos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nossos Produtos</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Catálogo completo de tubos PEAD, PEAD e PEBD reciclados para irrigação e condução de fluidos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="w-6 h-6 text-slate-600 self-center" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-green-50'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
            <p className="mt-4 text-slate-600">Carregando produtos...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Package className="w-20 h-20 text-white" />
                  )}
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                    {product.category}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="border-t border-slate-200 pt-4 space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                      Especificações
                    </h4>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-slate-600 capitalize">{key}:</span>
                        <span className="font-semibold text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href="#contato"
                      className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-xl text-slate-600">Nenhum produto encontrado nesta categoria</p>
          </div>
        )}
      </div>
    </section>
  );
}
