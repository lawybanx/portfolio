import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  const Logo = `https://res.cloudinary.com/dbrukzcby/image/upload/v1653316920/cyborg_gruv_ef7esi.png`;

  return (
    <>
      <Header />
      <main className='mx-auto w-full max-w-4xl px-4 mt-16 '>
        <div className='text-gray-600 md:text-md text-lg leading-loose'>
          <h2 className='text-6xl py-6 ' id='about'>
            About me
          </h2>
          <p>
            <span className='text-3xl font-bold block mb-1'>
              Hello there! I&apos;m Awwal 👋🏽,
            </span>
            a budding frontend developer on an exciting journey of learning and
            growth. I have a solid foundation in technologies like React,
            Next.js, MongoDB, Node.js, Express.js, Python, and TypeScript. My
            coding journey is fueled by a genuine passion for creating
            user-friendly interfaces and exploring the vast world of web
            development. While I may be in the early stages of my career, my
            dedication to mastering new skills and tackling challenges head-on
            is unwavering. I&apos;m eager to contribute my energy and fresh
            perspectives to collaborative projects. Let&apos;s build and learn
            together!
          </p>
        </div>
      </main>
    </>
  );
}
