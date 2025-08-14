import React, { useState } from 'react';
import { MdNewspaper } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import ActiveTopPage from '../../components/activeTopPage';
import { useTranslation } from 'react-i18next';
import EventInner from './EventInner';


const Event = () => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    { title: t("jadidlar"), date: "04/24/2025", time: "15:00 to 16:00", location: t("eve-locat") },
    { title: t("jadidlar"), date: "04/25/2025", time: "10:00 to 12:00", location: t("eve-locat") },
    { title: t("jadidlar"), date: "04/26/2025", time: "09:00 to 11:00", location: t("eve-locat") }
  ];

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
              <div className='news_img'></div>
              <div className='news_text eventss_text'>
                <h2>{event.title}</h2>
              </div>
              <div className='news_icons'>
                <p><span><MdNewspaper /></span>{event.date}</p>
                <p><span><FaRegClock /></span>{event.time}</p>
                <p><span><FaLocationDot /></span>{event.location}</p>
              </div>
            </div>
          ))
        )}
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
