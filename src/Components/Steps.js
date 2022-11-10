import React from 'react'
import {IoBulbSharp,IoHappyOutline} from 'react-icons/io5'
import {FiFilter} from 'react-icons/fi'

function Steps() {
    
  return (
    <div>
        
        <div className='grid gap-5 md:grid-cols-3 mt-5 font-[600]'>
        
            <div  className='flex gap-2 md:px-5 border-r-light_blue md:border-r-[1px]'>
                <IoBulbSharp className='text-xl' size={70}/>
                <div>
                <h2>Find your Sim</h2>
                <p className='text-light_blue'>No need to worry about the type of airtime you need buy</p>
                </div>
            </div>
            <div  className='flex gap-2 md:px-5 border-r-light_blue md:border-r-[1px]'>
                <FiFilter className='text-xl' size={60}/>
                <div>
                <h2>Open source </h2>
                <p className='text-light_blue'>Developed by a Nigerian, for Nigerians</p>
                </div>
            </div>
            <div  className='flex gap-2 md:px-5 '>
                <IoHappyOutline className='text-xl' size={70}/>
                <div>
                <h2>Easy To Use</h2>
                <p className='text-light_blue'>With a simple 3 step process you get to check fast and easy</p>
                </div>
            </div>

           
            
        </div>
    </div>
  )
}

export default Steps