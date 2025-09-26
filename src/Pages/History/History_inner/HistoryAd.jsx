import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import news from '../../../Images/photo_2025-07-20_14-03-41.jpg';
import news2 from '../../../Images/photo_2025-07-20_21-19-52.jpg';
import { useTranslation } from 'react-i18next';

const HistoryAd = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);
    const handleOpen = () => showModal(true);

    return (
        <div className='history_news'>
    
            <div className='tarixiy_box'>
                <h1>{t("history_ads_section_title")}</h1>
                <div className='tarixiy_row'>
                    {[1,2,3].map((item) => (
                        <div className='tarixiy_card'  onClick={handleOpen} key={item}>
                            <div className='tarixiy_card_img'></div>
                            <div className='tarixiy_card_text'>
                                <h2>{t("history_ads_card_title")}</h2>
                                <p><span><FaRegClock /></span>{t("history_ads_card_date")}</p>
                            </div>

                        </div>
                    ))}
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
               <h1>{t("modal_news_title")}</h1>
                <div className='news_inner_info history_inner_info'>
            <p><span><FaRegClock /></span>{t("modal_news_date")}</p>
             <h2><p>{t("modal_news_posted_by")}</p></h2>
             <h2><p>{t("modal_news_category")}</p></h2>
                </div>
                <div className='inner-sentence'>
                    <div className='inner_img_box'>
                    <img src={news}/>
                    </div>
                   <p>{t("modal_news_text")}</p>
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

export default HistoryAd;
