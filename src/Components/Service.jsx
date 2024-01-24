import React from 'react'
import Wrapper from './shared/Wrapper'
import { FaUserCog } from "react-icons/fa";
const Service = () => {
    const data = [
        {
            logo : FaUserCog,
            title: "Experience",
            para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
            logo : FaUserCog,
            title: "Marketing Goals",
            para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
            logo : FaUserCog,
            title: "Targetting Vission",
            para:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
    ]
  return (
    <Wrapper>
        <section className='pt-[10%]'>
            <h4 className='text-center font-bold text-green-400' >Services</h4>
            <h1 className='text-center font-bold text-[45px] pb-6'>Services</h1>
            <div className='grid grid-rows-1 grid-flow-col gap-4 text-center'>
            {
                data.map((item)=>{
                    return(
                       
                          <div className='p-7 border-r-4 shadow-lg bg-slate-200'>
                          <item.logo className='m-auto text-[29px] mt-4 mb-4'/>
                            <h1 className='font-bold text-[30px] mb-4'>{item.title}</h1>
                            <p className='text-[14px]'>{item.para}</p>
                          </div>
                      
                    )
                })
               
            }
             </div>
        </section>
    </Wrapper>
  )
}

export default Service