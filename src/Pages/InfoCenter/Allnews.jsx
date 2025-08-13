import React, { useEffect, useState } from 'react';
import './News.css';
import { FaRegClock } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Newsrep from './Newsrep';
import ActiveTopPage from '../../components/activeTopPage';
import ContactComp from '../../components/contactComp';
import { useTranslation } from 'react-i18next';

const getVisiblePages = (currentPage, totalPages) => {
  const visible = [];
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, start + 3);
  if (end - start < 3) {
    start = Math.max(1, end - 3);
  }
  for (let i = start; i <= end; i++) {
    visible.push(i);
  }
  return visible;
};

const Allnews = () => {

   const {t }=useTranslation()

  const navigate = useNavigate();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
    setNewsList(storedPosts);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentNews = isSmallScreen
    ? newsList
    : newsList.slice(startIndex, endIndex);

  const visiblePages = getVisiblePages(currentPage, totalPages);

  const handleChange = (post) => {
    localStorage.setItem('selectedPost', JSON.stringify(post));
    navigate('/News/Allnews/Innernews');
  };

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
        {/* Chap qism (Yangiliklar) */}
        <div
          className='allnews_center'
          style={{ display: isSmallScreen && showRightSidebar ? 'none' : 'block' }}
        >
          <div className='allnews_card'>
            {currentNews.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '40px' }}>
                Hech qanday yangilik qo‘shilmagan.
              </p>
            ) : (
              currentNews.map((item, index) => (
                <div className='allnews_col' key={index}>
                  <div
                    className='news_image'
                    style={{
                      backgroundImage: `url(${item.images?.[0]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '200px',
                      borderRadius: '10px',
                    }}
                  />
                  <h2>{item.title}</h2>
                  <b>
                    <span><FaRegClock /></span>
                    {item.date}
                  </b>
                  <button onClick={() => handleChange(item)}>Batafsil</button>
                </div>
              ))
            )}
          </div>

          {!isSmallScreen && totalPages > 1 && (
            <div className='allnews_number' style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                className='btn_news'
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <MdOutlineKeyboardArrowLeft />
              </button>

              {visiblePages.map((page) => (
                <button
                  className='btn_text'
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className='btn_news'
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          )}
        </div>

        {/* O'ng qism (Bo‘limlar + Kontakt) */}
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
