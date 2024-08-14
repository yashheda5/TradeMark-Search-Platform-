import React from 'react'
import "./Spinner.css"
export const Spinner = () => {
  return (
    <div className="flex flex-col  max-h-[100vw] max-w-[100vw] items-center 
    justify-center mx-auto my-auto translate-y-[13rem] -translate-x-[2rem] space-y-2">
      <div className='spinner'></div>
      <p className="text-[#18182A]  text-lg font-semibold">Loading....</p>
    </div>
  )
}
