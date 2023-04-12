import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='sm:px-32 sm:py-40 text-white -ml-12  grid grid-cols-1 sm:grid-cols-2 gap-4 relative'>
      <div className="col-span-1">
        <h2 className="uppercase text-xs font-bold tracking-wider">plants</h2>
        <h1 className="text-[8rem] font-extrabold font-bebas tracking-wide uppercase -ml-3 -mt-6 ">cactus</h1>
        <p className="text-xs -mt-4 font-medium">The fascinating and amazing world of <b>cacti</b> and <b>succulents</b></p>
        <button className="border-yellow-500 border-2 font-semibold text-xs capitalize py-2 px-4 rounded-full mt-8 flex justify-center items-center gap-2 relative">
          <span className='px-12 -ml-12'>shop now</span>
          <span className="bg-yellow-500 flex items-center justify-center w-8 h-8 rounded-full px-2 absolute right-0">
          <BsArrowRight  />
          </span>
        </button>
      </div>
      <div className="col-span-1">
      <div className="bg-gradient-to-r from-green-100 to-celadon w-[500px] h-[480px] absolute right-0 bottom-0 rounded-tl-[99px] rounded-br-3xl
      "></div>
      <img src="/cactus.png" alt="cactus" className="w-[430px] absolute sm:right-40 sm:-bottom-0  " />
      </div>
    </div>
  )
}

export default Hero
