// src/components/admin/Login.tsx
import { useState } from "react";
import { LogIn, Eye, EyeOff, Loader2, Droplets } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const err = await signIn(email, password);
    if (err) setError("E-mail ou senha inválidos.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-900 via-eco-800 to-eco-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Cabeçalho */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur rounded-2xl mb-4">
            <Droplets className="w-8 h-8 text-eco-300" />
          </div>
          <h1 className="text-3xl font-bold text-white">Ecofluid</h1>
          <p className="text-eco-300 mt-1 text-sm">Painel Administrativo</p>
        </div>

        {/* Card de login */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-xl font-semibold text-eco-900 mb-6">
            Entrar na sua conta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium text-eco-700 mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@ecofluid.com.br"
                className="w-full px-4 py-3 rounded-xl border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 focus:border-transparent text-eco-900 placeholder-eco-300 transition"
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-medium text-eco-700 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-eco-200 focus:outline-none focus:ring-2 focus:ring-eco-500 focus:border-transparent text-eco-900 placeholder-eco-300 transition pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-eco-400 hover:text-eco-600 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Erro */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-eco-500 to-eco-600 hover:from-eco-600 hover:to-eco-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              {loading ? "Entrando…" : "Entrar"}
            </button>
          </form>
        </div>

        <p className="text-center text-eco-400 text-xs mt-6">
          Acesso restrito a administradores
        </p>
      </div>
    </div>
  );
}
