import React, { useState } from 'react';
import Link from './link/Link';
import { Bars3Icon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'

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
    <nav>
      <div  className='md:hidden' onClick={() => setOpen(!open)}>
        <span>
          {open === true ?
            <XMarkIcon className="size-6 text-purple-500" />
            : <Bars3Icon className="size-6 text-purple-500" />}
        </span>
      </div>
      <ul className='md:flex'>
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