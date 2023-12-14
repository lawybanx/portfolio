'use client';

import { useState } from 'react';
import Navbar from './Navbar';

export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />;
}
