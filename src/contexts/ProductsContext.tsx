// src/contexts/ProductsContext.tsx

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "../data/catalogo";
import { CATALOGO_PRODUTOS } from "../data/catalogo";

type ProductsContextValue = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(CATALOGO_PRODUTOS);

  const value = useMemo(() => ({ products, setProducts }), [products]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) {
    throw new Error("useProducts deve ser usado dentro de <ProductsProvider />");
  }
  return ctx;
}
