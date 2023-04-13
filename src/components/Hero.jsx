import { BsArrowRight, BsRecordCircle, BsRecordFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const cacti = [
  {id:1,name: 'cactus', image: '/cactus.png'},
  {id:2, name: 'cholla', image: '/cactus2.png'},
  {id:3, name: 'saguaro', image: '/cactus1.png'},
  {id:4, name: 'senita', image: '/cactus3.png'}
]

const Hero = () => {

  const [current, setCurrent] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % cacti.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleImageClick = (index) => {
    setCurrent(index);
  }; 


  return (
    <div className='sm:px-32 sm:py-40 text-white -ml-12  grid grid-cols-1 sm:grid-cols-2 gap-4 relative'>
      <div className="col-span-1">
        <h2 className="uppercase text-xs font-bold tracking-wider">plants</h2>
        <h1 className="text-[8rem] font-extrabold font-bebas tracking-wide uppercase -ml-3 -mt-6 ">
          {cacti[current].name}
        </h1>
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
      ">

      </div>
      <img src={cacti[current].image} alt={cacti[current].name}
      className={`w-[420px] absolute sm:right-40 sm:-bottom-0`} />
          <div className="flex flex-col justify-center items-end h-[480px] absolute top-0 right-12 gap-8">
          {cacti.map((_, index) => (
            <div
              key={index}
              className={`text-white text-sm`}
              onClick={() => handleImageClick(index)}
            >
              {index === current? <BsRecordCircle className='text-xl' /> : <BsRecordFill />}
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Hero
