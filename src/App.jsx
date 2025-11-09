import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-24">
        <Hero3D />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
