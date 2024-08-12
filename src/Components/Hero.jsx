import React from 'react'
import Wrapper from './shared/Wrapper'
import Button from './shared/Button'
import heroimg from '@/Components/Images/heroimg.png'
import Image from 'next/image'
const Hero = () => {
  return (
  <Wrapper>
     <section className='pt-[10%]'>
    <div className='grid grid-rows-1 grid-flow-col gap-4'>
        <div className='my-auto'>
            <h1 className='font-bold text-[65px] text-blue-950'>Clue Of The<br/> Wooden Cottage</h1>
            <p className='mb-5 text-[18px]'>Lorem ipsum dolor sit amet consecteturadipisicing elit.</p>
            <Button text={"Buy Now for 22$"}/>
        </div>
        <div>
            <Image src={heroimg} className='w-[100%]' alt='heroimg'/>
        </div>
    </div>
   </section>
  </Wrapper>
  )
}

export default Hero