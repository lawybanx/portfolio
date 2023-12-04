import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <>
      <div className='text-gray-600 md:text-md text-lg leading-loose'>
        <h2 className='md:text-6xl text-5xl pb-6 ' id='about'>
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

        <Link
          className='inline-block md:w-auto my-6 md:mr-6 py-3 px-10 text-sm font-bold uppercase border-2 border-transparent bg-zinc-950 text-gray-100 rounded hover:bg-zinc-800 hover:bg-opacity-50 transition duration-200'
          href=''
        >
          Download cv
        </Link>
      </div>
    </>
  );
}
