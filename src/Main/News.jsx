import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegClock } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdNewspaper } from 'react-icons/md'

function News() {
        const {t }=useTranslation()
  return (
 <div className='news'>
      <h1>{t("yang_va_elo")}</h1>
      <div className='news_row'> 
     <div className='news_card'> 
<div className='news_img'>
 
</div>
<div className='news_text'>
<h2>{t("yangi_text")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>

            <div className='news_card'> 
<div className='news_img'>
 
</div>
<div className='news_text'>
<h2>{t("yangi_text")} 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>
       
       
                 <div className='news_card'> 
<div className='news_img'>
 
</div>
<div className='news_text'>
<h2>{t("yangi_text")} 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>


              <div className='news_card'> 
<div className='news_img'>
 
</div>
<div className='news_text'>
<h2>{t("yangi_text")} 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>

      </div>
<div className='news_button'>
      <button>{t("all_new")}</button>
      </div>
    </div>
  )
}


export default News
