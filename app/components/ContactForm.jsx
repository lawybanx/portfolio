'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);

     setFormData({
       name: '',
       email: '',
       subject: '',
       message: '',
     });
    
  };

  return (
    <>
      <div className='w-full lg:w-1/2 xl:w-5/12 px-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <input
              required
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className=' w-full rounded py-3 px-[14px] text-black text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
            />
          </div>
          <div className='mb-6'>
            <input
              required
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className=' w-full rounded py-3 px-[14px] text-black text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
            />
          </div>
          <div className='mb-6'>
            <input
              required
              name='subject'
              type='text'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
              className='w-full rounded py-3 px-[14px] text-black text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary'
            />
          </div>
          <div className='mb-6'>
            <textarea
              name='message'
              rows='6'
              value={formData.message}
              onChange={handleChange}
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
