import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div>
        <img src="/ebf7d701-f85f-49b0-b84a-d60ea2036984.png" id="logo" alt="Logo" />
      </div>
      <div>
        <nav id="navbar">
          <Link href="/Home">Home</Link>
          <Link href="/browse">Browse Pet</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/services">Services</Link>
          <Link href="/About">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
