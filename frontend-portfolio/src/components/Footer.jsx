import React from 'react'
import {FaFacebook, FaGlobe, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-400 text-white p-10'>
        <h1 className=' mb-5 font-bold'>Swetha Sagadevan</h1>
        <div className=' flex justify-between'>
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
