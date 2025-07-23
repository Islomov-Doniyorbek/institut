import React from 'react'
import event from '../../src/Images/events.jpg'
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import Container from '../components/Container'
function Events() {
  return (
    <Container>
      <div className='event'>
        <h1>Tadbirlar</h1>
        <div className='event_line'>
          <p></p>
        </div>
        <div className='event_row'>

          <div className='event_card'>
          <img src={event}/>
          <div className='event_text'>
            <h2>“Jadidlar. Turkistonga maktublar” multimedia koʻrgazmasiga tashrif</h2>
          </div>
            <div className='event_icons'>
            <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
            <p><span><FaRegClock /></span>15:00 to 16:00</p>
            <p><span><SlLocationPin /></span>Toshkent, Estrada insitutiti</p>
            </div>
          </div>


        <div className='event_card'>
        <img src={event}/>
        <div className='event_text'>
        <h2>“Raqamli dunyoda talaba-yoshlarning psixologik salomatligi: muammolar va yechimlar” mavzusida seminar</h2>
        </div>
        <div className='event_icons'>
        <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
        <p><span><FaRegClock /></span>15:00 to 16:00</p>
        <p><span><SlLocationPin /></span>Toshkent, Estrada insitutiti</p>
        </div>
        </div>


        <div className='event_card'>
        <img src={event}/>
        <div className='event_text'>
        <h2>Milliy qadriyatlar sayli doirasida “Milliy libos – millat qiyofasi, milliy iftixor ifodasi” ko‘rik-tanlovi o‘tkaziladi</h2>
        </div>
        <div className='event_icons'>
        <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
        <p><span><FaRegClock /></span>15:00 to 16:00</p>
        <p><span><SlLocationPin /></span>Toshkent, Estrada insitutiti</p>
        </div>
        </div>


        </div>
        <div className='news_button'>
             <button>Barcha yangiliklar</button>
          </div>
        </div>
    </Container>
  )
}


export default Events
