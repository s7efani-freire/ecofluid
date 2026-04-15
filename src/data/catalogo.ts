// src/data/catalogo.ts
// Os dados agora vêm do Supabase (via ProductsContext).
// Este arquivo mantém apenas a interface compartilhada.

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url?: string | null;
  active?: boolean;
  specifications: Record<string, string>;
}
