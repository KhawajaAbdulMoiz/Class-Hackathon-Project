import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="text-black flex justify-between items-center mx-auto px-12 w-[1440px] h-[88px]">
        <div className='flex items-center'>
        <Image
            src="/Logo Vector.png" 
            alt="Cart"
            width={65.4} 
            height={22.87}
            className="mx-20" 
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
        <div className="flex items-center gap-10">
            <ul className='flex gap-10 text-gray-500 items-center px-12 font-medium '>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Blog</li>
        </ul>
        <Image
            src="/vector.png" 
            alt="Cart"
            width={32} 
            height={32}
            className="" 
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


