import React, { useState } from "react";
import history from "../../Images/history_2201499.png";
import "./History.css";
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { IoBarChartOutline } from "react-icons/io5";
import HistoryAd from "./History_inner/HistoryAd";
import HistoryEvent from "./History_inner/HistoryEvent";
import HistoryNews from "./History_inner/HistoryNews";
import History_doc from "./History_doc";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const History = () => {
  const { t } = useTranslation();

  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  // view = years | months | days | details
  const [view, setView] = useState("years");
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  // Yil → Oyga o‘tish
  const handleYearClick = (year) => {
    setSelectedYear(year);
    setView("months");
  };

  // Oy → Kunlarga o‘tish
  const handleMonthClick = (monthIndex) => {
    setSelectedMonthIndex(monthIndex);
    setSelectedDay(null);
    setView("days");
  };

  // Kun bosilganda → Detallar
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setView("details");
  };

  // Chart ma’lumotlari
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Yangiliklar",
        data: [100, 100, 70, 90, 130, 80],
        backgroundColor: "rgba(0, 62, 119, 1)",
      },
      {
        label: "Tadbirlar",
        data: [80, 150, 105, 50, 65, 120],
        backgroundColor: "rgba(201, 197, 0, 1)",
      },
    ],
  };

  const datas = {
    labels: months,
    datasets: [
      {
        label: "Yangiliklar",
        data: [10, 20, 14, 6, 19, 9, 13, 16, 5, 11, 13, 17],
        backgroundColor: "rgba(0, 62, 119, 1)",
      },
      {
        label: "Tadbirlar",
        data: [12, 18, 10, 7, 15, 8, 20, 11, 9, 14, 10, 16],
        backgroundColor: "rgba(201, 197, 0, 1)",
      },
    ],
  };

  // Yillar charti
  const options = {
    responsive: true,
    plugins: { legend: { display: false }, title: { display: false } },
    scales: { x: { grid: { display: false } }, y: { grid: { display: true } } },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const year = data.labels[index];
        handleYearClick(Number(year));
      }
    },
  };

  // Oylar charti
  const optionses = {
    responsive: true,
    plugins: { legend: { display: false }, title: { display: false } },
    scales: { x: { grid: { display: false } }, y: { grid: { display: true } } },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        handleMonthClick(index);
      }
    },
  };

  return (
    <div className="history-con">
      <div className="history_inputs">
        <div className="history_top">
          <img src={history} alt="history" />
          <h1>{t("history_page_title")}</h1>
        </div>

        <div className="bar_chart_box">
          <div className="bar_chart_title">
            <div className="bar_chart_text">
              <h1>
                {view === "years" &&
                  "Yillar bo'yicha ma'lumotlar grafikasi 2020 - 2025"}
                {view === "months" &&
                  `${selectedYear}-yil Oylar bo'yicha ma'lumotlar grafikasi`}
                {view === "days" &&
                  `${selectedYear}-yil ${months[selectedMonthIndex]} oyi kalendari`}
                {view === "details" &&
                  `${selectedYear}-yil ${months[selectedMonthIndex]} ${selectedDay}-kun tafsilotlari`}
              </h1>
              <span>
                <IoBarChartOutline />
              </span>
            </div>
          </div>

          {/* Yillar */}
          {view === "years" && (
            <div className="bar_chart">
              <Bar data={data} options={options} />
            </div>
          )}

          {/* Oylarga */}
          {view === "months" && (
            <div className="bar_chart bar_chart2">
              <Bar data={datas} options={optionses} />
            </div>
          )}

          {/* Kunlarga (calendar) */}
          {view === "days" && (
            <div className="calendar">
              <h4>
                {selectedYear}-yil {months[selectedMonthIndex]}{" "}
                {t("month_numbers")}
              </h4>

              {/* Haftaning kunlari */}
              <div className="hafta-header">
                {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((kun, i) => (
                  <div key={i} className="hafta-kun">
                    {kun}
                  </div>
                ))}
              </div>

              {/* Kunlar jadvali */}
              <div className="sana-grid">
                {(() => {
                  const daysInMonth = new Date(
                    selectedYear,
                    selectedMonthIndex + 1,
                    0
                  ).getDate();
                  const firstDay = new Date(
                    selectedYear,
                    selectedMonthIndex,
                    1
                  ).getDay();
                  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

                  const blanks = Array.from({ length: startOffset }, (_, i) => (
                    <div
                      key={`blank-${i}`}
                      className="sana-card empty"
                    ></div>
                  ));

                  const dayCells = Array.from(
                    { length: daysInMonth },
                    (_, i) => i + 1
                  ).map((day) => (
                    <div
                      key={day}
                      className={`sana-card ${
                        selectedDay === day ? "active" : ""
                      }`}
                      onClick={() => handleDayClick(day)}
                    >
                      {day}
                    </div>
                  ));

                  return [...blanks, ...dayCells];
                })()}
              </div>
            </div>
          )}

          {/* Kun tanlangandan keyin detallar */}
          {view === "details" && (
            <div className="details-section">
              <h4>
                {selectedYear}-yil {months[selectedMonthIndex]} {selectedDay}-kun
              </h4>
              <HistoryAd />
              <HistoryEvent />
              <HistoryNews />
              <History_doc/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
