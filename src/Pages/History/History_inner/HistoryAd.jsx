import { Modal } from 'antd';
import React, { useState } from 'react'
import { FaRegClock } from 'react-icons/fa'
import news from '../../../Images/photo_2025-07-20_14-03-41.jpg'
import news2 from '../../../Images/photo_2025-07-20_21-19-52.jpg'
const HistoryAd = () => {
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
           <h1>2024-yil 18 fevralda bo'lgan barcha e'lonlar.</h1>
           <div className='tarixiy_box'>
               <h1>E'lonlar</h1>
       <div className='tarixiy_row'>
       <div className='tarixiy_card'>
          <div className='tarixiy_card_img'></div>
       <div className='tarixiy_card_text'>
       <h2 onClick={handleOpen}>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.  </h2>
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
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
    <p>dsadadasdasdasdsadasd</p> 
     <div className='inner_img_box'>
    <img src={news2}/>
    </div>
</div>









  </div>

      </Modal>
    </>
               </div>
  )
}

export default HistoryAd
