"use client";
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';



function Header() {
  useEffect(() => {
        const scrollOptions = {
            speed: 500,
        };

       
        new SmoothScroll('#nav a[href*="#"]', scrollOptions);
        
    }, []);


  return (
    <div className="text-black flex justify-between items-center mx-auto px-12 w-[1440px] h-[88px]">
        <div className='flex items-center'>
        <Image
            src="/Logo Vector.png" 
            alt="Cart"
            width={65.4} 
            height={22.87}
            className="mx-20" 
            style={{ width: 'auto', height: 'auto' }}
      />
       
        </div>
        <div className='items-center gap-2 mt-2 flex relative w-64 '> 
        <Image
            src="/search.png" 
            alt="Cart"
            width={24} 
            height={24}
            className='absolute mx-2'
        />         
        <input type="text"
        placeholder='Search'
        className='p-2 border pl-10 border-gray rounded-lg my-2' />
        </div>
        <div className="flex items-center gap-10" id='nav'>
            <ul className='flex gap-10 text-gray-500 items-center px-12 font-medium '>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#new-arrival">Blog</a></li>
        </ul>
        <Image
            src="/vector.png" 
            alt="Cart"
            width={32} 
            height={32}
            className="" 
            style={{ width: 'auto', height: 'auto' }}

           
      />
        <Image
            src="/cart.png" 
            alt="Cart"
            width={32} 
            height={32}
            className="" 
           
      />
      <Image
            src="/user.png" 
            alt="Cart"
            width={32} 
            height={32}
            className="" 
            
      />
        </div>        
    </div>
    
  );

}


export default Header;


