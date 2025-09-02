import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../../ImagesStatik/behbudiy.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Newsrep from '../Newsrep'
import ContactComp from '../../../components/contactComp'
const OtherNewsInner4 = () => {
  return (
  <div className='news_inner oter_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>
<div className='other_news_box'>
<h1>“Mahmudxo’ja Behbudiy saboqlari” mavzusida insholar tanlovi o’tkaziladi; </h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>04/27/2025</p>
<h2><p>Posted by:</p> estrada-conserva</h2>
<h2><p>Category:</p> E'lon</h2>
</div>
<div className='otherrr_img'>
    <img src={announcement2}/>
</div>
<div className='othernews_inner'>
<h1>Tanlov 3 bosqichda o’tkaziladi:
1-oliy ta’lim muassasasi bosqichi;
2- hududiy (yoki mintaqaviy) saralash bosqichi,
3- respublika final bosqichi
Tanlovning 1-oliy ta’lim muassasasi bosqichi mart oyida, 2- hududiy (yoki mintaqaviy) bosqichi aprel oyida, 3 - respublika final bosqichi aprel- may oylari davomida o’tkaziladi. 
Tanlovda ishtirokchilar o’zbek va qoraqalpoq tillarida (12 varaqli daftarda yoziladi) insho yozishlari mumkin.
Ishtirokchilar “Mahmudxo’ja Behbudiy saboqlari” mavzusida insho yozadilar. 
Yozilgan insholar quyidagi baholash mezonlar asosida baholanadi:
- mavzuning to’laqonli ochib berilganligi-20 ball;
- jadidning jasorati, meros bo’lib qoldirgan asarlari va g’oyalari fidoyiligini ochib berilganligi- 
20 ball;
- imloviy savodxonligi, so’z boyligi va uslubiy mahorat- 20 ball;
-jadidning Vatanga sadoqatli vatanparvar insonlar qilib tarbiyalashdagi fikr-qarashlarini ochib berilganligi -20 ball;
- ishtirokchining xulosaviy fikrlari mavjudligi hamda ularni ifoda etish mahorati- 20 ball.
Tanlovning yakuniy respublika bosqichida eng yuqori ball to’plab ballar ketma-ketligida g’olib bo’lgan ishtirokchilar Oliy ta’lim, fan innovatsiyalar vazirligi tomonidan vazirlikning diplomi hamda Oliy ta’lim muassasalarini rivojlantirish jamg’armasi mablag’lari hisobidan quyidagi tartibda;
1-o’rin - 8.000.000 so’m;
2-o’rin - 6.000.000 so’m;
3-o’rin - 4.000.000 so’m miqdorda pul mukofotlari bilan taqdirlanadi.
Tanlov 27 mart soat 12:00 da kutubxonada o’tkaziladi.
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

export default OtherNewsInner4
