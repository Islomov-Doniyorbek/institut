import React from 'react'
import './Active.css'

import active2 from '../../Images/active2.jpg'
import { Carousel } from 'antd'
import { FaBook, FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { LuMusic4 } from 'react-icons/lu'
import { HiMusicNote } from 'react-icons/hi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'
const Activity = () => {
  const {t}=useTranslation()
  return (
    <div className='activ'>
      <ActiveTopPage pageTitle={t("research")} />
    <div className='active_padd'>
    <div className='active_box'>
<div className='active_img'>
<img src={active2}/>
</div>
<div className='active-alw'>
<ContactComp/>
</div>
    </div>

    <div className='active_bottom'>
  <h1>{t("research_title")}</h1>
<p></p>
<div className='active_bottom_text'>
  <span>{t("research_about")}</span>
 <span>{t("research_directions")}</span>
</div>



<div className='active_bottom_box'>


<div className='links_col active_col'>
  <div className='link_icon active_col_icon'>
<span className='link_inner'><FaBook /></span>
</div>
<div className='link_texts active_text_col'>
     <h2>{t("research_modern_instruments")}</h2>
   <b>{t("research_modern_instruments")}</b>
</div>
</div>

<div className='links_col active_col'>
  <div className='link_icon active_col_icon'>
<span className='link_inner'><HiMusicNote /></span>
</div>
<div className='link_texts active_text_col'>
 <h2>{t("research_modern_genres")}</h2>
 <b>{t("research_modern_genres")}</b>
</div>
</div>


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

export default Activity;

