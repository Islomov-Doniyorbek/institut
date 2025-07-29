import React from 'react'
import error from '../../Images/2104.i301.004.S.m004.c13.404 error isometric composition.jpg'
const Laststudents = ({pageTitle}) => {
  return (
    <div>
      <div className='callcenter_top_text'>
        <h1>Bitiruvchilar</h1>
        <p>Bosh sahifa - {pageTitle}</p>
        </div>
         <div className='achiv_img'>
        <img src={error}/>
              </div>
    </div>
  )
}

export default Laststudents
