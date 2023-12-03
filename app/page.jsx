import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mx-auto w-full max-w-4xl px-4 mt-16'>
        <h1>Hello World</h1>
      </main>
    </>
  );
}
