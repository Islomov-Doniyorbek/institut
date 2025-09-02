import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../../ImagesStatik/elon1.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Newsrep from '../Newsrep'
import ContactComp from '../../../components/contactComp'
const OthernewsIner1 = () => {
  return (
  <div className='news_inner oter_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>



<div className='other_news_box'>
<h1>"Men giyohvandlikka qarshiman!” shiori ostida tanlov o'tkaziladi.</h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>05/10/2025</p>
<h2><p>Posted by:</p> estrada-conserva</h2>
<h2><p>Category:</p> E'lon</h2>
</div>
<div className='otherrr_img'>
    <img src={announcement2}/>
</div>
<div className='othernews_inner'>
<h1>Tanlov ikki (oliy ta'lim tashkiloti, respublika) bosqichda:
Oliy ta'lim tashkiloti bosqichi - fakultetlar o'rtasida o'tkaziladi;
Tanlov 3 ta yo'nalishda o'tkaziladi:
a adabiyot yo'nalishi- bunda talabalar tomonidan mavzuga doir o'zbek tilida yozilgan she'r, hikoya,esse, dramatik asar va insholar ko'rib chiqiladi;
b tasviriy san'at yo'nalishi-bunda talabalar tomonidan tayyorlangan mavzuga doir plakatlar, rasmlar, grafik ishlanmalar va boshqa tasviriy san'at turlari bo'yicha ijodiy ishlar ko'rib chiqiladi.
s foto yo'nalishi- bunda talabalar tomonidan tayyorlangan mavzuga doir foto hikoyalar (fotohikoyada suratlar soni 10 tadan oshmasligi lozim) ko'rib chiqiladi.

Tanlovning Respublika bosqichida har bir yo'nalish bo'yicha g'oliblikni qo'lga kiritgan to'rt nafar ishtirokchining har biri (faqat 1- o'rinlar) Oliy ta'lim fan va innovatsiyalar vazirligi tomonidan vazirlikning Oliy ta'lim muassasalarini rivojlantirish jamg'armasi mablag'lari hisobidan 6.000.000 so'm miqdorida pul mukofotlari hamda diplom va statuetka bilan rag'batlantiriladi.
Tanlov 10 aprel kuni o'tkaziladi.
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

export default OthernewsIner1

