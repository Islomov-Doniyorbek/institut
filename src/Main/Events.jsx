import React from 'react'

import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import Container from '../components/Container'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
function Events() {
const navigate = useNavigate()
    const {t }=useTranslation()
    const handleChange =()=>{
navigate("/News/Events/EventsInner")
    }
    const handleChanges =()=>{
      navigate("/News/Events/EventsInner2")
          }


          const handleStat =()=>{
            navigate("/News/Events/EventsInner3")
                }

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
            <h2 onClick={handleChange}>{t("jadidlar")}</h2>
          </div>
            <div className='event_icons'>
            <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
            <p><span><FaRegClock /></span>15:00 to 16:00</p>
            <p><span><SlLocationPin /></span>{t("eve-locat")}</p>
            </div>
          </div>


        <div className='event_card'>
           <div className='eventt_img eventt_img_stat2'></div>
        <div className='event_text'>
        <h2 onClick={handleChanges}>{t("raqamli_texnalo")}</h2>
        </div>
        <div className='event_icons'>
        <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
        <p><span><FaRegClock /></span>15:00 to 16:00</p>
        <p><span><SlLocationPin /></span>{t("eve-locat")}</p>
        </div>
        </div>


        <div className='event_card'>
         <div className='eventt_img eventt_img_stat3'></div>
        <div className='event_text'>
        <h2  onClick={handleStat}>{t("milliy_liboslar")}</h2>
        </div>
        <div className='event_icons'>
        <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
        <p><span><FaRegClock /></span>15:00 to 16:00</p>
        <p><span><SlLocationPin /></span>{t("eve-locat")}i</p>
        </div>
        </div>


        </div>
        <div className='news_button'>
             <button onClick={()=>navigate("/News/Events")}>{t("all_events")}</button>
          </div>
        </div>
    </Container>
  )
}


export default Events
