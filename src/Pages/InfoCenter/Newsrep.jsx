import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import news from '../../Images/photo_2025-07-20_14-03-41.jpg';
const Newsrep = () => {
    const allNews = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: 'Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi.',
      date: '04/24/2025',
      image: news
    }));
  return (
    <div>
      
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
  )
}

export default Newsrep
