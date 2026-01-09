import React from 'react'
import profileimg from '../assets/profileimage.jpg'
import { FaGithubAlt, FaGithubSquare, FaLinkedinIn } from 'react-icons/fa';

const ProfileLookup = () => {
  return (
    <div id="profilelookup" className='flex flex-wrap items-center bg-black text-white justify-evenly px-1 py-20'>
        <div className=''>
            <h1 className='text-5xl mb-5' >Hello, <br/> I'm Swetha Sagadevan<br/>Software Developer (MERN stack)</h1>
            <a href='#contact' className='bg-orange-500 rounded-md px-4 py-2 mx-2'>Contact</a>
            <a className='bg-orange-500 rounded-md px-4 py-2 mx-2 ' href='#about'>Resume</a>
            {/* <div className='p-5 flex justify-around'>
              <a href='https://www.linkedin.com/in/swethasagadevan/' className='flex items-center gap-1'> <FaLinkedinIn/> LinkedIN </a>
              <a href='https://github.com/swethasagadevan' className='flex items-center gap-1'> <FaGithubSquare/> GitHub</a>
            </div> */}
        </div>
        {/* <div className="bg-gradient-to-r from-green-600 to-yellow-400 rounded-xl"> */}
        <div className='bg-black rounded-xl'>
          <img src={profileimg} alt="profile image avatar" className='m-5 mx-auto rounded-2xl' width="85%" />
        </div>
    </div>  
  )
}

export default ProfileLookup;
