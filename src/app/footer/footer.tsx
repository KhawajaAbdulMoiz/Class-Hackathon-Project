import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    
     
    
    <div className='flex flex-row p-20 text-gray-400 bg-black justify-center gap-20' id='contact'>
    
      <div>
      <h1 className='text-left justify-left  mb-5 text-white' ><b>cyber</b></h1>
        <h3 className='font-medium  text-[14px] leading-8'>We are a residential interior design firm located in <br /> Portland. Our boutique-studio offers more than</h3>
        <Image
            src="/Social Icons.png" 
            alt="Phones"
            width={173} 
            height={16}
            className='mt-40'
            
          />
      </div>
      <div className='font-Regular  text-[14px] text-gray-400 leading-8'>
        <h1 className='font-semi-bold  text-[16px] text-white'>Services</h1>
        <h2>Bonus Program</h2>
        <h2>Gift Cards</h2>
        <h2>Credit and payment</h2>
        <h2>Service contracts</h2>
        <h2>Non-cash account</h2>
        <h2>Payment</h2>
      </div>
      <div className='font-Regular  text-[14px] text-gray-400 leading-8'>
        <h1 className='font-semi-bold  text-[16px] text-white'>Assistance to the buyer</h1>
        <h2>Find an order</h2>
        <h2>Terms of delivery</h2>
        <h2>Exchange and return of goods</h2>
        <h2>Guarantee</h2>
        <h2>Frequently asked questions</h2>
        <h2>Terms of use of the site</h2>
      </div>
      </div>
    
  )
}

export default Footer
