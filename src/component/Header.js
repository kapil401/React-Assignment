import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/Home' },
    { name: 'Services', path: '/OurServices' },
    { name: 'Feature', path: '/feature' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/About' }
  ];

  return (
    <header className="flex justify-around  text-black  p-4 mb-4 body-bg">
       <a className="navbar-brand text-primary fw-sm icon-text" href="/">Medi<span className="text-warning">Care+</span></a>
      <nav>
        <ul className="flex space-x-4">
          {navItems.map(item => (
            <li key={item.path}>
              <a
                href={item.path}
                className={`hover:text-blue-400 ${location.pathname === item.path ? 'text-blue-600 ' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;