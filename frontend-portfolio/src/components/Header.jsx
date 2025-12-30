import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { FaS } from 'react-icons/fa6'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {

  const [close,setClose]=useState(false)
  const [isVisible,setIsVisible]=useState(true)
  const {hash} = useLocation();

    const links =[
        {name:"Home",path:"/#profilelookup"},{name:"About",path:"/#about"},{name:"Projects",path:"/#projects"},{name:"Contact",path:"/#contact"},
        ]

    function handleClose(e){
      setClose(false)
    }

    function handleMenuBar(e){
      setClose(true)
    }

    useEffect(()=>{
      if(hash){
        const element = document.querySelector(hash);
        element?.scrollIntoView({behavior:"smooth"})
      }
    },[hash])

  return (
    <>
    <div className='bg-green-800 text-white flex justify-between items-center px-8 py-5 sticky top-0 sm:text-m'>
        <div className='flex items-center gap-1'>
          {/* <FaS className='bg-yellow-400 text-green-800 sm:text-2xl md:text-4xl p-1 rounded-full' /> */}
        <h1 className='font-bold sm:text-xl md:text-3xl text-white'>Swetha Sagadevan</h1>
        </div>
        <div className='hidden md:flex md:gap-5'>
            {links.map((item,index)=>(<Link key={index} to={item.path}>{item.name}</Link>)) }
        </div>
        {isVisible && <div className='md:hidden' onClick={handleMenuBar}>
          <FaBars/>
        </div>}
        
    </div>
    {close && <div id="slidingMenu" className='bg-green-800 flex flex-col p-5 sticky top-0 left-0 h-screen w-1/2 text-white z-4'>
        <p className='absolute right-5 top-5' onClick={handleClose}>X</p>
          {links.map((item,index)=>(<Link key={index} to={item.path} className='p-5' onClick={handleClose}>{item.name}</Link>))}
        </div>}
        </>
  )
}

export default Header;