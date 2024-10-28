import React, { useState } from 'react'
import NavLinks from './NavLinks';
import { GrMenu } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar() {


  // menu toggle work here:
  const [open, setOpen] = useState(true)

  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'Profile', path: '/profile/:id' }
  ];


  return (
    <div className='border-b-2 relative'>

      <nav className='container  m-auto py-6 px-3 items-center flex justify-between'>

        <div>
          <a className='font-bold text-3xl text-red-500' href=""
          >REACT<span className='text-blue-600'>-W</span> </a>
        </div>

        <div>

            <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer' >
              {
                open === true ?
                  <GrMenu></GrMenu> :
                  <MdOutlineClose></MdOutlineClose>
              }

          </div>

              <ul className={`md:flex bg-gray-200 absolute md:static left-0 top-20 right-0 w-full  duration-700 linear
                ${open ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
                {
                  routes.map(route => <NavLinks
                      key={route.id} route={route} ></NavLinks>)
                }
              </ul>

        </div>



      </nav>
    </div>
  )
}
