import { Modal } from 'antd';
import React, { useState } from 'react'
import { FaRegClock } from 'react-icons/fa'
import news from '../../../Images/photo_2025-07-20_14-03-41.jpg'
import news2 from '../../../Images/photo_2025-07-20_21-19-52.jpg'
const HistoryNews = () => {
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
const handleOpen = ()=>{
    showModal(true)
}
  return (
    <div className='history_news'>
    <h1>2024-yil 18 fevralda bo'lgan barcha yangiliklar.</h1>
    <div className='tarixiy_box'>
        <h1>Yangiliklar</h1>
<div className='tarixiy_row'>
<div className='tarixiy_card'>
   <div className='tarixiy_card_img'></div>
<div className='tarixiy_card_text'>
<h2  onClick={handleOpen}>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.  </h2>
<p><span><FaRegClock /></span>18.02.2024</p>
</div>
</div>

<div className='tarixiy_card'>
    <div className='tarixiy_card_img'></div>
<div className='tarixiy_card_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.  </h2>
<p><span><FaRegClock /></span>18.02.2024</p>
</div>
</div>

<div className='tarixiy_card'>
    <div className='tarixiy_card_img'></div>
<div className='tarixiy_card_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.  </h2>
<p><span><FaRegClock /></span>18.02.2024</p>
</div>
</div>

</div>
    </div>
                <>
      <Modal
      className='tarix-modal'
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='tarixiy-yang-mod'>
        <div className='news_inner_text  history_inner_text'> 
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
           <p>Konferensiyada Botir Zokirov nomidagi Milliy estrada san’ati instituti, O’zbekiston davlat konservatoriyasi, Yunus Rajabiy nomidagi O’zbek milliy musiqa san’ati instituti, O’zbekiston Respublikasi fanlar akademiyasi, O’zbekiston davlat san’at va madaniyat instituti, Buxoro ixtisoslashtirilgan san’at maktabi, Farg’ona ixtisoslashtirilgan san’at maktabi, Farg’ona davlat universitetlaridan professor-o’qituvchilar, doktorant va mustaqil izlanuvchilar hamda ilmga izlanuvchan talaba-yoshlar ishtirok etishdi.

Konferensiya davomida musiqiy estrada san’atining kelib chiqishi va rivojlanish bosqichlari, estradaning an’anaviy va zamonaviy janrlari o’rtasidagi farqlar, zamonaviy musiqiy estrada san’atida aranjirovkaning o’rni, musiqiy estrada san’atida qo’shiq matnining  ahamiyatiga oid 70 ga yaqin ilmiy ma’ruzalar bilan tanishildi.  

Bahs va munozaralarga boy o’tgan konferensiya yakunida ishtirokchilarga institut tomonidan sertifikatlar topshirildi.</p> 
            <div className='inner_img_box'>
           <img src={news2}/>
           </div>
       </div>
       </div>
       </div>
      </Modal>
    </>
        </div>
  )
}

export default HistoryNews
