import React, { useEffect, useState } from 'react';
import './News.css';
import { FaRegClock } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import news from '../../Images/photo_2025-07-20_14-03-41.jpg';
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

const allNews = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: 'Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.',
  date: '04/24/2025',
  image: news
}));

// Faqat 4 ta sahifa ko‘rsatadigan dynamic page calculator
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

const Allnews = ({pageTitle}) => {
  const [showRightSidebar, setShowRightSidebar] = useState(false);


  const navigate = useNavigate();

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize(); // ilk holat uchun
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(allNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentNews = isSmallScreen
    ? allNews // kichik ekran — barchasini ko‘rsat
    : allNews.slice(startIndex, endIndex); // katta ekran — sahifalab

  const visiblePages = getVisiblePages(currentPage, totalPages);

  const handleChange = () => {
    navigate('/News/Allnews/Innernews');
  };

  const handleNext = () => {
    navigate('/News/Allnews/Othernews');
  };

  return (
    <div className='allnews'>
      <div className='allnews_top'>
        <div className='allnews_top_text'>
        <h1>Yangiliklar</h1>
        <p>Bosh sahifa - {pageTitle}</p>
        </div>
        <div className='allnews_top_menu'>
<span onClick={() => setShowRightSidebar(!showRightSidebar)}><IoMenu /></span>
        </div>
      </div>

      <div className='all_news_row'>
     <div className='allnews_center'  style={{ display: isSmallScreen && showRightSidebar ? 'none' : 'block' }}>
<div className='allnews_card'>
          {currentNews.map((item) => (
            <div className='allnews_col' key={item.id}>
              <img src={item.image} alt='news' />
              <h2>{item.title}</h2>
              <b><span><FaRegClock /></span>{item.date}</b>
              <button onClick={handleChange}>Batafsil</button>
            </div>
          ))}
</div>

              
 {!isSmallScreen && (
  <div className='allnews_number' style={{ textAlign: 'center', marginTop: '20px' }}>
    <button
      className='btn_news'
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}>
      <span> <MdOutlineKeyboardArrowLeft /></span>
    </button>

    {visiblePages.map((page) => (
      <button
        className='btn_text'
        key={page}
        onClick={() => setCurrentPage(page)}>
        {page}
      </button>
    ))}

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className='btn_news'>
      <span> <MdOutlineKeyboardArrowRight /></span>
    </button>
  </div>
)}

        </div>






        <div className='allnews_right'  style={{
      display: isSmallScreen ? (showRightSidebar ? 'block' : 'none') : 'block',
    }}>
          <div className='section'>
            <h1>Bo‘limlar</h1>
            <div className='section_row'>
              <p>Yangiliklar</p>
              <button onClick={handleNext}>E'lonlar</button>
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

          <div className='archive'>
            <h2>Arxiv</h2>
            <p>Sentabr <span>Yangiliklar: 2</span></p>
            <p>Oktabr <span>Yangiliklar: 5</span></p>
            <p>Noyabr <span>Yangiliklar: 8</span></p>
          </div>

          <div className='new_article'>
            <h1>Yangi maqolalar</h1>
            <h2>{allNews[0].title}</h2>
            <h2>{allNews[1].title}</h2>
            <h2>{allNews[2].title}</h2>
            <h2>{allNews[3].title}</h2>
          </div>
        </div>
      </div>

      <div className='allnews_bottom'></div>
    </div>
  );
};

export default Allnews;
