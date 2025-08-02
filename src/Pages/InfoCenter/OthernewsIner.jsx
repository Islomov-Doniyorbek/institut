import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../Images/active2.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Newsrep from './Newsrep'
import ContactComp from '../../components/contactComp'
const OthernewsIner = () => {
  return (
  <div className='news_inner oter_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>



<div className='other_news_box'>
<h1>“Mening Konstitutsiyam” viktorinasida qatnashib, bilimingizni sinovdan o‘tkazing! </h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>04/24/2025</p>
<h2><p>Posted by:</p> estrada-conserva</h2>
<h2><p>Category:</p> E'lon</h2>
</div>
<div className='otherrr_img'>
    <img src={announcement2}/>
</div>
<div className='othernews_inner'>
<h1>Oliy ta’lim, fan va innovatsiyalar vazirligi hamda Vazirlik huzuridagi Talaba va o‘quvchilarning ijtimoiy faolligini oshirish markazi 8-dekabr – O‘zbekiston Respublikasi Konstitutsiyasi qabul qilingan kun munosabati bilan “Mening Konstitutsiyam” onlayn viktorinasini e’lon qiladi.

Viktorinada respublikamizdagi oliy ta’lim tashkilotlari va professional ta’lim muassasalarining barcha talaba-yoshlari ishtirok etishi mumkin.

Viktorinada ishtirokchilarga “Google Form” platformasi orqali Konstitutsiyaga oid 50 ta test savollari beriladi. Testlarni ishlash uchun 50 daqiqa vaqt belgilanadi.

Viktorina savollariga eng birinchi va to‘g‘ri javob bergan ishtirokchilar viktorina g‘olibiga aylanadi. 1-, 2- va 3-o‘rin egalari Oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan diplom va qimmatbaho sovg‘alar bilan, qolgan 10 nafar yuqori natija ko‘rsatgan ishtirokchilar esa vazirlikning faxriy yorlig‘i bilan taqdirlanadi.
</h1>

<p>Eslatib o‘tamiz, test savollari havolasi 6-dekabr kuni soat 20:00 da @manaviyateduuz Telegram sahifasi orqali e’lon qilinadi.</p>
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

export default OthernewsIner
