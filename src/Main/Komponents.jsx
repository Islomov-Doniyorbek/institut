import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Links from './Links'
import News from './News'
import UnInfo from './UnInfo'
import Events from './Events'
import About from './About'
import ForStudents from './ForStudents'
import UniMap from './UniMap'
const Komponents = () => {
  return (
        <div className='main'><Navbar/>
    <Main/>
    <News/>
    <Links/>
    <UnInfo/>
    <Events/>
    <About/>
    <ForStudents/>
    <UniMap/>
    </div>
  )
}

export default Komponents
