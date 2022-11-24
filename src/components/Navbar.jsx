import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)




  return (
    <nav className=' fixed w-full flex justify-between items-center py-6 navbar z-[100] '>
      <img
        src={logo}
        alt="HooBank Logo"
        className='w-[124px] h-[32px]'/* This is Logo image */
      />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'> {/* This is nav links */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-20' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center mr-10'> {/* This is mobile menu icon and nav links  */}
        <img
          src={toggle ? close : menu}
          alt='menu icon'
          className='w-[28px] h-[28px] object-contain cursor-pointer' /* This is the menu icon img */
          onClick={() => setToggle((toggle) => !toggle)} /* This toggles the menu open or close */
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          {/* This is the mobile nav menu */}
          <ul className='list-none flex flex-col justify-end items-center flex-1'> {/* This is nav links */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}
                >
                <a href={`#${nav.id}`} onClick={() => setToggle((toggle) => !toggle)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar