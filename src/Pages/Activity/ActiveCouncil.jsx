import React from 'react'

import {  FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
const ActiveCouncil = () => {
  return (
       <div className='activ'>
         <div className='active_top'>
       <h1>Ilmiy kengashlar</h1>
       <p>Bosh sahifa - Ilmiy kengashlar</p>
       </div>
       <div className='active_padd'>
       <div className='active_box'>
   <div className='active_img council_img'>
   <h2>Ilmiy loyihalar</h2>
   <span></span>
   <p>Botir Zokirov nomidagi Milliy estrada san’ati institutining ilmiy loyihalari haqida ma’lumot.</p>
   </div>
   <ContactComp />
       </div>

       </div>
   
       <div className="active_connect">
   <h1>Qo‘shimcha ma’lumot olish uchun institut matbuot xizmatiga murojaat qiling</h1>
   <button>Bog'lanish <span><FiPhoneCall /></span></button>
       </div>
       </div>
  )
}

export default ActiveCouncil
