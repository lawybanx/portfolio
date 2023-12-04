import Image from 'next/image';
import About from './components/About';
import Header from './components/Header';

export default function Home() {
  const Logo = `https://res.cloudinary.com/dbrukzcby/image/upload/v1653316920/cyborg_gruv_ef7esi.png`;

  return (
    <>
      <Header />
      <main className='mx-auto w-full max-w-4xl px-4 mt-16'>
        <About />
      </main>
    </>
  );
}
