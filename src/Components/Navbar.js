import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Navbar() {
  return (   
         <nav className='flex justify-between '>
          <h3 className='text-3xl font-medium'>Sim Checker</h3>
          <p className='hidden md:flex duration-300 cursor-pointer gap-1 items-center hover:gap-2 hover:mr-2'>
            By BiteeCodes <span><HiArrowNarrowRight/></span>
        </p>
        </nav>
  )
}

export default Navbar