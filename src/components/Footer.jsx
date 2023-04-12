import { CgArrowLongDown } from 'react-icons/cg';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='absolute grid-cols-1 sm:grid-cols-5 bottom-8 left-20'>
      <div className='col-span-1'>
        <CgArrowLongDown className='text-2xl text-white absolute bottom-4' />
      </div>
      <div className='col-span-1 flex flex-col gap-4 bg-yellow-200 rounded-tl-full ml-14'>
        <img src='/cacti2.png' alt = "logo" className='w-52 h-20 object-cover'/>
      </div>
      <div className='col-span-1 flex gap-32 bg-brunswick w-[700px] text-white font-medium leading-4 tracking-wide text-xs absolute left-64 bottom-0 py-6 px-4'>
        <p>Cacti and succulents are particularly<br />
        easy indoor plants to care for</p>
        <p>Requiring very little maintenance,<br />
         they are ideal for every plant lover</p>
      </div>
      <div className='col-span-1 flex justify-center items-center gap-4 bg-celadon absolute -right-[923px] bottom-0 w-full py-[22px] text-white'>
        <span className='border-2 border-white p-2 rounded-full'>
          <TiSocialFacebook className='text-md' />
        </span>
        <span className='border-2 border-white p-2 rounded-full'>
          <AiOutlineInstagram className='text-md' />
        </span>
        <span className='border-2 border-white bg-white p-2 rounded-full'>
          <AiOutlineTwitter className='text-md text-celadon' />
        </span>  
      </div>
    </div>
  )
}

export default Footer
