import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../Images/active2.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
const OtherNews = () => {
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
    <div className='other_news_btn'>
<button>Batafsil</button>
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
  
            <div className='active_text_box allnews_right_text'>
              <h1>Hurmatli foydalanuvchi!</h1>
              <p>
                Institut haqida qoʻshimcha ma’lumot olish uchun info@estrada-art.uz elektron pochta manziliga
                xabar yuboring yoki +998 71 200 00 00 raqamiga qoʻngʻiroq qiling.
              </p>
              <button><span><FiPhoneCall /></span>Bog'lanish</button>
            </div>
  
            <div className='archive'>
              <h2>Arxiv</h2>
              <p>Sentabr <span>Yangiliklar: 2</span></p>
              <p>Oktabr <span>Yangiliklar: 5</span></p>
              <p>Noyabr <span>Yangiliklar: 8</span></p>
            </div>
  
            <div className='new_article'>
              <h1>Yangi maqolalar</h1>
              <h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.</h2>
              <h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.</h2>
              <h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.</h2>
              <h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.</h2>
            </div>
          </div>
    </div>
  )
}

export default OtherNews
