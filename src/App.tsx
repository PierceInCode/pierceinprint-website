import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Books from './components/sections/Books';
import About from './components/sections/About';
import Connect from './components/sections/Connect';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Books />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
