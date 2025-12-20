// src/data/catalogo.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url?: string;
  specifications: Record<string, string>;
}

/**
 * Catálogo baseado no "Relatório de Produtos" anexado.
 * Regra aplicada: remover itens de 50m para 1/2, 3/4 e 1" LEVE.
 */
export const CATALOGO_PRODUTOS: Product[] = [
  {
    id: "123",
    name: "Mangueira PO 100m 1 1/2 Média",
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "123",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1 1/2"',
      "Classe": "Média",
      "Preço": "370,00",
    },
  },
  {
    id: "121",
    name: "Mangueira PO 50m 1 1/2 Leve",
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "121",
      "Unidade": "UN",
      "Comprimento": "50m",
      "Diâmetro": '1 1/2"',
      "Classe": "Leve",
      "Preço": "157,50",
    },
  },
  {
    id: "120",
    name: "Mangueira PO 50m 1 1/4 Leve",
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "120",
      "Unidade": "UN",
      "Comprimento": "50m",
      "Diâmetro": '1 1/4"',
      "Classe": "Leve",
      "Preço": "107,50",
    },
  },
  {
    id: "117",
    name: 'Mangueira PO 100m 1" Pesada',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "117",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1"',
      "Classe": "Pesada",
      "Preço": "230,00",
    },
  },
  {
    id: "115",
    name: 'Mangueira PO 100m 3/4" Pesada',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "115",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '3/4"',
      "Classe": "Pesada",
      "Preço": "95,90",
    },
  },

  // REMOVIDOS (conforme pedido):
  // - MANG PO 50M 1" X LEVE
  // - MANG PO 50M 3/4 X LEVE
  // - MANG PO 50M 1/2 X LEVE

  {
    id: "106",
    name: 'Mangueira PO 50m 2" Leve',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "106",
      "Unidade": "UN",
      "Comprimento": "50m",
      "Diâmetro": '2"',
      "Classe": "Leve",
      "Preço": "270,00",
    },
  },
  {
    id: "108",
    name: 'Mangueira PO 100m 3/4" Média',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "108",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '3/4"',
      "Classe": "Média",
      "Preço": "87,00",
    },
  },
  {
    id: "107",
    name: 'Mangueira PO 100m 1/2" Média',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "107",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1/2"',
      "Classe": "Média",
      "Preço": "61,00",
    },
  },
  {
    id: "109",
    name: 'Mangueira PO 100m 1" Média',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "109",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1"',
      "Classe": "Média",
      "Preço": "160,00",
    },
  },
  {
    id: "104",
    name: 'Mangueira PO 100m 1 1/4" Leve',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "104",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1 1/4"',
      "Classe": "Leve",
      "Preço": "215,00",
    },
  },
  {
    id: "105",
    name: 'Mangueira PO 100m 1 1/2" Leve',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "105",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1 1/2"',
      "Classe": "Leve",
      "Preço": "315,00",
    },
  },
  {
    id: "103",
    name: 'Mangueira PO 100m 1" Leve',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "103",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1"',
      "Classe": "Leve",
      "Preço": "120,51",
    },
  },
  {
    id: "102",
    name: 'Mangueira PO 100m 3/4" Leve',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "102",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '3/4"',
      "Classe": "Leve",
      "Preço": "68,80",
    },
  },
  {
    id: "101",
    name: 'Mangueira PO 100m 1/2" Leve',
    description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
    category: "mangueiras",
    specifications: {
      "Código": "101",
      "Unidade": "UN",
      "Comprimento": "100m",
      "Diâmetro": '1/2"',
      "Classe": "Leve",
      "Preço": "42,64",
    },
  },
];
