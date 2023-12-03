import { Poppins } from 'next/font/google';
import Navigation from './components/Navigation';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '200',
  adjustFontFallback: false,
});

export const metadata = {
  title: 'Awwal Bankole',
  description: 'My Developer Portfolio Website built with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
