import React from 'react'
import Image from 'next/image'

function Six(){
  return (
    <div className='p-10'>
      <div className='flex mx-20 my-10 gap-8 mx-20' >
        <h2 className='text-black text-[24px] font-medium'>Discount Upto -50%</h2>
        
      </div>
      <div className='flex flex-row gap-20 justify-center py-4 ' >
        <div className="flex-col justify-center items-center" >
        <div className='absolute mx-20'>
            <Image
                src="/Vector.png" 
                alt="heart"
                width={24} 
                height={24}
                className='mx-20'
                style={{ width: 'auto', height: 'auto' }}
            
          />
        </div>
        
          <Image
            src="/golden.png" 
            alt="Phones"
            width={160} 
            height={160}
            
          />
          <h2 className='font-medium  text-[16px] my-2 text-center'>Apple iPhone 14 Pro Max 512GB <br />Gold(MQ233)</h2>
          <h2 className='font-semi-bold  text-[24px] text-center'><b>1437$</b></h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4' >Buy Now</button>
        </div>
        <div className="flex justify-center items-center ">
        <div className="flex-col justify-center items-center" >
        <div className='absolute mx-20'>
            <Image
                src="/Vector.png" 
                alt="heart"
                width={24} 
                height={24}
                className='mx-20'
                style={{ width: 'auto', height: 'auto' }}
            
          />
        </div>
        
          <Image
            src="/headphone3.png" 
            alt="Phones"
            width={160} 
            height={160}
            
          />
          <h2 className='font-medium  text-[16px] my-2 text-center'>Airpods Max Silver<br />Starlight Aluminium</h2>
          <h2 className='font-semi-bold  text-[24px] text-center'><b>549$</b></h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4' >Buy Now</button>
        </div>
           
          
        </div>
        <div className="flex-col justify-center items-center" >
        <div className='absolute mx-20'>
            <Image
                src="/Vector.png" 
                alt="heart"
                width={24} 
                height={24}
                className='mx-20'
                style={{ width: 'auto', height: 'auto' }}
            
          />
        </div>
        
          <Image
            src="/SmartWatch.png" 
            alt="Phones"
            width={160} 
            height={160}
            
          />
          <h2 className='font-medium  text-[16px] my-2 text-center'>Apple Watch Series 9 GPS<br />41mm Starlight Aluminium</h2>
          <h2 className='font-semi-bold  text-[24px] text-center'><b>399$</b></h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4' >Buy Now</button>
        </div>
        <div className="flex-col justify-center items-center" >
        <div className='absolute mx-20'>
            <Image
                src="/Vector.png" 
                alt="heart"
                width={24} 
                height={24}
                className='mx-20'
                style={{ width: 'auto', height: 'auto' }}
            
          />
        </div>
        
          <Image
            src="/Iphone 14 pro 1 (1).png" 
            alt="Phones"
            width={160} 
            height={160}
            
          />
          <h2 className='font-medium  text-[16px] my-2 text-center'>Apple iPhone 14 Pro 1TB Gold <br />{"(MQ2v3)"}</h2>
          <h2 className='font-semi-bold  text-[24px] text-center'><b>1499$</b></h2>
          <button className='font-medium border border-black bg-black text-white text-[16px] rounded px-10 py-4 mt-4' >Buy Now</button>
        </div>
       
      </div>
     
      </div>
  )
}

export default Six
