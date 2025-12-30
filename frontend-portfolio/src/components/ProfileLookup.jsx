import React from 'react'
import profileimg from '../assets/profileimage.jpg'

const ProfileLookup = () => {
  return (
    <div id="profilelookup" className='flex flex-wrap justify-evenly p-10'>
        <div className='my-10'>
            <h1 className='text-5xl mb-5' >Hello, <br/> I'm Swetha <br/>Software Developer</h1>
            <a href='#contact' className='bg-orange-500 rounded-md px-4 py-2 mx-2'>Contact</a>
            <a className='bg-orange-500 rounded-md px-4 py-2 mx-2 ' href='#about'>Resume</a>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-yellow-400 rounded-xl">
          <img src={profileimg} alt="profile image avatar" className='m-5 mx-auto' width="85%" />
        </div>
    </div>  
  )
}

export default ProfileLookup;