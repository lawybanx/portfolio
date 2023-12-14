import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div
      className='text-gray-600 md:text-md text-lg leading-loose'
      id='projects'
    >
      <div className=' my-10'>
        <h2 className='md:text-6xl text-5xl'>Projects</h2>
        <p>
          Below are some of the projects I&apos;ve worked on. View the rest on
          my{' '}
          <a
            href='https://github.com/lawybanx?tab=repositories'
            target='_blank'
            className='cursor-pointer text-cyan-400 hover:underline'
          >
            Github repo.
          </a>
        </p>
      </div>
      {/* Project Card Component */}
      <ProjectCard />
    </div>
  );
}
