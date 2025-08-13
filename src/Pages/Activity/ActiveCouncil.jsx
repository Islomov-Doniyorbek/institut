import React from 'react'

import {  FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
import { HiDownload } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

const ActiveCouncil = () => {
    const {t}=useTranslation()
  return (
       <div className='activ'>
         <ActiveTopPage pageTitle={t("councils")} />

       <div className='active_con'>
<div className='conuncil_row'>
 <h1>{t("scientific_councils")}</h1>
<div className='article_text'>
  <h1>{t("about_scientific_councils")}</h1>
<div className='download_box kengash_box'>
  <div className='download '>
<span>1.</span>
  <h3>{t("scientific_councils_title")}</h3>
<button>
  <a
    href="/images/ILMIY-KENGASH.doc"
    download
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <span><HiDownload /></span>{t("download")}
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
  <h1>{t("contact_for_more")}</h1>
  <button>{t("contact_button")} <span><FiPhoneCall /></span></button>
       </div>
       </div>
  )
}

export default ActiveCouncil
