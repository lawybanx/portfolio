import Link from 'next/link';

export default function Navbar({ toggleMenu, isMenuOpen }) {
  return (
    <nav className='bg-zinc-950 top-0 z-[999] flex w-full flex-col items-start justify-between border-b border-neutral-700 px-3 py-4 backdrop-blur md:flex-row md:items-center md:px-10 fixed'>
      <div className='flex flex-col md:flex-row justify-between items-center container mx-auto px-4 h-full'>
        <div className='flex justify-between w-full md:w-auto'>
          <p className='text-white text-xl '>Awwal Bankole</p>

          <div
            id='menu'
            className='text-white cursor-pointer text-3xl md:hidden'
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className='h-8 w-8'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='h-8 w-8'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </div>
        </div>

        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col md:flex-row md:space-x-4 md:ml-auto mt-4 md:mt-0 text-sm tracking-widest'>
            <li>
              <Link href='#about'>
                <p className='block py-2 px-4 text-white hover:bg-stone-300 uppercase'>
                  About Me
                </p>
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                <p className='block py-2 px-4 text-white hover:bg-stone-300 uppercase'>
                  Contact
                </p>
              </Link>
            </li>
            <li>
              <Link href='#blog'>
                <p className='block py-2 px-4 text-white hover:bg-stone-300 uppercase'>
                  Blog
                </p>
              </Link>
            </li>
            <li>
              <Link href='#projects'>
                <p className='block py-2 px-4 text-white hover:bg-stone-300 uppercase'>
                  Projects
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
