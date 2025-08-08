import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { AnimatePresence } from 'framer-motion';
import history from '../../Images/history_2201499.png';
import HistoryNews from './History_inner/HistoryNews';
import HistoryEvent from './History_inner/HistoryEvent';
import HistoryAd from './History_inner/HistoryAd';
import './History.css';

const History = () => {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const months = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
  ];

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const getDaysForMonth = (year, monthIndex) => {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const slideUpFadeOut = {
    hidden: { y: 0, opacity: 1 },
    exit: { y: -80, opacity: 0, transition: { duration: 0.5 } }
  };

  const slideUpFadeIn = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const fadeUpSlow = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className='history-con'>
      <div className='history_inputs'>
        <div className='history_top'>
          <img src={history} alt="history" />
          <h1>Bu pageda siz institut tarixiga oid barcha ma'lumotlarni olishingiz mumkin</h1>
        </div>

        <AnimatePresence mode="wait">
          {/* YIL TANLASH */}
          {!selectedYear && (
            <motion.div
              key="years"
              variants={slideUpFadeIn}
              initial="hidden"
              animate="visible"
              exit={slideUpFadeOut.exit} // ✅ obyekt sifatida berilmoqda
              className='yillar'
            >
              <h2>2020-yildan 2025 yilgacha bo'lgan barcha ma'lumotlar</h2>
              <div className='yillar-box'>
                <div className="yillar-row">
                  {years.map((year, index) => (
                    <div key={index} className='yillar-card'>
                      <button
                        onClick={() => {
                          setSelectedYear(year);
                          setSelectedMonthIndex(null);
                          setSelectedDay(null);
                        }}
                      >
                        <span className="front">{year}</span>
                        <span className="back"><LuSearch /></span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* OY TANLASH */}
          {selectedYear && selectedMonthIndex === null && (
            <motion.div
              key="months"
              variants={slideUpFadeIn}
              initial="hidden"
              animate="visible"
              exit={slideUpFadeOut.exit}
              className='oylar-box'
            >
              <h2>{selectedYear}-yil oylar</h2>
              <div className='oylar-row'>
                {months.map((month, index) => (
                  <div key={index} className='oylar-card'>
                    <button
                      onClick={() => {
                        setSelectedMonthIndex(index);
                        setSelectedDay(null);
                      }}
                    >
                      <span className="front">{month}</span>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* KUN TANLASH */}
          {selectedMonthIndex !== null && selectedDay === null && (
            <motion.div
              key="days"
              variants={slideUpFadeIn}
              initial="hidden"
              animate="visible"
              exit={slideUpFadeOut.exit}
              className='sana-topish'
            >
              <h4>
                {selectedYear}-yil {months[selectedMonthIndex]} oyi kunlari
              </h4>

              {/* Haftaning kunlari */}
              <div className="hafta-header">
                {['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'].map((kun, i) => (
                  <div key={i} className="hafta-kun">{kun}</div>
                ))}
              </div>

              {/* Kunlar jadvali */}
              <div className='sana-grid'>
                {(() => {
                  const daysInMonth = getDaysForMonth(selectedYear, selectedMonthIndex);
                  const firstDay = new Date(selectedYear, selectedMonthIndex, 1).getDay();
                  const startOffset = (firstDay === 0 ? 6 : firstDay - 1);
                  const blanks = Array.from({ length: startOffset }, (_, i) => (
                    <div key={`b${i}`} className="sana-card empty"></div>
                  ));

                  const dayCells = daysInMonth.map((day) => (
                    <div
                      key={day}
                      className={`sana-card ${selectedDay === day ? 'active' : ''}`}
                      onClick={() => setSelectedDay(day)}
                    >
                      {day}
                    </div>
                  ));

                  return [...blanks, ...dayCells];
                })()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TARIXIY MA'LUMOTLAR */}
        <AnimatePresence>
          {selectedDay !== null && (
            <motion.div
              key="history-data"
              variants={fadeUpSlow}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              <div className='tarixiy-yangilik'>
                <HistoryNews
                  year={selectedYear}
                  month={months[selectedMonthIndex]}
                  day={selectedDay}
                />
              </div>
              <div className='tarixiy-tadbirlar'>
                <HistoryEvent
                  year={selectedYear}
                  month={months[selectedMonthIndex]}
                  day={selectedDay}
                />
              </div>
              <div className='tarixiy-elonlar'>
                <HistoryAd
                  year={selectedYear}
                  month={months[selectedMonthIndex]}
                  day={selectedDay}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default History;
