import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { BiCart } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import MobileMenu from './MobileMenu';
import { VscCircleSmallFilled } from 'react-icons/vsc';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home");
  const toggle = () => setIsOpen(!isOpen)
  return (
    <nav className='fixed flex space-x-32 sm:px-16 items-center z-10 text-white w-full'>
      <div className='flex justify-center items-center gap-2 py-6'>
        <img src='/logo.png' alt = "logo" width={25} height={25}/>
        <div className='flex flex-col text-xs font-bold capitalize tracking-wide'>
          <span>planet</span>
          <span className='-mt-1'>desert</span>
        </div>
      </div>
      <div className='absolute right-6 md:hidden top-6 scale-150'>
        <HiMenuAlt3 onClick={toggle} />
      </div>
      <ul className={`hidden md:flex gap-4 text-xs tracking-wider capitalize font-semibold`}>
        <li
        onClick = {() => setActiveTab("home")}
        className = {activeTab === "home" ? "border-t-4 border-yellow-500 text-yellow-500 rounded py-6" : "py-7"}
        >
          <a href='/'>
            home
          </a>
        </li>
        <VscCircleSmallFilled className='text-white mt-7' />
        <li
        onClick = {() => setActiveTab("catalogue")}
        className = {activeTab === "catalogue" ? "border-t-4 border-yellow-500 text-yellow-500 rounded py-6" : "py-7"}
        >
          <a href='/#'>catalogue</a>
        </li>
        <VscCircleSmallFilled className='text-white mt-7' />
        <li
        onClick = {() => setActiveTab("sale")}
        className = {activeTab === "sale" ? "border-t-4 border-yellow-500 text-yellow-500 rounded py-6" : "py-7"}
        >
          <a href='/#'>sale%</a>
        </li>
        <div className='flex justify-end items-center gap-10'>
          <FiSearch className='text-xl ml-[450px]' />
          <IoPersonOutline className='text-xl' />
          <span className='bg-yellow-500 px-4 py-2 rounded-full flex justify-center items-center gap-1'>
            <span className='text-sm mt-1'>3</span>
            <BiCart className='text-xl' />
          </span>
          <span className='bg-brunswick py-2 h-[91px] w-[94px] -ml-4 rounded-tl  flex justify-center items-center gap-1'>
            <HiMenuAlt3 className='text-xl' />
          </span>
        </div>
      </ul>
      <MobileMenu isOpen={isOpen} toggle={toggle} /> 
    </nav>
  )
}

export default NavBar