import React from 'react'
import { FaCalendarAlt, FaFacebook, FaLinkedin, FaPhone, FaRegClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { LiaTelegram } from 'react-icons/lia'

const EventInner = () => {
  return (
    <div className='event_inner'>
      <div className='event_inner_box'>
<h1>“Raqamli dunyoda talaba-yoshlarning psixologik salomatligi: muammolar va yechimlar” mavzusida seminar</h1>
<div className='event_inner_text'>
<div className='event_inner_img'>
<div className='event_inner_icon'>
  
<div className='event_inner_icon_card'>
<p><span><FaRegClock /></span>10:00 to 15:30</p>
</div>
<div className='event_inner_icon_card'>
<p><span><FaPhone /></span>212 497 5686</p>
</div>
<div className='event_inner_icon_card'>
<p><span><FaCalendarAlt /></span>10/22/2024 - 10/23/2024</p>
</div>
<div className='event_inner_icon_card'>
<p><span><FaLocationDot /></span>Toshkent, Estrada insitutiti</p>
</div>
</div>
</div>


<p className='event_innner_p'>Joriy yilning 22-23-noyabr kunlari Respublika Oliy ta’lim muassasalarida faoliyat ko‘rsatib kelayotgan psixologlar uchun bilim va tajribalarni  o‘zaro almashish  maqsadida  Urganch davlat universitetida “Raqamli dunyoda talaba-yoshlarning psixologik salomatligi: muammolar va yechimlar” mavzusida seminar o‘tkazildi.

Buyruq asosida, ma’ruzalar bilan bir qatorda amaliy mashg‘ulotlar ham o‘tkazilib, guruhlarga ajratilgan holda tajribali psixologlar amaliy mashg‘ulotlarni olib bordilar.

Ushbu seminarda Botir Zokirov nomidagi Milliy estrada san’ati institutining psixologi M.Mahkamova ham ishtirok etdi.</p>

<div className='event_inner_share'>
<h1>Uzatish</h1>
<div className='event_share_icon'>
<button><LiaTelegram /></button>
<button><FaFacebook /></button>
<button><FaLinkedin /></button>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default EventInner