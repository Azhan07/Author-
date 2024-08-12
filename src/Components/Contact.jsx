import React from 'react'
import Wrapper from './shared/Wrapper'
import { FaAddressBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    const data = [
        {
            title: "Address",
            para: "198 West 21th Street, Suite 721 New York NY 10016",
            icon: FaAddressBook,
        },
        {
            title: "Contact Number",
            para: "+ 1235 2355 98",
            icon: FaPhoneVolume,
        },
        {
            title: "Email Address",
            para: "info@yoursite.com",
            icon: FaLocationDot,
        },
    ];

    return (
        <Wrapper>
            <section className='pt[10%] pb-[5%]'>
                <div className='text-center'>
                    <h1 className='font-bold text-[45px] mb-4'>Contact Me</h1>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur consectetur maxime aut veritatis beatae.</p>
                    <div className='grid grid-rows-1 grid-flow-col gap-4'>
                        {
                            data.map((item, index) => (
                                <div key={index} className='p-7 border-r-4 shadow-lg bg-slate-200 text-center'>
                                    <div className='w-[50px] h-[50px] bg-green-700 rounded-3xl flex justify-center m-auto'>
                                        <item.icon className='m-auto'/>
                                    </div>
                                    <h1 className='mt-4 mb-4 font-bold text-[29px]'>{item.title}</h1>
                                    <p>{item.para}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default Contact;
