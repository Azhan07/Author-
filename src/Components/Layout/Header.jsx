"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import {BiMenuAltLeft } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
export const navlink = [
    {id:1, title: "Home", path: "/"},
    {id:2, title: "About", path: "/"},
    {id:3, title: "Chapter", path: "/"},
    {id:4, title: "Reviews", path: "/"},
    {id:5, title: "My Book", path: "/"},
    {id:6, title: "Author", path: "/"},
    {id:6, title: "Contact", path: "/"},
]
const Header = () => {
    const[menuOpen , setMenuOpen] = useState(false);

    const handleNav = () => {
      setMenuOpen(!menuOpen);
    }
  return (
    <>
    <header className='z-10'>
        <nav className='fixed w-full h-24 shadow-xl bg-white'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-10'>
            <div>
                <Link href={""} className='font-bold text-[40px]'>
                    Author
                </Link>
            </div>
            <div className=' hidden sm:flex md:flex'>
              
            {navlink.map((link, index) => {
          return (
            <ul key={index} className='flex mx-6'>
              <Link href={link.path}>
                <li className='hover:underline hover:text-blue-400 text-lg' key={link.id}>{link.title}</li>
              </Link>
            </ul>
          );
        })}
                
            </div>
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <BiMenuAltLeft size={25}/>
            </div>
            </div>

            {/* Mobile Responsive */}
            <div className={
            menuOpen
            ? "fixed top-0 left-0 w-full sm:hidden h-screen bg-[#ecf0f3] p-10 ease-linear duration-700 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-linear duration-700"
        } > 
         <div className='flex justify-end items-center w-full'>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineClose size={25}/>
            </div>
        </div>
        <div className='text-center'>
        {navlink.map((link, index) => {
          return (
            <ul className='flex mx-6'>
              <Link href={link.path}>
                <li className='hover:underline hover:text-blue-400 text-lg' key={link.id}>{link.title}</li>
              </Link>
            </ul>
          );
        })}
            </div>
        </div>
        </nav>
    </header>
    </>
  )
}

export default Header