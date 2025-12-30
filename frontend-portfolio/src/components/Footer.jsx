import React from 'react'
import {FaFacebook, FaGlobe, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-green-800 p-10'>
        <h1 className='text-yellow-400 mb-5 font-bold'>Swetha Sagadevan</h1>
        <div className='text-slate-400 flex justify-between'>
            <p >Copyright ©2025 All rights reserved </p>
            <div className='flex gap-2 items-center'>
                <p>Stay Connected </p>
                <FaTwitter/>
                <FaFacebook/>
                <FaInstagram/>
                <FaGlobe/>
            </div>
        </div>
    </div>
  )
}

export default Footer;