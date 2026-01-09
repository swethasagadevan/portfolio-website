import React from 'react'

//import {getProjectList} from '../assets/data'
import {FaLaptopCode,FaGithub,FaGlobe} from "react-icons/fa"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Project = () => {
  
  const backendurl = import.meta.env.VITE_BACKEND_URL;
  // const projectList =getProjectList()

  const [projectList,setProjectList]=useState([])

  useEffect(()=>{
    axios.get(`${backendurl}getProjects`)
    .then(data=>{
      console.log(data.data)
      setProjectList(data.data) 
    })
    .catch(()=>console.log("error"))
  },[])
  
    //console.log(projectList)
  return (
    <div id="projects" >
      <div className='text-3xl p-4 flex gap-3 items-center font-bold justify-center'>
      <FaLaptopCode/>
      <h2>Projects</h2>
      </div>
      <div className='md:grid grid-cols-2 bg-zinc-300 m-5 text-white'>
      {projectList.map((data,index)=>(
        <div key={index} className='border rounded-lg shadow-lg bg-black p-4 m-4 flex-1' width="100%">
          <h3 className='text-xl font-bold mb-2'>{data.name}</h3>
          <p>{data.description}</p>
          <div className='flex flex-wrap items-center gap-2 mt-2'>
            <FaGithub/>:
          <a href={data.gitLink} className='underline text-wrap italic text-blue-400'>{data.gitLink}</a>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
          <FaGlobe/>:
          <a href={data.liveLink} className='underline italic text-blue-400'>{data.liveLink}</a>
          </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Project
