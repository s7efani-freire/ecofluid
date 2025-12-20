import Header from './components/Header';
import Hero from './components/Hero';
import Company from './components/Company';
import Products from './components/Products';
import Support from './components/Support';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ProductsProvider } from './contexts/ProductsContext';

function App() {
  return (
    <ProductsProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 sm:pt-24">
        <Hero />
        <Company />
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

export default App;
