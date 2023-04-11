import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { BiCart } from 'react-icons/bi';
import MobileMenu from './MobileMenu';
import { VscCircleSmallFilled } from 'react-icons/vsc';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home");
  const toggle = () => setIsOpen(!isOpen)
  return (
    <nav className='fixed flex space-x-64 px-40 items-center z-10 text-white'>
      <div className='flex justify-center items-center gap-4 py-6'>
        <img src='/logo2.png' alt = "logo" width={25} height={25}/>
        <div className='flex flex-col text-sm font-bold capitalize tracking-wide'>
          <span>planet</span>
          <span className='-mt-1.5'>desert</span>
        </div>
      </div>
      <div className='absolute right-6 md:hidden top-6 scale-150'>
        <HiMenuAlt3 onClick={toggle} />
      </div>
      <ul className={`hidden md:flex gap-8 text-sm tracking-wider capitalize font-semibold`}>
        <li
        onClick = {() => setActiveTab("home")}
        className = {activeTab === "home" ? "border-t-4 border-yellow-200 text-yellow-200 rounded py-6" : "py-7"}
        >
          <a href='/'>
            home
          </a>
        </li>
        <VscCircleSmallFilled className='text-white mt-8' />
        <li
        onClick = {() => setActiveTab("catalogues")}
        className = {activeTab === "catalogues" ? "border-t-4 border-yellow-200 text-yellow-200 rounded py-6" : "py-7"}
        >
          <a href='/#'>catalogues</a>
        </li>
        <VscCircleSmallFilled className='text-white mt-8' />
        <li
        onClick = {() => setActiveTab("sale")}
        className = {activeTab === "sale" ? "border-t-4 border-yellow-200 text-yellow-200 rounded py-6" : "py-7"}
        >
          <a href='/#'>sale %</a>
        </li>
        <li className='ml-32 py-7'>
          <BiCart className='text-2xl' />
        </li>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} /> 
    </nav>
  )
}

export default NavBar