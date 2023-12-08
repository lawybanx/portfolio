import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mx-auto w-full max-w-4xl px-4 mt-16'>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
