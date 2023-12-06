import Image from 'next/image';

export default function Projects() {
  const img =
    'https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const projectDetails = [
    {
      image: img,
      title: 'chatter',
      descr: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      lang: ['Reactjs', 'ChakraUI', 'Typescript'],
      live: 'https://altschool-chatter.vercel.app/',
      demo: 'https://github.com/lawybanx/altschool-chatter',
    },
    {
      image: img,
      title: 'chatter',
      descr: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      lang: ['Reactjs', 'ChakraUI', 'Typescript'],
      live: 'https://altschool-chatter.vercel.app/',
      demo: 'https://github.com/lawybanx/altschool-chatter',
    },
    {
      image: img,
      title: 'chatter',
      descr: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      lang: ['Reactjs', 'ChakraUI', 'Typescript'],
      live: 'https://altschool-chatter.vercel.app/',
      demo: 'https://github.com/lawybanx/altschool-chatter',
    },
  ];

  return (
    <div
      className='text-gray-600 md:text-md text-lg leading-loose'
      id='projects'
    >
      <div className=' my-10'>
        <h2 className='md:text-6xl text-5xl'>Projects</h2>
        <p>Below are some of my projects</p>
      </div>
      {/* card grid section */}
      <div className='grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-3 my-10'>
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className='cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md'
          >
            <Image
              src={project.image}
              alt='project image'
              className='w-full rounded-lg'
              width={500}
              height={500}
              unoptimized
            />

            <p className='font-bold text-gray-500 my-4 px-4'>{project.title}</p>

            <p className='text-sm font-semibold text-gray-500 my-2 px-4'>
              {project.descr}
            </p>

            <div className='flex flex-wrap gap-2 px-4 my-4'>
              {project.lang.map((lang, index) => (
                <div
                  key={index}
                  className='center relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-800 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white'
                >
                  <p className='mt-px'>{lang}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// Image
// Title
// Description
// Languages
// Live and Demo Links
