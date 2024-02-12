import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <footer className='flex flex-row justify-between items-center border  rounded-b-lg border-border py-1 relative'>
      <div className='flex flex-row'>
            <h1 className='text-md  text-center text-primary px-3 border-x  h-full border-border'>
             Find me in
            </h1>    
          
              <div className='border-x  w-10 text-center px-2  border-border'><FontAwesomeIcon  icon={faLinkedinIn} color='#607B96' /></div>
              <div className='border-x  w-10 text-center px-2 border-border'><FontAwesomeIcon  icon={faFacebook}  color='#607B96'/></div>
              <div className='border-x  w-10 text-center px-2 border-border'><FontAwesomeIcon  icon={faWhatsapp}  color='#607B96'/></div>
             
              </div>
              <div className='border-x  w-10 text-center px-2 border-border'><FontAwesomeIcon  icon={faGithub}  color='#607B96'/></div>
          </footer>
  )
}

export default Footer