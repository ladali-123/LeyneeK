import React from 'react'
import Navbar from './components/Navbar'
import Move from './components/Move'
import Carousel from './components/Carousel'
import About from './components/About'
import Produst from './components/produst'
import Services from './components/Services'
import Brand from './components/Brand'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Move/>
      <Carousel/>
      <About/>
      <Produst/>
      <Services/>
      <Brand/>
      <Footer/>
    </div>
  )
}

export default App
