import React from 'react'
import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className='w-72  bg-[#010C15] flex flex-col gap-3 justify-center  items-start rounded-2xl overflow-hidden shadow-2xl'>
        <div className='w-full h-36  object-cover'>

        <Image
        src={"/snake.svg"}
        alt='sdfs'
        width={300}
        height={300}
        className='h-full object-cover'
        />
        </div>
    <h1 className='px-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fugit.
    </h1>
    <button className=" m-3 bg-blue hover:opacity-70 font-bold py-1 px-2 rounded inline-flex items-center">
  
  <span>View Project</span>
</button>
  </div>
  )
}

export default ProjectCard