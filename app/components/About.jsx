import Image from 'next/image';

export default function About() {
  const technologies = [
    'html5',
    'css3',
    'javascript',
    'react',
    'redux',
    'tailwindcss',
    'nextdotjs',
    'typescript',
    'nodedotjs',
    'mongodb',
    'express',
    'python',
    'firebase',
    'chakraui',
    'git',
    'github',
  ];

  return (
    <>
      <div className='text-gray-600 md:text-md text-lg leading-loose'>
        <h2 className='md:text-6xl text-5xl pb-6' id='about'>
          About me
        </h2>
        <p>
          <span className='text-3xl  block mb-1'>
            Hello there! I&apos;m Awwal 👋🏽,
          </span>
          a budding frontend developer on an exciting journey of learning and
          growth. I have a solid foundation in technologies like React, Next.js,
          MongoDB, Node.js, Express.js, Python, and TypeScript. My coding
          journey is fueled by a genuine passion for creating user-friendly
          interfaces and exploring the vast world of web development. While I
          may be in the early stages of my career, my dedication to mastering
          new skills and tackling challenges head-on is unwavering. I&apos;m
          eager to contribute my energy and fresh perspectives to collaborative
          projects. Let&apos;s build and learn together!
        </p>

        <a
          className='inline-block md:w-auto my-6 md:mr-6 py-3 px-10 text-sm font-bold uppercase border-2 border-transparent bg-zinc-950 text-gray-100 rounded hover:bg-zinc-800 hover:bg-opacity-50 transition duration-200'
          href='/awwal_bankole.pdf'
          download='awwal_bankole'
        >
          Download cv
        </a>

        {/* Technologies section */}

        <div className='container mx-auto py-10'>
          <h2 className='text-3xl pb-6 text-center'>
            Technologies I Work With
          </h2>
          <div className='flex flex-wrap justify-center'>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className='text-center mx-4 my-4 transition-transform transform hover:scale-125 cursor-pointer group relative'
              >
                <Image
                  src={`https://cdn.simpleicons.org/${tech}`}
                  alt={`${tech} Logo`}
                  width={96}
                  height={96}
                  className='md:w-24 w-20'
                  unoptimized
                />
                <span className='absolute top-20 scale-0 transition-all rounded bg-gray-800 p-1 text-xs text-white group-hover:scale-100'>
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
