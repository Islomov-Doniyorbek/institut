import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegClock } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdNewspaper } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function News() {
const navigate = useNavigate()
        const {t }=useTranslation()
const onChange =()=>{
      navigate("/News/Allnews/AllmewsInner")
}

  return (
 <div className='news'>
      <h1>{t("yang_va_elo")}</h1>
      <div className='news_row'> 
   

     <div className='news_card'> 
<div className='news_img'>
 </div>
<div className='news_text'>
<h2 onClick={onChange}>{t("yangi_text")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>
      
            <div className='news_card'> 
<div className='news_img  yangilik_stat_rasm1'>
 </div>
<div className='news_text'>
<h2>{t("yangi_text_stat2")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>
       
       
                 <div className='news_card'> 
<div className='news_img  yangilik_stat_rasm2'>
 </div>
<div className='news_text'>
<h2>{t("yangi_text_stat3")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>


              <div className='news_card'> 
<div className='news_img yangilik_stat_rasm3'>
 </div>
<div className='news_text'>
<h2>{t("yangi_text_stat4")}
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>{t("yang")}</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>

      </div>
<div className='news_button'>
      <button onClick={() => navigate("/News/Allnews")}>{t("all_new")}</button>
      </div>
    </div>
  )
}


export default News
