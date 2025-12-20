import { useMemo, useState } from "react";
import { Filter, Package } from "lucide-react";
import { useProducts } from "../contexts/ProductsContext";
import type { Product } from "../data/catalogo";

export default function Products() {
  const { products } = useProducts();

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter(
      (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, products]);

  const filterProducts = (category: string) => {
    setActiveFilter(category);
  };

  const filters = [
    { id: "all", label: "Todos" },
    { id: "mangueiras", label: "Mangueiras" },
    { id: "PEAD", label: "PEAD" },
    { id: "PEBD", label: "PEBD" },
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-white to-eco-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-eco-800 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-eco-700 max-w-3xl mx-auto">
            Tubos de plástico reciclado (PEAD e PEBD) para irrigação e
            transporte de fluidos.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-eco-700">
            <Filter className="h-5 w-5" />
            <span className="font-semibold">Filtrar:</span>
          </div>

          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => filterProducts(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-eco-500 to-eco-600 text-white"
                  : "bg-white text-eco-700 hover:bg-eco-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <Package className="h-16 w-16 text-eco-400 mx-auto mb-4" />
            <p className="text-eco-600 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group transform hover:-translate-y-2 border-t-4 border-eco-500"
              >
                <div className="h-48 bg-gradient-to-br from-eco-100 to-eco-200 flex items-center justify-center overflow-hidden">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <Package className="h-20 w-20 text-eco-500" />
                  )}
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-eco-100 text-eco-700 rounded-full text-sm font-semibold mb-3">
                    {product.category}
                  </div>

                  <h3 className="text-xl font-bold text-eco-800 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-eco-700 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {product.specifications &&
                    Object.keys(product.specifications).length > 0 && (
                      <div className="bg-eco-50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-eco-800 mb-2 text-sm">
                          Especificações:
                        </h4>
                        <div className="space-y-1 text-sm">
                          {Object.entries(product.specifications).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between text-eco-700"
                              >
                                <span className="font-medium">{key}:</span>
                                <span>{value}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  <a
                    href="#contato"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-lg font-semibold hover:from-eco-600 hover:to-eco-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
