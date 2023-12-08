import Link from 'next/link';

export default function Header() {
  return (
    <section className='mt-10 h-screen'>
      <div
        className='w-full bg-center bg-cover h-full'
        style={{
          backgroundImage: `url(
              https://res.cloudinary.com/dbrukzcby/image/upload/v1653316920/cyborg_gruv_ef7esi.png
            )`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-black to-rgba(0, 0, 0, 0.7777485994397759) bg-opacity-50 py-12'>
          <div className='text-center'>
            <div className='container px-4 mx-auto'>
              <div className='max-w-4xl mx-auto text-left'>
                <h2 className='mt-8 mb-6 text-6xl text-gray-100'>
                  Hi, I&apos;m Awwal Bankole
                </h2>
                <p className='max-w-3xl mx-auto mb-10 text-xl text-white'>
                  Passionate Frontend Engineer specializing in React and
                  Next.js, dedicated to crafting visually stunning and
                  user-centric web experiences.
                </p>
                <Link
                  className='inline-block md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-zinc-950 text-gray-100 rounded hover:bg-zinc-800 hover:bg-opacity-50 transition duration-200'
                  href='#about'
                >
                  About me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
