import React from 'react'
import Statistics from '../components/Statistics'
import Platforms from '../components/Platforms'
import { ProjectCard } from '../components/ProjectCard'

const projects = [
  {
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-03-15",
    members: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20
  },
  {
    name: "App Redesign",
    type: "App Development",
    date: "2024-03-15",
    members: ["John", "Bob", "Charlie"],
    files: 9,
    progress: 32
  },
  {
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-03-15",
    members: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20
  },
  {
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-03-15",
    members: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20
  }
]

const Home = () => {
  return (
    <div className='w-full p-2 md:p-4'>
      <div className='grid md:grid-cols-4 xl:grid-cols-4 gap-4'>
        <Statistics />
        <Platforms />
        <Statistics />
        <Platforms />
      </div>

      <div>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className='text-sm underline text-indigo-600'>See all</p>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {
            projects && projects.map((project, index)=> <ProjectCard key={index} project={project}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home