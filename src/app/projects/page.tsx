import PageTransition from '@/components/PageTransition'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const page = () => {
  return (
    <><PageTransition/>
    <section className='w-full min-h-[80vh] border-border border-l-2 mb-16' >
    <div className='p-3 capitalize text-3xl'>projects</div> 
    <section className="flex w-full  h-full flex-wrap items-center  justify-items-start gap-3  px-5 justify-center">

    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
   
     
    
    </section>

    </section>
    </>
  )
}

export default page