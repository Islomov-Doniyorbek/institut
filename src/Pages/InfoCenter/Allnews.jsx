import React, { useEffect, useState } from 'react';
import './News.css';
import { FaRegClock } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import {
  MdNewspaper,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Newsrep from './Newsrep';
import ActiveTopPage from '../../components/activeTopPage';
import ContactComp from '../../components/contactComp';
import { useTranslation } from 'react-i18next';
import AllnewsInner from './AllnewsInner';


const Allnews = () => {

   const {t }=useTranslation()

  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const handleClick = (newsData) => {
    setSelectedNews(newsData);
  };

  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  const handleNext = () => {
    navigate('/News/Allnews/Othernews');
  };

  return (
    <div className='allnews'>
    <div className='allnews_top'>
      <ActiveTopPage pageTitle={t("news")} />
      <div className='allnews_top_menu'>
        <span onClick={() => setShowRightSidebar(!showRightSidebar)}>
          <IoMenu />
        </span>
      </div>
    </div>
  
    <div className='all_news_row'>
      {/* Chap qism */}
      <div className='allnews_center'> 
        {selectedNews ? (
          <AllnewsInner data={selectedNews} onBack={() => setSelectedNews(null)} />
        ) : (
          <>
            <div className='news_card yangiliklar_card_cen'> 
              <div className='news_img'></div>
              <div className='news_text'>
                <h2 onClick={() => handleClick({
                  title: t("yangi_text"),
                  date: "04/24/2025",
                  category: t("yang"),
                  // boshqa kerakli ma'lumotlar
                })}>
                  {t("yangi_text")}
                </h2>
              </div>
              <div className='news_icons'>
                <p><span><MdNewspaper /></span>{t("yang")}</p>
                <p><span><FaRegClock /></span>04/24/2025</p>
              </div>
            </div>
  
            {/* boshqa news_card lar ham shu usulda */}
          </>
        )}
      </div>
  
      {/* O‘ng qism */}
      <div
        className='allnews_right'
        style={{
          display: isSmallScreen
            ? showRightSidebar
              ? 'block'
              : 'none'
            : 'block',
        }}
      >
        <div className='section'>
          <h1>{t("h1_sections_uz")}</h1>
          <div className='section_row'>
            <p>{t("p_news_uz")}</p>
            <button onClick={handleNext}>{t("btn_announcements_uz")}</button>
          </div>
        </div>
  
        <ContactComp />
        <Newsrep />
      </div>
    </div>
  
    <div className='allnews_bottom'></div>
  </div>
  
  );
};

export default Allnews;
