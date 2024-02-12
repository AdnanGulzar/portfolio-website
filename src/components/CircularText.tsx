"use client"
import ReactCurvedText from 'react-curved-text';   
import { motion } from 'framer-motion';


const CircularText = () => {
  return (
    <motion.section  className='absolute top-[50px] right-7 '>
    <ReactCurvedText
    width={100}
    height={100}
    cx={50}
    cy={50}
    rx={40}
    ry={40}
    reversed={false}
    text="Full Stack Developer"
    textProps={{ style: { fontSize: 16} }}
    textPathProps={{"fill": "#4D5BCE"}}
  
    svgProps={{ className: "rotating-curved-text" }}
/>
</motion.section>
  )
}

export default CircularText