import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../ImagesStatik/elon1.jpg'
import kons from '../../ImagesStatik/konstitutsiya.jpg'
import vatan from '../../ImagesStatik/vatan.jpg'
import stependiya from '../../ImagesStatik/stependiya.jpg'
import behbudiy from '../../ImagesStatik/behbudiy.jpg'
import mirzo from '../../ImagesStatik/mirzo.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Newsrep from './Newsrep'
import ContactComp from '../../components/contactComp'
import { useTranslation } from 'react-i18next'
const OtherNews = () => {
const navigate = useNavigate()



const announcementsData = [
  {
    title: "quiz_title",
    date: "04/24/2025",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: kons,
    link: "/News/Allnews/OthernewsInner", // shu yerga navigate path
  },
  {
    title: "“O’zbek tili- qalbim tarjimoni” respublika ko’rik-tanlovi",
    date: "04/24/2025",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: announcement2,
    link: "/News/Allnews/OthernewsInner",
  },
  {
    title: "\"Men giyohvandlikka qarshiman!” shiori ostida tanlov o'tkaziladi.",
    date: "05/10/2025",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: announcement2,
    link: "/News/Allnews/OthernewsInner1",
  },
  {
    title: "“Vatanni madh etib” nomli eng yaxshi videoroliklar tanlovi o’tkaziladi.",
    date: "05/30/2025",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: vatan,
    link: "/News/Allnews/OthernewsInner2",
  },
  {
    title: "📍“Rektor stipendiyasi” sohibi bo‘lish uchun nomzodlar quyidagi mezonlarni bajarishlari shart:",
    date: "2025-yil 20-iyungacha",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: stependiya,
    link: "/News/Allnews/OthernewsInner3",
  },
  {
    title: "“Mahmudxo’ja Behbudiy saboqlari” mavzusida insholar tanlovi o’tkaziladi;",
    date: "04/27/2025",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: behbudiy,
    link: "/News/Allnews/OthernewsInner4",
  },
  {
    title: "“Mirzo Ulug’bek vorislari” Respublika tanlovi o’tkaziladi:",
    date: "00/00/2025",
    postedBy: "estrada-conserva",
    category: "announcement",
    img: mirzo,
    link: "/News/Allnews/OthernewsInner5",
  },
];



       
    const handleNext = () => {
      navigate('/News/Allnews/Othernews');
    };

const {t}=useTranslation()
  return (
  <div className='news_inner oter_inner'>
    <div className='news_inner_text other_news'>
      <h1>{t("announcements")}</h1>

{announcementsData.map((item, i) => (
  <div className='other_news_box' key={i}>
    <h1>{item.title.includes("_") ? t(item.title) : item.title}</h1>
    <div className='news_inner_info'>
      <p><span><FaRegClock /></span>{item.date}</p>
      <h2><p>{t("posted_by")}:</p> {item.postedBy}</h2>
      <h2><p>{t("category")}:</p> {t(item.category)}</h2>
    </div>

    <div className='otherrr_img'>
      <div
        className='elon_img'
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
    </div>

    <div className='other_news_btn'>
      <button onClick={() => navigate(item.link)}>
        {t("read_more")}
      </button>
    </div>
  </div>
))}
    </div>

    <div className='allnews_right news_inner_right other_news_right'>
            <div className='section'>
              <h1>{t("h1_sections_uz")}</h1>
              <div className='section_row'>
                <p>{t("p_news_uz")}</p>
                <p onClick={handleNext}>{t("btn_announcements_uz")}</p>
              </div>
            </div>
  
            <ContactComp/>
  
            <Newsrep/>
          </div>
    </div>
  )
}

export default OtherNews
