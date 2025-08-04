import React from 'react'

import {  FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
const ActiveCouncil = () => {
  return (
       <div className='activ'>
         <ActiveTopPage pageTitle={"Ilmiy kengashlar"} />

       <div className='active_con'>
<div className='conuncil_row'>
<h1>Ilmiy kengashlar</h1>
<p>Botir Zokirov nomidagi Milliy estrada san’ati institutining ilmiy kengashlar haqida ma’lumot.</p>
</div>
<div className='active_contect'>
  <ContactComp/>
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
