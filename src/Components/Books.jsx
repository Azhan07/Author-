import React from 'react'
import Wrapper from './shared/Wrapper'
import book1 from '@/Components/Images/book-1.jpg.webp'
import book2 from '@/Components/Images/book-2.jpg.webp'
import book3 from '@/Components/Images/book-3.jpg.webp'
import book4 from '@/Components/Images/book-4.jpg.webp'
import Image from 'next/image'

const Books = () => {
    const data = [
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book1,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book2,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book3,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book4,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book1,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book2,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book3,

        },
        {
            title: "You Are Your Ony Limit",
            para: "ROMANCE",
            img: book4,

        },
    ]
    return (
        <Wrapper>
            <section className='pt-[10%]'>
                <div className='text-center'>
                    <h4 className='text-green-400 mb-3 font-bold'>Projects</h4>
                    <h1 className='font-bold text-[45px]'>My Other Books</h1>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 gap-y-10'>
                        {
                            data.map((item, id) => {
                                return (
                                    <div key={id} class="da relative flex min-h-screen flex-col justify-center overflow-hidden ">
                                        <div class="absolute inset-0 bg-center dark:bg-black"></div>
                                        <div class="group relative m-0 flex  w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                                <Image src={item.img} className='w-[100%]' alt=''/>
                                            </div>
                                            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                                <h1 class="font-serif text-2xl font-bold text-white shadow-xl">{item.title}</h1>
                                                <h1 class="text-sm font-light text-gray-200 shadow-xl">{item.para}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default Books