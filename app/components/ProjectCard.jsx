import Image from 'next/image';

async function getProjects() {
  const res = await fetch('http://localhost:4000/projects', {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function ProjectCard() {
  const projects = await getProjects();

  return (
    <div className='grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-3 my-10'>
      {projects.map(project => (
        <div
          key={project.id}
          className='rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md'
        >
          <Image
            src={project.image}
            alt='project image'
            className='w-full max-h-44 rounded-lg'
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
                className='rounded-lg bg-gray-800 py-2 px-3.5 font-sans text-xs font-bold uppercase leading-none text-white'
              >
                <p className='mt-px'>{lang}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-between px-4 my-4'>
            <a
              href={project.repo}
              target='_blank'
              className='p-2 text-sm border-0 rounded-lg hover:bg-gray-400 hover:text-white'
            >
              Github repo
            </a>
            <a
              href={project.live}
              target='_blank'
              className='p-2 text-sm border-0 rounded-lg hover:bg-gray-400 hover:text-white'
            >
              Live link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
