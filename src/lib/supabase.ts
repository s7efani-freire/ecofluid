// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY não configuradas."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Tipos espelhando a tabela do banco ──────────────────────────────────────
export interface ProductRow {
  id: string;
  name: string;
  description: string;
  category: string;
  specifications: Record<string, string>;
  image_url: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
}
