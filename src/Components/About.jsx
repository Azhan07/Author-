import React from 'react'
import Wrapper from './shared/Wrapper'
import bookimg from '@/Components/Images/book.png'
import Image from 'next/image'
export const About = () => {
    const data = [
        {
            title: "Award achievements",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.",
        },
        {
            title: "Read On Any Devices",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.",
        },
        {
            title: "Very High Resolution",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.",
        },
    ]
    return (
        <Wrapper>
            <section className='pt-[5%]'>
                <div className='flex justify-evenly'>
                    <div>
                        <Image src={bookimg} className='w-[100%]' alt='bookimg' />
                    </div>
                    <div>
                        <h1 className='text-[60px] font-bold'>About The Book</h1>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
                        {
                            data.map((item, id) => {
                                return (
                                    <div key={id}>
                                        <h1 className='text-[32px] mb-3 font-bold'>{item.title}</h1>
                                        <p className='mb-5'>{item.para}</p>
                                    </div>

                                )
                            }

                            )}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
