const Skill=({name}:{name:string}): React.ReactNode=>{
    return (
        <div className="skill-orbit border border-solid border-gray-200 rounded-full box-border absolute inset-0 m-auto transition-all duration-3000 perspective-900">
        <div className="skill-planet w-[30px] h-[30px] rounded-full absolute top-[-15px] left-0 right-0 m-auto font-sans font-thin text-center box-border transition-all duration-1000"><span className='block'>{name}</span></div>
    </div>
    )
}
import React ,{ CSSProperties, HTMLAttributes, RefAttributes, RefObject } from 'react'
const Skills = () => {
  

  
  return (
    <div className="hidden sm:block w-[100%] aspect-square relative mx-auto my-10 pointer-events-fill cursor-pointer perspective-900 ">
      <div className=" skills-circle max-w-[400px] aspect-square absolute inset-0 m-auto rounded-full transition-all duration-1000  ">
         <Skill name="React"/>
         <Skill name="JavaScript"/>
         <Skill name="Nodejs"/>
         <Skill name="Expressjs"/>
         <Skill name="Nextjs"/>
         
        
      </div>
      <div className="absolute inset-0 m-auto w-[40px] h-[40px] rounded-full"> WEB</div>
  </div>
   
  )
}

export default Skills