"use client"
import { AnimatePresence } from 'framer-motion'

const AnimationProvider = ({
    children
  }: {
    children: React.ReactNode
  }) => {
  return (
    <AnimatePresence mode='wait'>

    {children}


    </AnimatePresence>
  )
}

export default AnimationProvider