import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between bg-cyan-500 px-10 py-4 text-white">
      <h2 className="text-xl font-bold">
        <Link to="/">Jion</Link>
      </h2>
    </nav>
  );
}

export default Navigation;
