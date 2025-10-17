/*
  # Create products table for Ecofluid catalog

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `category` (text) - Product category (mangueiras, tubos, acessórios)
      - `specifications` (jsonb) - Technical specifications
      - `image_url` (text) - Product image URL
      - `price` (numeric) - Product price (optional)
      - `in_stock` (boolean) - Availability status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (catalog is public)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  specifications jsonb DEFAULT '{}'::jsonb,
  image_url text,
  price numeric(10,2),
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample products
INSERT INTO products (name, description, category, specifications, in_stock) VALUES
('Mangueira de Irrigação PEAD 16mm', 'Mangueira de irrigação em PEAD reciclado, resistente e durável para sistemas de irrigação agrícola', 'mangueiras', '{"diametro": "16mm", "pressao": "4 bar", "material": "PEAD reciclado"}', true),
('Mangueira de Irrigação PEAD 20mm', 'Mangueira de irrigação em PEAD reciclado, ideal para grandes áreas de irrigação', 'mangueiras', '{"diametro": "20mm", "pressao": "4 bar", "material": "PEAD reciclado"}', true),
('Mangueira de Irrigação PEAD 25mm', 'Mangueira de irrigação em PEAD reciclado, alta capacidade de vazão', 'mangueiras', '{"diametro": "25mm", "pressao": "4 bar", "material": "PEAD reciclado"}', true),
('Tubo PEAD 32mm', 'Tubo de polietileno de alta densidade para condução de água', 'tubos', '{"diametro": "32mm", "pressao": "6 bar", "material": "PEAD reciclado"}', true),
('Tubo PEAD 50mm', 'Tubo de polietileno de alta densidade para aplicações industriais', 'tubos', '{"diametro": "50mm", "pressao": "6 bar", "material": "PEAD reciclado"}', true),
('Tubo PEAD 75mm', 'Tubo de polietileno de alta densidade para grandes vazões', 'tubos', '{"diametro": "75mm", "pressao": "8 bar", "material": "PEAD reciclado"}', true);
