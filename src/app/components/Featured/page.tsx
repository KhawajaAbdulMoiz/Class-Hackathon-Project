import React from 'react'
import Image from 'next/image'

function Five(){
  return (
    <div>
      <div className='flex flex-row gap-20 justify-center py-4 ' >
      <div className="flex justify-center items-center ">
        <div className="flex-col justify-center items-center" >
       
        
          <Image
            src="/Group 1.png" 
            alt="Phones"
            width={360.06} 
            height={327}
            
          />
          <div className='mb-20'>
          <h2 className='font-light text-[33px] my-2 text-left mx-6'>Popular Products</h2>
          <h2 className='font-medium  text-[14px] text-left mx-6'>iPad combines a magnificent 10.2-inch <br /> Retina display, incredible performance, <br />multitasking and ease of use.</h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4 mx-20' >Shop Now</button>
          </div>
        </div>
           
          
        </div>
        <div className="flex justify-center items-center ">
        <div className="flex-col justify-center items-center" >
       
        
          <Image
            src="/image 64.png" 
            alt="Phones"
            width={360.06} 
            height={327}
            
          />
          <h2 className='font-light text-[33px] my-2 text-left mx-6'>Ipad Pro</h2>
          <h2 className='font-medium  text-[14px] text-left mx-6'>iPad combines a magnificent 10.2-inch <br /> Retina display, incredible performance, <br />multitasking and ease of use.</h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4 mx-20' >Shop Now</button>
        </div>
           
          
        </div>
        <div className="flex-col justify-center items-center mt-20 bg-slate-200" >
      
          <Image
            src="/image 41.png" 
            alt="Phones"
            width={360.06} 
            height={327}
            
          />
           <h2 className='font-light text-[33px] my-2 text-left mx-6'>Samsung Galaxy </h2>
           <h2 className='font-medium  text-[14px] text-left mx-6'>iPad combines a magnificent 10.2-inch <br /> Retina display, incredible performance, <br />multitasking and ease of use.</h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4 mx-20' >Shop Now</button>
        </div>
        <div className="flex-col justify-center items-center mt-20 border bg-black" >
        
          <Image
            src="/Macbook 1.png" 
            alt="Phones"
            width={360.06} 
            height={327}
          />
          <h2 className='font-light text-[33px] my-2 text-left mx-6 text-white'>Macbook Pro</h2>
          <h2 className='font-medium  text-[14px] text-left text-gray-400 mx-6'>iPad combines a magnificent 10.2-inch <br /> Retina display, incredible performance, <br />multitasking and ease of use.</h2>
          <button className='font-medium border border-white bg-black text-white text-[16px] rounded px-10 py-4 mt-4 mx-20' >Shop Now</button>
        </div>
       
      </div>
     
      </div>
      
  )
}

export default Five
