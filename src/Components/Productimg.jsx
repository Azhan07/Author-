import React from 'react'
import product1 from '@/Components/Images/partner-1.png.webp'
import product2 from '@/Components/Images/partner-2.png.webp'
import product3 from '@/Components/Images/partner-3.png.webp'
import product4 from '@/Components/Images/partner-4.png.webp'
import product5 from '@/Components/Images/partner-5.png.webp'
import Image from 'next/image'
import Wrapper from './shared/Wrapper'
const Productimg = () => {
  return (
    <Wrapper>
<section className='pt-[5%]'>
        <div className='grid grid-rows-1 grid-flow-col gap-4'>
            <div>
            <Image src={product1} className='w-[75%]'/>
            </div>
            <div>
            <Image src={product2} className='w-[75%]'/>
            </div>
            <div>
            <Image src={product3} className='w-[75%]'/>
            </div>
            <div>
            <Image src={product4} className='w-[75%]'/>
            </div>
            <div>
            <Image src={product5} className='w-[75%]'/>
            </div>
        </div>
    </section> 
    </Wrapper>
    
  )
}

export default Productimg