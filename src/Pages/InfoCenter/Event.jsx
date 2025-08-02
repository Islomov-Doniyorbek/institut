import React from 'react'
import photos from '../../Images/events.jpg'
import { MdNewspaper } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import ActiveTopPage from '../../components/activeTopPage'
const Event = () => {
const navigate = useNavigate();

const handleClick = () => {
  navigate('/News/Allnews/EventInner');
};

  return (
    <div className='eventss'>
          <ActiveTopPage pageTitle={"Tadbirlar"} />
    <div className='eventss_row'>
     <div className='news_card eventss_card ' onClick={handleClick} style={{ cursor: 'pointer' }}> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text eventss_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><FaLocationDot /></span>Toshkent, Estrada insitutiti</p>
</div>
      </div>


       <div className='news_card eventss_card '> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text eventss_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><FaLocationDot /></span>Toshkent, Estrada insitutiti</p>
</div>
      </div>


       <div className='news_card eventss_card '> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text eventss_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>04/24/2025</p>
<p><span><FaRegClock /></span>15:00 to 16:00</p>
<p><span><FaLocationDot /></span>Toshkent, Estrada insitutiti</p>
</div>
      </div>


    </div>
       <div className="active_connect">
       <h1>Qo‘shimcha ma’lumot olish uchun institut matbuot xizmatiga murojaat qiling</h1>
       <button>Bog'lanish <span><FiPhoneCall /></span></button>
           </div>
    </div>
  )
}

export default Event
