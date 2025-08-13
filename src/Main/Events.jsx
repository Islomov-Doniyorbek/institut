import React from 'react'

import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import Container from '../components/Container'
import { useTranslation } from 'react-i18next'
function Events() {
    const {t }=useTranslation()
  return (
    <Container>
      <div className='event'>
        <h1>{t("event")}</h1>
        <div className='event_line'>
          <p></p>
        </div>
        <div className='event_row'>

          <div className='event_card'>
         <div className='eventt_img'></div>
          <div className='event_text'>
            <h2>{t("jadidlar")}</h2>
          </div>
            <div className='event_icons'>
            <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
            <p><span><FaRegClock /></span>15:00 to 16:00</p>
            <p><span><SlLocationPin /></span>{t("eve-locat")}</p>
            </div>
          </div>


        <div className='event_card'>
           <div className='eventt_img'></div>
        <div className='event_text'>
        <h2>{t("jadidlar")}</h2>
        </div>
        <div className='event_icons'>
        <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
        <p><span><FaRegClock /></span>15:00 to 16:00</p>
        <p><span><SlLocationPin /></span>{t("eve-locat")}</p>
        </div>
        </div>


        <div className='event_card'>
         <div className='eventt_img'></div>
        <div className='event_text'>
        <h2>{t("jadidlar")}</h2>
        </div>
        <div className='event_icons'>
        <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
        <p><span><FaRegClock /></span>15:00 to 16:00</p>
        <p><span><SlLocationPin /></span>{t("eve-locat")}i</p>
        </div>
        </div>


        </div>
        <div className='news_button'>
             <button>{t("all_new")}</button>
          </div>
        </div>
    </Container>
  )
}


export default Events
