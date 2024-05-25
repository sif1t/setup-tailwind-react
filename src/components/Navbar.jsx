import React, { useState } from 'react';
import Link from './link/Link';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 4,
      name: "Services",
      path: "/services"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog" 
    }
  ];

  return (
    <nav className=' bg-purple-400'>
      <div  className='md:hidden' onClick={() => setOpen(!open)}>
        <span>
          {
          open === true ?
            <XMarkIcon className=" size-6 text-red-600" />
            : <Bars3Icon className="size-6 text-red-800" />
            }
        </span>
      </div>
      <ul className={`md:flex absolute md:static duration-500 pl-5 pb-2 py-2 bg-purple-400 ${open ? ' top-6': '-top-36'}`}>
        {
          routes.map(route => <Link
            key={route.id}
            route={route}
          ></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;