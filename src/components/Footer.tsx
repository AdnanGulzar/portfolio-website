import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import CircularText from './CircularText'


const Footer = () => {
  return (
    <footer className='flex flex-row justify-between items-center border  rounded-b-lg border-border py-1 relative'>
      <div className='flex flex-row'>
            <h1 className='text-md  text-center text-primary px-3 border-x  h-full border-border'>
             Find me in
            </h1>    
          
              <li className='border-x  w-10 text-center px-2  border-border'><FontAwesomeIcon  icon={faLinkedinIn} color='#607B96' /></li>
              <li className='border-x  w-10 text-center px-2 border-border'><FontAwesomeIcon  icon={faFacebook}  color='#607B96'/></li>
              <li className='border-x  w-10 text-center px-2 border-border'><FontAwesomeIcon  icon={faWhatsapp}  color='#607B96'/></li>
             
              </div>
              <li className='border-x  w-10 text-center px-2 border-border'><FontAwesomeIcon  icon={faGithub}  color='#607B96'/></li>
          </footer>
  )
}

export default Footer