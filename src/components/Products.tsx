import { useMemo, useState } from "react";
import { Filter, Package, Loader2, AlertCircle, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useProducts } from "../contexts/ProductsContext";
import type { Product } from "../data/catalogo";

const filters = [
  { id: "all", label: "Todos" },
  { id: "mangueiras", label: "Mangueiras" },
  { id: "PEAD", label: "PEAD" },
  { id: "PEBD", label: "PEBD" },
];

export default function Products() {
  const { products, loading, error } = useProducts();
  const [activeFilter, setActiveFilter] = useState("all");
  // Novo estado para controlar se mostra todos ou só os 3 primeiros
  const [showAll, setShowAll] = useState(false);

  // Função para trocar o filtro e resetar a visualização para 3 itens
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false);
  };

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter(
      (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, products]);

  // Derivamos a lista de produtos que será efetivamente exibida na tela
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 3);

  return (
    <section id="produtos" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Catálogo de <span className="text-eco-600">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tubos de plástico reciclado (PEAD e PEBD) de alta resistência para irrigação e transporte de fluidos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-gray-500 mr-2">
            <Filter className="h-5 w-5" />
            <span className="font-semibold uppercase tracking-wider text-sm">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-eco-600 text-white shadow-md shadow-eco-600/20 border border-eco-600"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-eco-500 hover:text-eco-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-eco-500 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Carregando catálogo...</p>
          </div>
        )}

        {/* Erro */}
        {!loading && error && (
          <div className="flex items-center gap-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg px-6 py-5 max-w-2xl mx-auto shadow-sm">
            <AlertCircle className="h-6 w-6 flex-shrink-0" />
            <p className="font-medium">Não foi possível carregar os produtos no momento. Por favor, tente novamente mais tarde.</p>
          </div>
        )}

        {/* Vazio */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-medium">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}

        {/* Grid de produtos */}
        {!loading && !error && displayedProducts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
              >
                {/* Imagem do Produto */}
                <div className="h-56 bg-gray-50 flex items-center justify-center overflow-hidden relative border-b border-gray-100">
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-eco-700 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.category}
                  </div>
                  
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Package className="h-20 w-20 text-gray-300" />
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-eco-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex-grow"></div>

                  {/* Especificações (Ficha Técnica) */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div className="bg-gray-50/80 rounded-xl p-5 mb-6 border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider border-b border-gray-200 pb-2">
                        Especificações Técnicas
                      </h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200/50 last:border-0">
                            <span className="font-semibold text-gray-600">{key}</span>
                            <span className="text-gray-900 font-medium">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botão de Ação */}
                  <a
                    href="#contato"
                    className="flex items-center justify-center w-full px-4 py-3.5 bg-eco-600 text-white rounded-xl font-bold hover:bg-eco-700 transition-colors shadow-md hover:shadow-lg mt-auto group/btn"
                  >
                    Solicitar Orçamento
                    <ChevronRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Botão Ver Mais / Ver Menos */}
        {!loading && !error && filteredProducts.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-8 py-3.5 bg-white text-eco-600 border-2 border-eco-600 rounded-xl font-bold hover:bg-eco-50 transition-colors shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  Ver menos produtos
                  <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Ver todos os produtos ({filteredProducts.length})
                  <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}