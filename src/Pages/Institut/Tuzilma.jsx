import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import tuzilma from '../../institutinges/photo_2025-08-28_15-11-50.jpg'

const Tuzilma = () => {
  return (
    <div>
      <ActiveTopPage pageTitle={"Institut tuzilmasi"}/>
    <div className='tuzilma_img'>
<img src={tuzilma}/>
    </div>
    </div>
  )
}

export default Tuzilma
