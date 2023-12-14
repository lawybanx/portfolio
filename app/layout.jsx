import { Poppins } from 'next/font/google';
import Navigation from './components/Navigation';
import './globals.css';

const poppins = Poppins({
  subsets: ['devanagari'],
  weight: '200',
  // adjustFontFallback: false,
  display: 'swap'
});

export const metadata = {
  title: 'Awwal Bankole',
  description: 'My Developer Portfolio Website built with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${poppins.className} bg-stone-100`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
