import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './History.css';
import history from '../../Images/history_2201499.png';
import HistoryNews from './History_inner/HistoryNews';
import HistoryEvent from './History_inner/HistoryEvent';
import HistoryAd from './History_inner/HistoryAd';
import result from '../../Images/ChatGPT Image Aug 7, 2025, 11_59_58 AM.png';

const monthNames = [
  "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
  "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
];

// Funksiya — tanlangan yil va oydagi kunlar ro'yxatini qaytaradi
const getDaysInMonth = (year, monthName) => {
  const monthIndex = monthNames.findIndex(
    m => m.toLowerCase() === monthName.toLowerCase().trim()
  );
  if (monthIndex === -1 || year === "Tanlang" || monthName === "Tanlang") return [];
  const daysCount = new Date(year, monthIndex + 1, 0).getDate();
  return Array.from({ length: daysCount }, (_, i) => `${i + 1}-${monthNames[monthIndex].toLowerCase()}`);
};

const History = () => {
  const [findyear, setFindyear] = useState(false);

  // Yil uchun state
  const [isDropdownOpenYear, setIsDropdownOpenYear] = useState(false);
  const [selectedYear, setSelectedYear] = useState("Tanlang");
  const [years, setYears] = useState(["2020", "2021", "2022", "2023", "2024"]);
  const yearRef = useRef(null);

  // Oy uchun state
  const [isDropdownOpenMonth, setIsDropdownOpenMonth] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Tanlang");
  const [months, setMonths] = useState(monthNames);
  const monthRef = useRef(null);

  useEffect(() => {
  // API dan kelgan yangi yil/oylarni qo‘shish
  setYears(prev => [...prev, "2025"]);
  setMonths(prev => [...prev, "Yangi oy nomi"]);
}, []);
  // Fake fetch — oy va yil ro'yxatini olish
useEffect(() => {
  const handleClickOutside = (e) => {
    if (yearRef.current && !yearRef.current.contains(e.target)) {
      setIsDropdownOpenYear(false);
    }
    if (monthRef.current && !monthRef.current.contains(e.target)) {
      setIsDropdownOpenMonth(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <div className='history'>
      <div className='history_inputs'>
        <div className='history_top'>
          <img src={history} alt="history" />
          <h1>Bu pageda siz institut tarixiga oid barcha ma'lumotlarni olishingiz mumkin</h1>
        </div>

        {/* Yil tanlash va oy tanlash */}
        <div className='tarix-inputs'>

          {/* Yil tanlash */}
          <div className='tarixiy_yil'>
            <div className="custom_select" ref={yearRef}>
              <h2 className='talim_list_h2'>Yilni tanlang</h2>
              <div className="custom_select_box post_select tarixiy_select" onClick={() => setIsDropdownOpenYear(!isDropdownOpenYear)}>
                <span className='adduser_selected'>{selectedYear}</span>
                <p><IoIosArrowDown /></p>
              </div>
              {isDropdownOpenYear && (
                <div className="custom_select_list post_selected tarixiy_select_list">
                  {years.length > 0 ? (
                    years.map((year, idx) => (
                      <p key={idx} onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpenYear(false);
                      }}>{year}</p>
                    ))
                  ) : (
                    <p>Ma'lumot yo‘q</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Oy tanlash */}
          <div className='tarixiy_oy'>
            <div className="custom_select" ref={monthRef}>
              <h2 className='talim_list_h2'>Oyni tanlang</h2>
              <div className="custom_select_box post_select tarixiy_select" onClick={() => setIsDropdownOpenMonth(!isDropdownOpenMonth)}>
                <span className='adduser_selected'>{selectedMonth}</span>
                <p><IoIosArrowDown /></p>
              </div>
              {isDropdownOpenMonth && (
                <div className="custom_select_list post_selected tarixiy_select_list">
                  {months.length > 0 ? (
                    months.map((month, idx) => (
                      <p key={idx} onClick={() => {
                        setSelectedMonth(month);
                        setIsDropdownOpenMonth(false);
                      }}>{month}</p>
                    ))
                  ) : (
                    <p>Ma'lumot yo‘q</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Qidirish tugmasi */}
          <div className='tarixiy_search'>
            <h2 className='talim_list_h2'>Qidirish</h2>
            <button onClick={() => setFindyear(true)}>Qidirish</button>
          </div>
        </div>

        {/* Kunlarni chiqarish */}
        {findyear ? (
          <div className='sana-topish'>
            <h4>Qaysi sanadagi ma'lumotlarni ko'rmoqchisiz !!!</h4>
          <div className='sana-row'>
            {getDaysInMonth(selectedYear, selectedMonth).map((day, idx) => (
              <div className='sana-card' key={idx}>
                {day}
              </div>
            ))}
          </div>
              <div className='sana-info'>
<div div className='sana-info-green'>
<span></span>
<p>Sanalarda ma'lumot bor</p>
</div>
<div div className='sana-info-red'>
<span></span>
<p>Sanalarda ma'lumot yo'q</p>
</div>
            </div>
          </div>
        ) : (
          <div className="no-result-img">
            <img src={result} alt="No result" />
          </div>
        )}

        {/* Agar qidirilgan bo'lsa yangiliklar/tadbirlar */}
        {findyear && (
          <div>
            <div className='tarixiy-yangilik'>
              <HistoryNews />
            </div>
            <div className='tarixiy-tadbirlar'>
              <HistoryEvent />
            </div>
            <div className='tarixiy-elonlar'>
              <HistoryAd />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default History;
