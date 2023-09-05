import React from 'react'

type Props = {

}

function Navbar({}: Props) {
  return (
    <div className='flex bg-transparent justify-between pt-5 items-center mr-[5%] ml-[5%]'>
     <img className='w-32 max-w-full' src="https://cars-showcase-ftmk.vercel.app/logo.svg" alt="" />  
     <button className='text-blue-400 md:px-12 md:py-4 px-6 py-3 bg-white  rounded-full'>Sign In</button> 
    </div>
  )
}

export default Navbar