import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaRegClock } from 'react-icons/fa'

const HistoryEvent = () => {
    const {t}=useTranslation()
  return (
     <div className='history_news'>
        <h1>{t("history_news_page_title")}</h1>
        <div className='tarixiy_box'>
            <h1>{t("events")}</h1>
    <div className='tarixiy_row'>
  <div className='tarixiy_card'>
     <div className='tarixiy_card_img'></div>
  <div className='tarixiy_card_text'>
  <h2>{t("history_news_card_title")}</h2>
  <p><span><FaRegClock /></span>{t("history_news_card_date")}</p>
  </div>
  </div>
    
 <div className='tarixiy_card'>
    <div className='tarixiy_card_img'></div>
 <div className='tarixiy_card_text'>
 <h2>{t("history_news_card_title")}</h2>
 <p><span><FaRegClock /></span>{t("history_news_card_date")}</p>
 </div>
 </div>
    
  <div className='tarixiy_card'>
     <div className='tarixiy_card_img'></div>
  <div className='tarixiy_card_text'>
  <h2 >{t("history_news_card_title")}</h2>
  <p><span><FaRegClock /></span>{t("history_news_card_date")}</p>
  </div>
  </div>
    
    </div>
        </div>
            </div>
  )
}

export default HistoryEvent
