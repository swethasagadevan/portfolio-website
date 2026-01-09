import React from 'react'
import {FaGithubSquare, FaHeadset, FaLinkedin, FaUserAlt} from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import contactimg from '../assets/contact1.png'
import { FaMessage } from 'react-icons/fa6'
import axios from 'axios' 
import { useState } from 'react'


const Contact = () => {

  const backendurl =import.meta.env.VITE_BACKEND_URL; 

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [message,setMessage]=useState()

  function handleSubmit(e){
    e.preventDefault();
    axios.post(`${backendurl}contactus`,{name:name,email:email,message:message})
    .then((data)=>{
      if(data.data==true){
        alert("Thanks for reaching us. We will contact you shortly")
      }
      else{
        alert("Submission failed")
      } 
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div id="contact" >
      <div className='text-3xl p-4 flex gap-3 items-center font-bold justify-center'>
        <FaHeadset/>
        <h2> Get in <span>Touch</span></h2>
      </div>
    <div className='w-2/3  m-auto flex flex-wrap justify-center gap-10 p-5 border border-green-500 shadow-2xl mb-10 rounded-lg'>
      <img src={contactimg} alt=""/>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-3 items-center border-2 rounded-lg p-3 my-4'><FaUserAlt/><input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Name" className='focus:outline-none'/></div>
        <div className='flex gap-3 items-center border-2 rounded-lg p-3 mb-4'><IoMail/><input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className='focus:outline-none'/></div>
        <div className='flex gap-3 items-center border-2 rounded-lg p-3 mb-6'><FaMessage/><input type="text" name="message" onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className='focus:outline-none'/></div>
        <input type="submit" className='bg-orange-600 text-white p-2 rounded-lg' />
        <p className='mt-5'>or contact </p>
        <p className='flex items-center gap-1 text-blue-400'><IoMail/>swethasagadevan@gmail.com</p>
        <a href='https://www.linkedin.com/in/swethasagadevan/' className='text-blue-400 flex items-center gap-1'> <FaLinkedin/> LinkedIN </a>
        <a href='https://github.com/swethasagadevan' className='text-blue-400 flex items-center gap-1'> <FaGithubSquare/> GitHub</a>
      </form>
    </div>  
    </div>
  )
}

export default Contact;
