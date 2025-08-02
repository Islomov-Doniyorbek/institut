import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../Images/active2.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Newsrep from './Newsrep'
import ContactComp from '../../components/contactComp'
const OtherNews = () => {
const navigate = useNavigate()


const handleChange=()=>{
  navigate('/News/Allnews/OthernewsInner')
}
       
    const handleNext = () => {
      navigate('/News/Allnews/Othernews');
    };


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
<button onClick={handleChange}>Batafsil</button>
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
  
            <ContactComp/>
  
            <Newsrep/>
          </div>
    </div>
  )
}

export default OtherNews
