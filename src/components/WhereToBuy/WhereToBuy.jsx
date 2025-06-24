import React from 'react'
import Worldmap from "../../assets/world-map.png"

const WhereToBuy = () => {
  return (
    <>
      <div className='container py-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
          {/* text-content section */}
          <div className='space-y-8'>
            <h1 className='text-4xl font-bold text-dark font-serif'>
              Where to Buy Our Products?
            </h1>
          </div>
          {/* map section */}
          <div className='flex items-center gap-4'>
            <input 
              type="text" 
              placeholder='Country'
              className='input-style w-full lg:w-[120px]' 
            />
            <input 
              type="text" 
              placeholder='Zipcode'
              className='input-style w-full' 
            />
          </div>
          <button className='primary-btn'>Search</button>
        </div>
        {/* world map section */}
        <div className='mt-10'>
            <img src={Worldmap} alt="World Map" className='w-[600px] h-auto mx-auto block'/>
        </div>
      </div>
    </>
  )
}

export default WhereToBuy