import React from 'react'
import Wrapper from './shared/Wrapper'

const Copies = () => {
    const data = [
        {
            number:"1,100",
            title:"Copies Sold"
        },
        {
            number:"1,200",
            title:"Copies Released"
        },
        {
            number:"340",
            title:"Cup Of Coffee"
        },
        {
            number:"12,000",
            title:"Happy Readers"
        },

    ]
  return (
   <Wrapper>
    <section className='pt-[5%]'>
        <div className='grid grid-rows-1 grid-flow-col gap-4'>
            {
                data.map((item)=>{
                    return(
                        <div className='bg-slate-300 border-r-2 w-80  p-5 pb-10'>
                            <h1 className='text-center pt-10 text-[30px] font-bold mb-3'>{item.number}</h1>
                            <p className='text-center text-lg'>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
   </Wrapper>
  )
}

export default Copies