import React, { useEffect, useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import news from '../../Images/photo_2025-07-20_14-03-41.jpg';
import { useTranslation } from 'react-i18next';
const Newsrep = () => {
const {t}=useTranslation()
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    const newsArray = Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      title: t(`news_${i + 1}`), // dynamic tarjima kaliti
      date: '04/24/2025',
      image: news
    }));
    setAllNews(newsArray);
  }, [t]); // t o'zgarganda yangilansin
  return (
    <div>
      
                <div className='archive'>
                 <h2>{t("archive_title")}</h2>
<p>{t("archive_sep")} <span>{t("archive_sep_news")}</span></p>
<p>{t("archive_oct")} <span>{t("archive_oct_news")}</span></p>
<p>{t("archive_nov")} <span>{t("archive_nov_news")}</span></p>
                </div>
      
             <div className='new_article'>
  <h1>{t("new_articles")}</h1>
 {allNews.map(newsItem => (
          <h2 key={newsItem.id}>{newsItem.title}</h2>
        ))}
</div>
    </div>
  )
}

export default Newsrep
