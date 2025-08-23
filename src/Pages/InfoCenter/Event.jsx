import React, { useState } from 'react';
import { MdNewspaper } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import ActiveTopPage from '../../components/activeTopPage';
import { useTranslation } from 'react-i18next';
import EventInner from './EventInner';
import { useNavigate } from 'react-router-dom';


const Event = () => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState(null);
const navigate = useNavigate()
  const eventsData = [
  { 
  title: t("jadidlar"), 
  date: "04/24/2025", 
  time: "15:00 to 16:00", 
  location: t("eve-locat"),  
image: "/ImagesStatik/events1.jpg"
},
  ];   
  const handleChange =()=>{
navigate("/News/Events/EventsInner")
    }


  return (
    <div className='eventss'>
      <ActiveTopPage pageTitle={t("event")} />

      <div className='eventss_row'>
        {selectedEvent ? (
          <EventInner data={selectedEvent} onBack={() => setSelectedEvent(null)} />
        ) : (
          eventsData.map((event, index) => (
            <div
              key={index}
              className='news_card eventss_card'
              onClick={() => setSelectedEvent(event)}
              style={{ cursor: 'pointer' }}
            >
              <div className='eventtt_img' ></div>
              <div className='news_text eventss_text'>
                <h2 onClick={handleChange}>{event.title}</h2>
              </div>
              <div className='news_icons'>
                <p><span><MdNewspaper /></span>{event.date}</p>
                <p><span><FaRegClock /></span>{event.time}</p>
                <p><span><FaLocationDot /></span>{event.location}</p>
              </div>
            </div>
          ))
        )}

 <div className='news_card eventss_card' >
              <div className='eventtt_img eventt_img_stat2' ></div>
              <div className='news_text eventss_text'>
                <h2>{t("stat_evenet_text")}</h2>
              </div>
              <div className='news_icons'>
               <p><span><MdNewspaper /></span>10/22/2024</p>
                <p><span><FaRegClock /></span>10:00 to 15:30</p>
                <p><span><FaLocationDot /></span>{t("eve-locat")}</p>
              </div>
            </div>


             <div className='news_card eventss_card' >
              <div className='eventtt_img eventt_img_stat3' ></div>
              <div className='news_text eventss_text'>
              <h2>{t("stat_evenet_text2")}</h2>
              </div>
              <div className='news_icons'>
               <p><span><MdNewspaper /></span>11/08/2024</p>
                <p><span><FaRegClock /></span>10:00 to 00:30</p>
                <p><span><FaLocationDot /></span>{t("eve-locat")}</p>
              </div>
            </div>




 <div className='news_card eventss_card' >
              <div className='eventtt_img eventt_img_stat4' ></div>
              <div className='news_text eventss_text'>
                <h2>{t("stat_evenet_text3")}</h2>
              </div>
              <div className='news_icons'>
               <p><span><MdNewspaper /></span>11/26/2024</p>
                <p><span><FaRegClock /></span>22:00 to 23:30</p>
                <p><span><FaLocationDot /></span>{t("eve-locat")}</p>
              </div>
            </div>




 <div className='news_card eventss_card' >
              <div className='eventtt_img eventt_img_stat5' ></div>
              <div className='news_text eventss_text'>
               <h2>{t("stat_evenet_text4")}</h2>
              </div>
              <div className='news_icons'>
               <p><span><MdNewspaper /></span>12/10/2024</p>
                <p><span><FaRegClock /></span>22:00 to 23:30</p>
                <p><span><FaLocationDot /></span>{t("eve-locat")}</p>
              </div>
            </div>




 <div className='news_card eventss_card' >
              <div className='eventtt_img eventt_img_stat6' ></div>
              <div className='news_text eventss_text'>
              <h2>{t("stat_evenet_text5")}</h2>
              </div>
              <div className='news_icons'>
               <p><span><MdNewspaper /></span>12/12/2024</p>
                <p><span><FaRegClock /></span>22:00 to 23:30</p>
                <p><span><FaLocationDot /></span>{t("eve-locat")}</p>
              </div>
            </div>


      </div>

      {!selectedEvent && (
        <div className="active_connect">
          <h1>{t("contact_for_more")}</h1>
          <button>
            {t("contact_button")} <span><FiPhoneCall /></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Event;
