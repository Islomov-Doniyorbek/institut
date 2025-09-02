import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../../ImagesStatik/vatan.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Newsrep from '../Newsrep'
import ContactComp from '../../../components/contactComp'
const OtherNewsInner2 = () => {
  return (
  <div className='news_inner oter_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>



<div className='other_news_box'>
<h1>“Vatanni madh etib” nomli eng yaxshi videoroliklar tanlovi o’tkaziladi. </h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>05/30/2025</p>
<h2><p>Posted by:</p> estrada-conserva</h2>
<h2><p>Category:</p> E'lon</h2>
</div>
<div className='otherrr_img'>
    <img src={announcement2}/>
</div>
<div className='othernews_inner'>
<h1>Tanlangan mavzu quyidagi yo’nalishlardan biriga bo’lishi talab etiladi: 
-milliylikni targ’ib qilish, ularni milliy merosimiz va qadimiy urf- odatlarimiz bilan yaqindan tanishtirishga qaratilgan bo’lishi;
- yoshlarda harbiy vatanparvarlik ruhini oshirishga qaratilgan bo’lishi;
- O’zbekistonning tarixi va bugungi kuni hozirgi kunda amalga oshirilayotgan keng ko’lamli islohotlar haqida bo’lishi kerak; 
Taqdim etilayotgan videoroliklar soni 1 ta, davomiyligi 30 soniyadan - 1:00 daqiqagacha MPEG - 4 formatda;
- videorolik tasvirida 70-80 foizgacha jamoa (yoki yakka tartibda) a’zolarining aks ( ko’rinishi) etishi shart.
Tanlov g’oliblarini taqdirlash: “Vatanni madh etib” nomli eng yaxshi videoroliklar tanlovning final bosqichida 1-,2-,3- o’rinni egallagan ishtirokchi yoki jamoalar Oliy ta’lim fan va innovatsiyalar vazirligi tomonidan vazirlikning diplomi hamda oliy ta’lim muassasalarini rivojlantirish jamg’armasi mablag’lari hisobidan quyidagi tartibda:
✅1- o’rin 20 million so’m
✅2- o’rin 15 million so’m
✅3- o’rin 10 million so’m pul mukofotlari bilan taqdirlanadi.
Hujjatlar 30-aprel kuniga qadar qabul qilinadi. 
Hujjatlarni @Gulishka777 yuborishingiz so’raladi.
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

export default OtherNewsInner2
