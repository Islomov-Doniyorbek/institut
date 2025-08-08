import React from 'react'

import {  FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
import { HiDownload } from 'react-icons/hi'

const ActiveCouncil = () => {
  return (
       <div className='activ'>
         <ActiveTopPage pageTitle={"Ilmiy kengashlar"} />

       <div className='active_con'>
<div className='conuncil_row'>
<h1>Ilmiy kengashlar</h1>
<div className='article_text'>
<h1>Ilmiy kengashlar haqida</h1>
<div className='download_box kengash_box'>
  <div className='download '>
<span>1.</span>
<h3>Ilmiy Kengashlar</h3>
<button>
  <a
    href="/images/ILMIY-KENGASH.doc"
    download
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <span><HiDownload /></span> Yuklab olish
  </a>
</button>
</div>
</div>
</div>
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
