import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { HiDownload } from 'react-icons/hi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Article = () => {
  const {t}=useTranslation()
  return (
    <div className='activ'>
         <ActiveTopPage pageTitle={t("journals")} />
       <div className='active_padd'>
       <div className='active_box'>
   <div className='active_img council_img'>
   <h2>{t("journals")}</h2>
 <p>{t("scientific_journals_info")}</p>
<div className='article_text'>
<h1>{t("latest_scientific_articles")}</h1>
<div className='download_box'>
<div className='download'>
<span>1.</span>
<h3>{t("mesi_bulletin")}</h3>
<button><span><HiDownload /></span>{t("download")}</button>
</div>

<div className='download'>
<span>1.</span>
<h3>{t("mesi_bulletin")}</h3>
<button><span><HiDownload /></span>{t("download")}</button>
</div>
<div className='download'>
<span>1.</span>
<h3>{t("mesi_bulletin")}</h3>
<button><span><HiDownload /></span>{t("download")}</button>
</div>
</div>
</div>

   </div>
   <div className='active-alw'>
<ContactComp/>
</div>
       </div>

       </div>
   
       <div className="active_connect">
  <h1>{t("contact_for_more")}</h1>
  <button>{t("contact_button")} <span><FiPhoneCall /></span></button>
       </div>
       </div>
  )
}

export default Article
