"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Name = () => {
  return (
<Typewriter
            words={['Full Stack Developer', 'Mern Stack Developer','Reactjs Developer','FrontEnd Developer']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
  )
}

export default Name