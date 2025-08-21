import React, { useEffect, useState } from 'react';
import './News.css';
import { FaRegClock } from 'react-icons/fa';
import { MdNewspaper,} from 'react-icons/md';
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


  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
const newsData = [
  {
    id: 1,
    imgClass: "news_img",
    title:t("yangi_text"),
    category: t("yang"),
    date: "04/24/2025",
    link: "/News/Allnews/AllmewsInner"
  },
  {
    id: 2,
    imgClass: "news_img news_img_stat2",
    title: t("stat_text_1"),
    category: t("yang"),
    date: "04/11/2025",
  },
  {
    id: 3,
    imgClass: "news_img news_img_stat3",
    title: t("stat_text_2"),
    category: t("yang"),
    date: "12/13/2024",
  },
  {
    id: 4,
    imgClass: "news_img news_img_stat4",
    title: t("stat_text_3"),
    category: t("yang"),
    date: "12/12/2024",
  },
  {
    id: 5,
    imgClass: "news_img news_img_stat5",
    title: t("stat_text_4"),
    category: t("yang"),
    date: "12/11/2024",
  },
  {
    id: 6,
    imgClass: "news_img news_img_stat6",
    title: t("stat_text_5"),
    category: t("yang"),
    date: "12/11/2024",
  },
   {
    id: 7,
    imgClass: "news_img news_img_stat7",
    title: t("stat_text_6"),
    category: t("yang"),
    date: " 12/10/2024",
  },

   {
    id: 8,
    imgClass: "news_img news_img_stat8",
    title:  t("stat_text_7"),
    category: t("yang"),
    date: "12/05/2024",
  },
];




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
  {newsData.map((item) => (
    <div key={item.id} className='news_card yangiliklar_card_cen'> 
      <div className={item.imgClass}></div>
      <div className='news_text'>
        <h2 
          onClick={() => item.link && navigate(item.link)}
          style={{ cursor: item.link ? "pointer" : "default" }}
        >
          {item.title}
        </h2>
      </div>
      <div className='news_icons'>
        <p><span><MdNewspaper /></span>{item.category}</p>
        <p><span><FaRegClock /></span>{item.date}</p>
      </div>
    </div>
  ))}
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
