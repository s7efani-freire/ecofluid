// src/components/admin/AdminPanel.tsx
import { useEffect, useState } from "react";
import {
  LogOut,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
  Loader2,
  Package,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Droplets,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";
import type { Product } from "../../data/catalogo";

// ─── Categorias disponíveis ───────────────────────────────────────────────────
const CATEGORIES = ["mangueiras", "PEAD", "PEBD", "acessórios", "outros"];

// ─── Produto em edição (formulário) ─────────────────────────────────────────
interface ProductForm {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url: string;
  active: boolean;
  specifications: { key: string; value: string }[];
}

const emptyForm = (): ProductForm => ({
  id: "",
  name: "",
  description: "Mangueira de polietileno (PO) para irrigação/transporte de fluidos.",
  category: "mangueiras",
  image_url: "",
  active: true,
  specifications: [
    { key: "Código", value: "" },
    { key: "Unidade", value: "UN" },
    { key: "Comprimento", value: "" },
    { key: "Diâmetro", value: "" },
    { key: "Classe", value: "" },
    { key: "Preço", value: "" },
  ],
});

function productToForm(p: Product): ProductForm {
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
    image_url: p.image_url ?? "",
    active: p.active ?? true,
    specifications: Object.entries(p.specifications).map(([key, value]) => ({
      key,
      value,
    })),
  };
}

function formToRow(f: ProductForm) {
  const specs: Record<string, string> = {};
  f.specifications.forEach(({ key, value }) => {
    if (key.trim()) specs[key.trim()] = value;
  });
  return {
    id: f.id.trim(),
    name: f.name.trim(),
    description: f.description.trim(),
    category: f.category,
    image_url: f.image_url.trim() || null,
    active: f.active,
    specifications: specs,
  };
}

// ─── Modal de formulário ──────────────────────────────────────────────────────
function ProductModal({
  initial,
  onClose,
  onSaved,
}: {
  initial: ProductForm | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isNew = !initial;
  const [form, setForm] = useState<ProductForm>(initial ?? emptyForm());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: keyof ProductForm, value: any) =>
    setForm((f) => ({ ...f, [field]: value }));

  const setSpec = (idx: number, field: "key" | "value", value: string) =>
    setForm((f) => {
      const specs = [...f.specifications];
      specs[idx] = { ...specs[idx], [field]: value };
      return { ...f, specifications: specs };
    });

  const addSpec = () =>
    setForm((f) => ({
      ...f,
      specifications: [...f.specifications, { key: "", value: "" }],
    }));

  const removeSpec = (idx: number) =>
    setForm((f) => ({
      ...f,
      specifications: f.specifications.filter((_, i) => i !== idx),
    }));

  const handleSave = async () => {
    if (!form.id || !form.name) {
      setError("Código e nome são obrigatórios.");
      return;
    }
    setSaving(true);
    setError(null);
    const row = formToRow(form);

    const { error: sbError } = isNew
      ? await supabase.from("products").insert(row)
      : await supabase.from("products").update(row).eq("id", row.id);

    if (sbError) {
      setError(sbError.message);
      setSaving(false);
      return;
    }
    onSaved();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-eco-100">
          <h2 className="text-lg font-bold text-eco-900">
            {isNew ? "Novo Produto" : "Editar Produto"}
          </h2>
          <button
            onClick={onClose}
            className="text-eco-400 hover:text-eco-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
          {/* ID + Categoria */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-eco-700 mb-1">
                Código *
              </label>
              <input
                value={form.id}
                onChange={(e) => set("id", e.target.value)}
                disabled={!isNew}
                placeholder="ex: 101"
                className="w-full px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 disabled:bg-eco-50 disabled:text-eco-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-eco-700 mb-1">
                Categoria *
              </label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 bg-white"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-eco-700 mb-1">
              Nome *
            </label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="ex: Mangueira PO 100m 1/2 Leve"
              className="w-full px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-eco-700 mb-1">
              Descrição
            </label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 resize-none"
            />
          </div>

          {/* URL da imagem */}
          <div>
            <label className="block text-sm font-medium text-eco-700 mb-1">
              URL da Imagem
            </label>
            <input
              value={form.image_url}
              onChange={(e) => set("image_url", e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900"
            />
          </div>

          {/* Ativo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("active", !form.active)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                form.active ? "bg-eco-500" : "bg-eco-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  form.active ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm font-medium text-eco-700">
              {form.active ? "Visível no catálogo" : "Oculto no catálogo"}
            </span>
          </div>

          {/* Especificações */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-eco-700">
                Especificações
              </label>
              <button
                type="button"
                onClick={addSpec}
                className="flex items-center gap-1 text-xs text-eco-600 hover:text-eco-800 font-medium transition"
              >
                <Plus className="w-3.5 h-3.5" />
                Adicionar
              </button>
            </div>
            <div className="space-y-2">
              {form.specifications.map((spec, idx) => (
                <div key={idx} className="flex gap-2">
                  <input
                    value={spec.key}
                    onChange={(e) => setSpec(idx, "key", e.target.value)}
                    placeholder="Chave"
                    className="w-2/5 px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 text-sm"
                  />
                  <input
                    value={spec.value}
                    onChange={(e) => setSpec(idx, "value", e.target.value)}
                    placeholder="Valor"
                    className="flex-1 px-3 py-2 rounded-lg border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpec(idx)}
                    className="text-red-400 hover:text-red-600 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-eco-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-eco-200 text-eco-700 hover:bg-eco-50 font-medium transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-600 hover:to-eco-700 text-white font-semibold rounded-xl shadow transition disabled:opacity-60"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Check className="w-4 h-4" />
            )}
            {saving ? "Salvando…" : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Painel principal ─────────────────────────────────────────────────────────
export default function AdminPanel() {
  const { user, signOut } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalData, setModalData] = useState<{
    open: boolean;
    form: ProductForm | null;
  }>({ open: false, form: null });
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterActive, setFilterActive] = useState<"all" | "active" | "inactive">("all");
  const [sortField, setSortField] = useState<"id" | "name" | "category">("id");
  const [sortAsc, setSortAsc] = useState(true);
  const [search, setSearch] = useState("");

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    const { data, error: sbErr } = await supabase
      .from("products")
      .select("*")
      .order("id");
    if (sbErr) setError(sbErr.message);
    else setProducts(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm(`Excluir produto #${id}? Esta ação não pode ser desfeita.`))
      return;
    setDeletingId(id);
    await supabase.from("products").delete().eq("id", id);
    await fetchAll();
    setDeletingId(null);
  };

  const toggleActive = async (p: Product) => {
    await supabase
      .from("products")
      .update({ active: !p.active })
      .eq("id", p.id);
    await fetchAll();
  };

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) setSortAsc((v) => !v);
    else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const SortIcon = ({ field }: { field: typeof sortField }) =>
    sortField === field ? (
      sortAsc ? (
        <ChevronUp className="w-3.5 h-3.5 inline ml-1" />
      ) : (
        <ChevronDown className="w-3.5 h-3.5 inline ml-1" />
      )
    ) : null;

  const displayed = products
    .filter((p) => {
      if (filterCategory !== "all" && p.category !== filterCategory)
        return false;
      if (filterActive === "active" && !p.active) return false;
      if (filterActive === "inactive" && p.active) return false;
      if (
        search &&
        !p.name.toLowerCase().includes(search.toLowerCase()) &&
        !p.id.includes(search)
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      const va = a[sortField] ?? "";
      const vb = b[sortField] ?? "";
      return sortAsc
        ? String(va).localeCompare(String(vb))
        : String(vb).localeCompare(String(va));
    });

  return (
    <div className="min-h-screen bg-eco-50">
      {/* Topbar */}
      <header className="bg-white border-b border-eco-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-eco-500 to-eco-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-eco-900 leading-tight">Ecofluid</p>
              <p className="text-xs text-eco-500 leading-tight">Painel Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-eco-600 hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={signOut}
              className="flex items-center gap-2 text-sm text-eco-600 hover:text-eco-900 font-medium transition"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: products.length, color: "text-eco-700" },
            {
              label: "Ativos",
              value: products.filter((p) => p.active).length,
              color: "text-green-600",
            },
            {
              label: "Ocultos",
              value: products.filter((p) => !p.active).length,
              color: "text-amber-600",
            },
            {
              label: "Categorias",
              value: new Set(products.map((p) => p.category)).size,
              color: "text-blue-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm p-4 border border-eco-100"
            >
              <p className="text-xs text-eco-500 font-medium">{stat.label}</p>
              <p className={`text-3xl font-bold mt-1 ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por código ou nome…"
            className="flex-1 px-4 py-2.5 rounded-xl border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 bg-white shadow-sm"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 bg-white shadow-sm"
          >
            <option value="all">Todas as categorias</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={filterActive}
            onChange={(e) =>
              setFilterActive(e.target.value as typeof filterActive)
            }
            className="px-4 py-2.5 rounded-xl border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 text-eco-900 bg-white shadow-sm"
          >
            <option value="all">Todos os status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Ocultos</option>
          </select>
          <button
            onClick={() => setModalData({ open: true, form: null })}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-600 hover:to-eco-700 text-white font-semibold rounded-xl shadow transition whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Novo Produto
          </button>
        </div>

        {/* Tabela */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-eco-500 animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl">
            {error}
          </div>
        ) : displayed.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-eco-100 shadow-sm">
            <Package className="w-12 h-12 text-eco-300 mx-auto mb-3" />
            <p className="text-eco-500">Nenhum produto encontrado.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-eco-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-eco-50 border-b border-eco-100">
                    {(
                      [
                        { label: "Código", field: "id" },
                        { label: "Nome", field: "name" },
                        { label: "Categoria", field: "category" },
                      ] as const
                    ).map(({ label, field }) => (
                      <th
                        key={field}
                        onClick={() => toggleSort(field)}
                        className="px-4 py-3 text-left font-semibold text-eco-700 cursor-pointer hover:text-eco-900 select-none whitespace-nowrap"
                      >
                        {label}
                        <SortIcon field={field} />
                      </th>
                    ))}
                    <th className="px-4 py-3 text-left font-semibold text-eco-700">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-eco-700">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-eco-50">
                  {displayed.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-eco-50/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono text-eco-600">
                        #{p.id}
                      </td>
                      <td className="px-4 py-3 text-eco-900 font-medium max-w-xs truncate">
                        {p.name}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2.5 py-0.5 bg-eco-100 text-eco-700 rounded-full text-xs font-medium">
                          {p.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleActive(p)}
                          className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition ${
                            p.active
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                          }`}
                        >
                          {p.active ? (
                            <Eye className="w-3.5 h-3.5" />
                          ) : (
                            <EyeOff className="w-3.5 h-3.5" />
                          )}
                          {p.active ? "Ativo" : "Oculto"}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              setModalData({
                                open: true,
                                form: productToForm(p),
                              })
                            }
                            className="p-1.5 rounded-lg text-eco-500 hover:text-eco-700 hover:bg-eco-100 transition"
                            title="Editar"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            disabled={deletingId === p.id}
                            className="p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition disabled:opacity-40"
                            title="Excluir"
                          >
                            {deletingId === p.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t border-eco-100 text-xs text-eco-400">
              {displayed.length} produto{displayed.length !== 1 ? "s" : ""}{" "}
              exibido{displayed.length !== 1 ? "s" : ""}
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {modalData.open && (
        <ProductModal
          initial={modalData.form}
          onClose={() => setModalData({ open: false, form: null })}
          onSaved={fetchAll}
        />
      )}
    </div>
  );
}
