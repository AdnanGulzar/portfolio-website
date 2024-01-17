"use client"
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
   <>
   <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-red-500'  
   initial={{x:"100%",width:"100%"}}
   animate={{x:"0%",width:"0%"}}
   transition={{duration:1,ease:"backInOut"}}
   exit={{x:["0%","100%"],width:["0%","100%"]}}
   />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-green-500'  
   initial={{x:"100%",width:"100%"}}
   animate={{x:"0%",width:"0%"}}
   transition={{delay:0.2, duration:1,ease:"backInOut"}}
   />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-blue'  
   initial={{x:"100%",width:"100%"}}
   animate={{x:"0%",width:"0%"}}
   transition={{delay:0.4,duration:1,ease:"backInOut"}}
   />

   
   
   
   
   </>
  )
}

export default PageTransition