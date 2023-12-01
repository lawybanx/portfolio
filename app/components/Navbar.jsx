import Link from 'next/link';

export default function Navbar({ toggleMenu, isMenuOpen }) {
  return (
    <nav className='w-full bg-zinc-950 p-6 sticky top-0 z-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center container mx-auto px-4 h-full'>
        <div className='flex justify-between items-center w-full'>
          <p className='text-white text-2xl '>Awwal Bankole</p>

          <div
            id='menu'
            className='text-white cursor-pointer text-3xl md:hidden'
            onClick={toggleMenu}
          >
            &#9776;
          </div>
        </div>

        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:space-x-4 md:ml-auto mt-4 md:mt-0`}
        >
          <li>
            <Link href='#about'>
              <p className='py-1 uppercase text-white hover:bg-stone-300 px-6 py-1;'>
                About me
              </p>
            </Link>
          </li>
          <li>
            <Link href='#contact'>
              <p className='py-1 uppercase text-white hover:bg-stone-300 px-6 py-1;'>
                Contact
              </p>
            </Link>
          </li>
          <li>
            <Link href='#blog'>
              <p className='py-1 uppercase text-white hover:bg-stone-300 px-6 py-1;'>
                Blog
              </p>
            </Link>
          </li>
          <li>
            <Link href='#projects'>
              <p className='py-1 uppercase text-white hover:bg-stone-300 px-6 py-1;'>
                Projects
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
