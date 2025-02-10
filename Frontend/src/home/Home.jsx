import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <div className=' '>
              <Navbar/>
              <Banner/>
              <Freebook/>
              <Footer/>
              
            </div>
    </div>
  )
}

export default Home