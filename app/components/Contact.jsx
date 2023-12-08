import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className='max-w-4xl mx-auto w-full p-8' id='contact'>
      <div class='container'>
        <div class='flex flex-wrap lg:justify-between -mx-4'>
          <div class='w-full lg:w-1/2 xl:w-6/12 px-4'>
            <div class='max-w-[570px] mb-12 lg:mb-0'>
              <span class='block text-xl mb-4 text-primary font-semibold'>
                Contact Me
              </span>
              <h2 class='text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
                GET IN TOUCH WITH ME
              </h2>
              <p class='text-base text-body-color leading-relaxed mb-9'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
         <ContactForm/>
        </div>
      </div>
    </div>
  );
}
