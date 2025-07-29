import React, { useState } from 'react'
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import photos from '../../Images/events.jpg'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { Button, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import Newsrep from './Newsrep'
const EventInner = () => {

        const navigate = useNavigate();
    const handleNext = () => {
      navigate('/News/Allnews/Othernews');
    };

const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
  <div className='news_inner oter_inner event_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>



<div className='other_news_box'>
<h1>“Jadidlar. Turkistonga maktublar” multimedia koʻrgazmasiga tashrif</h1>
<div className='news_inner_info'>
<p><span><FaCalendarAlt /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><CiLocationOn /></span>Toshkent, Estrada insitutiti</p>

</div>
<div className='otherrr_img'>
        <img src={photos}/>
</div>
<div className='othernews_inner event_inner_text'>
   <h2>“Jadidlar. Turkistonga maktublar” multimedia koʻrgazmasiga tashrif</h2>
<h1>Botir Zokirov nomidagi Milliy estrada san’ati instituti  tyutorlari – X.Jo‘rayev, R.Shodiyev hamda D.Jo‘rayevlar boshchiligida talabalar Toshkent City Mall savdo markazida “Jadidlar. Turkistonga maktublar” nomli jadidlarning ta’lim va maorif tashabbuslariga bag‘ishlangan multimedia kо‘rgazmasiga tashrif buyurdilar.

5 bo‘linmadan iborat ko‘rgazmada Germaniyaga o‘qishga yuborilgan turkistonlik talabalarning tarixi, ilm yo‘lida zahmat chekkan bobolarimizning hayot yo‘li, qiyinchiliklari va ularning ezgu orzu-maqsadlari ochib berilgan. Talabalar ushbu sayohat davomida ko‘plab ma’lumotga ega bo‘ldilar. Multimedia asosida tashkil etilgan ushbu ko‘rgazma ularda unitilmas taassurot qoldirdi.
</h1>

</div>
<div className='event_inner_button'>
 <button type="primary" onClick={showModal}>
 Ro'yxatdan  o'tish
      </button>
      </div>
</div>


  </div>
    <div className='allnews_right news_inner_right other_news_right'>
            <div className='section'>
              <h1>Bo‘limlar</h1>
              <div className='section_row'>
                <p>Yangiliklar</p>
                <p onClick={handleNext}>E'lonlar</p>
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
  
     <Newsrep/>
          </div>

           <>
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ><div className='antd_design'>
        <h1>Registratsiya</h1>
        <div className='antd_event'>
        <p>Ism</p>
        <input type='text' placeholder='ism'/>
            </div>
    <div className='antd_event'>
        <p>Email</p>
        <input type='email' placeholder='email'/>
            </div>
        <div className='antd_event'>
        <p>Telefon raqam</p>
        <input type='text' placeholder='ism'/>
            </div>
            <button>Ma'lumotlarni yuborish</button>
            </div>
      </Modal>
    </>
    </div>
  )
}

export default EventInner
