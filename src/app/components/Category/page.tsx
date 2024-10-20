import React from 'react'
import Image from 'next/image'

function Three(){
  return (
    <div className='p-10'>
      <div className='flex flex-row mx-20 my-10' >
        <h2 className='text-black font-light font-medium  text-[24px]'>Browse By Category</h2>
      </div>
      <div className='flex flex-row gap-20 justify-center py-4 ' >
        <div className="flex justify-center items-center border  p-6 bg-slate-200 rounded" >
          <Image
            src="/Phones.png" 
            alt="Phones"
            width={48} 
            height={48}
            
          />
        </div>
        <div className="flex justify-center items-center border  p-6 bg-slate-200 rounded">
          <Image
            src="/Smart Watches.png" 
            alt="Smart Watches"
            width={48} 
            height={48}
           
          />
        </div>
        <div className="flex justify-center items-center border  p-6 bg-slate-200 rounded">
          <Image
            src="/Cameras.png" 
            alt="Cameras"
            width={48} 
            height={48}
           
          />
        </div>
        <div className="flex justify-center items-center border  p-6 bg-slate-200 rounded">
          <Image
            src="/Headphones.png" 
            alt="Headphones"
            width={48} 
            height={48}
            
          />
        </div>
        <div className="flex justify-center items-center border  p-6 bg-slate-200 rounded">
          <Image
            src="/Computers.png" 
            alt="Computer"
            width={48} 
            height={48}
            
          />
        </div>
        <div className="flex justify-center items-center border p-6 bg-slate-200 rounded">
          <Image
            src="/Gaming.png" 
            alt="Gaming"
            width={48} 
            height={48}
            
          />
        </div>
      </div>
    </div>
  )
}

export default Three
