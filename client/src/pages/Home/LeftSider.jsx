import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 pl-10 sm:static sm:pb-5">
         <div className="flex flex-col items-center">
         <div className="flex flex-col gap-3 sm:flex-row">
          <a href='#'><FacebookOutlinedIcon  className='text-gray-400 text-xl hover:text-white cursor-pointer'/></a>
          
         <a href='#'> <MailIcon  className='text-gray-400 text-xl hover:text-white cursor-pointer'/></a>
         <a href='https://www.instagram.com/durgaprasad20/'> <InstagramIcon  className='text-gray-400 text-xl hover:text-white cursor-pointer'/></a>
         <a href='https://www.linkedin.com/in/durga-prasad-kumbhkar-bba60314a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <LinkedInIcon  className='text-gray-400 text-xl hover:text-white cursor-pointer'/></a>
         <a href='https://github.com/jnvdurga'> <GitHubIcon  className='text-gray-400 text-xl hover:text-white cursor-pointer' /></a>
         </div> 
         <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'></div>
         </div>
    </div>
  )
}

export default LeftSider
