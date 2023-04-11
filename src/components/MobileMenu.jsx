import { RiCloseLine } from 'react-icons/ri'
import { BiCart } from 'react-icons/bi';


const MobileMenu = ({isOpen, toggle}) => {
  return (
      isOpen && (
    <ul className='flex-col flex items-center fixed inset-0 sm:left-1/4 -left-44 bg-brunswick text-white gap-8 justify-center p-8 md:hidden'>
      <div className='absolute right-6 top-6 scale-150'>
        <RiCloseLine onClick={toggle} />
      </div>
      <li><a href='/#about' onClick={toggle}>About</a></li>
      <li><a href='/#blog' onClick={toggle}>Blog</a></li>
      <li><a href='/#contact' onClick={toggle}>Contact</a></li>
      <li><a href='/#shop' onClick={toggle}>Shop</a></li>
      <li> <BiCart className='text-2xl' /></li>
    </ul>
      )

  )
}

export default MobileMenu