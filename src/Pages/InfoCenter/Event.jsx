import React from 'react'

import { MdNewspaper } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'
const Event = () => {
const navigate = useNavigate();

const handleClick = () => {
  navigate('/News/Allnews/EventInner');
};
   const {t }=useTranslation()

  return (
    <div className='eventss'>
          <ActiveTopPage pageTitle={t("event")} />
    <div className='eventss_row'>
     <div className='news_card eventss_card ' onClick={handleClick} style={{ cursor: 'pointer' }}> 
<div className='news_img'>
 
</div>
<div className='news_text eventss_text'>
<h2>{t("jadidlar")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><FaLocationDot /></span>{t("eve-locat")}</p>
</div>
      </div>


       <div className='news_card eventss_card '> 
<div className='news_img'>
 
</div>
<div className='news_text eventss_text'>
<h2>{t("jadidlar")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><FaLocationDot /></span>{t("eve-locat")}</p>
</div>
      </div>


       <div className='news_card eventss_card '> 
<div className='news_img'>
 
</div>
<div className='news_text eventss_text'>
<h2>{t("jadidlar")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><FaLocationDot /></span>{t("eve-locat")}</p>
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

export default Event
