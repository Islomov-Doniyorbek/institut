import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import news from '../../Images/news7.jpg'
import news2 from '../../Images/news8.jpg'
import { useNavigate } from 'react-router-dom'
import Newsrep from './Newsrep'
import ContactComp from '../../components/contactComp'
const AllnewsInner = () => {
const text = `Konferensiyada Botir Zokirov nomidagi Milliy estrada san’ati instituti, O’zbekiston davlat konservatoriyasi, Yunus Rajabiy nomidagi O’zbek milliy musiqa san’ati instituti, O’zbekiston Respublikasi fanlar akademiyasi, O’zbekiston davlat san’at va madaniyat instituti, Buxoro ixtisoslashtirilgan san’at maktabi, Farg’ona ixtisoslashtirilgan san’at maktabi, Farg’ona davlat universitetlaridan professor-o’qituvchilar, doktorant va mustaqil izlanuvchilar hamda ilmga izlanuvchan talaba-yoshlar ishtirok etishdi.

Konferensiya davomida musiqiy estrada san’atining kelib chiqishi va rivojlanish bosqichlari, estradaning an’anaviy va zamonaviy janrlari o’rtasidagi farqlar, zamonaviy musiqiy estrada san’atida aranjirovkaning o’rni, musiqiy estrada san’atida qo’shiq matnining  ahamiyatiga oid 70 ga yaqin ilmiy ma’ruzalar bilan tanishildi.`;



const paragraphs = text.split(/\.\s+/); 
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/News/Allnews/Othernews');
  };

  return (
    <div className='news_inner'>
  <div className='news_inner_text'> 
<h1>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. </h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>04/24/2025</p>
<h2><p>Posted by:</p>Sevara Olimjonova</h2>
<h2><p>Category:</p> Yangilik</h2>
</div>
<div className='inner-sentence'>
    <div className='inner_img_box'>
    <img src={news}/>
    </div>
   {paragraphs.map((sentence, index) => (
      <p key={index}>{sentence}.</p> 
    ))}
     <div className='inner_img_box'>
    <img src={news2}/>
    </div>
</div>









  </div>
    <div className='allnews_right news_inner_right'>
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

export default AllnewsInner
