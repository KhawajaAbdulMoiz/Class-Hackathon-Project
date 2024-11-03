import React from 'react'
import Image from 'next/image'

function Two() {
  return (
  
    <div  className='flex flex-row'>
        <div>
        <div className='flex flex-row'>
            <Image
                src="/PlayStation.png" 
                alt="PlayStation"
                width={360} 
                height={343}
                className="mt-6"  
                style={{ width: 'auto', height: 'auto' }}
            />
            <div className="ml-4 mt-20 p-4 " id='about'> 
                <h1 className='text-black text-[49px] font-medium'>Playstation 5</h1>
                <h2 className='text-gray-400 text-[14px]'>Incredibly powerful CPUs, GPUs, and an SSD with<br></br> integrated I/O will redefine your PlayStation<br></br> experience.</h2> 
            </div>
        </div>
        <div>
            <div className='flex flex-row bg-slate-200'>
            <Image
                src="/headphone.png" 
                alt="PlayStation"
                width={104} 
                height={272}
                className="mt-6"  
            />
            <div className="ml-4 mt-20 p-4 " > 
                <h1 className='text-black text-[29px] font-mixed font-light'>Apple <br></br> AirPods <br></br><b>Max</b> </h1>
                <h2 className='text-gray-400 text-[14px]'>Computational audio. Listen, it's powerful</h2>

            </div>
            <div className='py-10 flex flex-row items-start border bg-gray-500 '>
            <Image
                src="/visionpro.png" 
                alt="PlayStation"
                width={104} 
                height={272}
                className="mt-10"  
            />
            <div className="ml-4 mt-10 p-4 " > 
                <h1 className='text-white text-[29px] font-mixed font-light' >Apple <br></br> Vision <b>Pro</b> </h1>
                <h2 className='text-gray-400 text-[14px]'>An immersive way to experience entertainment</h2>

            </div>
            </div>
            </div>
           
        </div>
        
    </div>
    <div className='flex flex-row-reverse flex-row bg-slate-200'>
            <Image
                src="/Screen.png" 
                alt="PlayStation"
                width={292} 
                height={502}
                className="mt-10"  
                style={{ width: 'auto', height: 'auto' }}
                priority
            />
            <div className="ml-4 mt-10 p-4 " > 
                <h1 className='text-black text-[64px] font-mixed font-light'>Macbook <br></br><b>Air</b> </h1>
                <h2 className='text-gray-400 text-[14px]'>The new 15-inch MacBook Air makes room for more <br></br>of what you love with a spacious Liquid Retina <br></br> display.</h2>
                <button className='border border-black text-black text-[16px] rounded px-10 py-4 mt-10' >Shop Now</button>
            </div>
            </div>
</div>

  )
}

export default Two
