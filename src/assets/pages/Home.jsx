import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboute from '../components/Aboute'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='lg:px-20' ><Navbar />
    <Hero/>
    <Aboute />
    <Footer />
    </div>
  )
}

export default Home