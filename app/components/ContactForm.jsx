'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div className='w-full lg:w-1/2 xl:w-5/12 px-4'>
        <form>
          <div className='mb-6'>
            <input
              type='text'
              placeholder='Your Name'
              className=' w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
            />
          </div>
          <div className='mb-6'>
            <input
              type='email'
              placeholder='Your Email'
              className=' w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
            />
          </div>
          <div className='mb-6'>
            <input
              type='text'
              placeholder='Your Phone'
              className='w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
            />
          </div>
          <div className='mb-6'>
            <textarea
              rows='6'
              placeholder='Your Message'
              className='w-full rounded py-3 px-[14px] text-black text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='w-full text-white rounded border border-primary p-3 transition hover:bg-gray-500'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
//  <form className='p-6 flex flex-col justify-center'>
//       <div className='flex flex-col'>
//         <label htmlFor='name' className='hidden'>
//           Name
//         </label>
//         <input
//           required
//           type='name'
//           name='name'
//           id='name'
//           onChange={e => setName(e.target.value)}
//           value={name}
//           placeholder='name'
//           className=' mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
//         />
//       </div>

//       <div className='flex flex-col mt-2'>
//         <label htmlFor='email' className='hidden'>
//           Email
//         </label>
//         <input
//           type='email'
//           name='email'
//           id='email'
//           onChange={e => setEmail(e.target.value)}
//           value={email}
//           placeholder='email'
//           className=' mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
//         />
//       </div>

//       <div className='flex flex-col mt-2'>
//         <label htmlFor='tel' className='hidden'>
//           Subject
//         </label>
//         <input
//           type='text'
//           name='subject'
//           id='subject'
//           onChange={e => setSubject(e.target.value)}
//           value={subject}
//           placeholder='subject'
//           className=' mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none'
//         />
//       </div>

//       <div className='flex flex-col mt-2'>
//         <label htmlFor='tel' className='hidden'>
//           Message
//         </label>
//         <textarea
//           id='message'
//           rows='4'
//           onChange={e => setMessage(e.target.value)}
//           value={message}
//           class='block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//           placeholder='Your message...'
//         ></textarea>
//       </div>

//       <button
//         type='submit'
//         className='md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300'
//       >
//         Submit
//       </button>
//     </form>
