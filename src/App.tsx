import { AuthProvider } from './contexts/AuthContext';
import { ProductsProvider } from './contexts/ProductsContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Header from './components/Header';
import Hero from './components/Hero';
import Company from './components/Company';
import Mission from './components/Mission'; // Importe o novo componente
import Products from './components/Products';
import Support from './components/Support';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Router() {
  const isAdmin = window.location.pathname.startsWith('/admin');

  if (isAdmin) {
    return <ProtectedRoute />;
  }

  return (
    <ProductsProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 sm:pt-24">
          <Hero />
          <Company />
          <Mission /> 
          <Products />
          <Support />
          <Location />
          <Contact />
          <Footer />
        </main>
      </div>
    </ProductsProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;