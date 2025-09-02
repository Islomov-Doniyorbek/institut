import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../../ImagesStatik/mirzo.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Newsrep from '../Newsrep'
import ContactComp from '../../../components/contactComp'
const OtherNewsInner5 = () => {
  return (
  <div className='news_inner oter_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>
<div className='other_news_box'>
<h1>“Mirzo Ulug’bek vorislari” Respublika tanlovi o’tkaziladi: </h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>00/00/2025</p>
<h2><p>Posted by:</p> estrada-conserva</h2>
<h2><p>Category:</p> E'lon</h2>
</div>
<div className='otherrr_img'>
    <img src={announcement2}/>
</div>
<div className='othernews_inner'>
<h1>Mazkur tanlovda o’zining ilmiy g’oyalari, innovatsion ishlanmalari hamda ratsionalizatorlik takliflari mavjud 16 yoshdan 25 yoshgacha bo’lgan O’zbekiston fuqarolari ishtirok etishlari mumkin.
Tanlov 2- bosqichda o’tkaziladi:
1-bosqich (tuman, shaharlar bosqichida) jami 5nafardan g’oliblar;
2- bosqich Toshkent shahrida jami 20 nafardan g’oliblar aniqlanib , ularga mos ravishda bazaviy hisoblash miqdorining 5,10 baravari miqdorida bir martarlik pul mukofoti bilan taqdirlanadi. 
Tanlovning Respublika bosqichida har bir hududdan 20 nafardan g’oliblar aniqlanib, bazaviy hisoblash miqdorining 20 baravari miqdorida bir martalik pul mukofoti bilan taqdirlanadi.                 
(ro‘yxatdan o‘tish www.vorislar.uz veb-sayti orqali).

</h1>

<p>✅https://t.me/BZokirovnomidagiMESI</p>
</div>
</div>


  </div>
    <div className='allnews_right news_inner_right other_news_right'>
            <div className='section'>
              <h1>Bo‘limlar</h1>
              <div className='section_row'>
                <p>Yangiliklar</p>
                <p>E'lonlar</p>
              </div>
            </div>
  
            <ContactComp/>
  
<Newsrep/>
          </div>
    </div>
  )
}

export default OtherNewsInner5
