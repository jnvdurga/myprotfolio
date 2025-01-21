import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Project from './Project'
import Contact from './Contact'
import Fotter from './Fotter'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'

function Home() {
  const { portfolioData} = useSelector(state=>state.root)
  return (
    <div >
      <Header />
       
      { portfolioData && <div className='bg-primary px-40 sm:px-5 sm:max-w-full'>
      <Intro />
      <About />
      <Experiences />
      <Project />
      <Contact />
      <Fotter />
      <LeftSider />
      </div>}

    </div>
  )
}

export default Home
