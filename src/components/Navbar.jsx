import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setactive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `} >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto  ">
        <Link 
        to={"/"} 
        className='flex items-center gap-2'
        onClick={()=>{
          setactive('');
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold ' >Aslam</p>
        </Link>
      </div>
      <ul className="list-none sm:flex flex-grow gap-10 hidden">
          {navLinks.map((link, i) => (
            <li key={i} onClick={()=>setactive(link.title)} className={`${
              active == link.title ?
              "text-white" :
              "text-secondary"
            } hover:text-white text-[1.1rem] font-medium cursor-pointer `} >
              <Link
              to={`#${link.id}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex justify-end items-center">
          <img src={ toggle ? menu : close } alt="menu" className='w-[1.8rem] h-[1.8rem] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)} />
          <div className={`${toggle ? "hidden" : "flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[7.5rem] z-10 roundec-xl `} >
            <ul className='list-none flex flex-col items-start gap-4' >
            {navLinks.map((link, i) => (
            <li key={i} onClick={()=>{
              setactive(link.title);
              setToggle(!toggle)
            }} className={`${
              active == link.title ?
              "text-white" :
              "text-secondary"
            } hover:text-white font-poppins text-[1rem] font-medium cursor-pointer `} >
              <Link
              to={`#${link.id}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar