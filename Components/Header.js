import AuthButton from '@/app/components/AuthButton';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div className="logo-container">
        <img src="/ebf7d701-f85f-49b0-b84a-d60ea2036984.png" id="logo" alt="Logo" />
      </div>
      <nav id="navbar">
        <Link href="/Home">Home</Link>
        <Link href="/browse">Browse Pet</Link>
        <Link href="/dashboard">Dashboard</Link>
        <div className="auth-container">
          <AuthButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;