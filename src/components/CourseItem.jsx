import React, { useState } from "react";
import "../Pages/Talim/Training.css";
import { MdDownload } from "react-icons/md";

const CourseItem = ({ title, yoNalishlar }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      className="bakalavr-wrapper"
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 0" }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontSize: 32,
          color: "#15396A",
          marginBottom: 24,
          borderBottom: "3px solid #FFD600",
          display: "inline-block",
        }}
        className="title-heading"
      >
        {title}
      </h1>
      <div style={{ marginTop: 24 }}>
        {yoNalishlar.map((item, idx) => (
          <div
            key={item.title}
            style={{
              marginBottom: 16,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 8px #0001",
            }}
          >
            <button
              className="header-button"
              onClick={() => handleToggle(idx)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "#FFF8E1",
                color: "#15396A",
                fontWeight: 600,
                fontSize: 20,
                padding: "18px 24px",
                border: "none",
                outline: "none",
                cursor: "pointer",
                transition: "background 0.2s",
                borderBottom:
                  openIndex === idx
                    ? "2px solid #FFD600"
                    : "2px solid transparent",
              }}
            >
              {idx + 1}. {item.title}
              <span
                style={{
                  float: "right",
                  transition: "transform 0.3s",
                  transform:
                    openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                ▼
              </span>
            </button>
            <div
              style={{
                maxHeight: openIndex === idx ? "70vh" : 0,
                overflow: "hidden",
                background: "#F5F7FA",
                transition: "max-height 0.5s cubic-bezier(.4,2,.6,1)",
                padding: openIndex === idx ? "20px 24px" : "0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {openIndex === idx && (
                <div
                  style={{
                    maxHeight: "60vh",
                    overflowY: "auto",
                    paddingRight: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {item.pdfs.map((pdf) => (
                    <a
                      className="header_a"
                      key={pdf.file}
                      href={"/pdfs/" + pdf.file}
                      download
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "#15396A",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: 8,
                        fontWeight: 500,
                        fontSize: 16,
                        textDecoration: "none",
                        boxShadow: "0 2px 8px #0002",
                        transition: "background 0.2s, color 0.2s",
                        flexShrink: 0,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "#FFD600";
                        e.currentTarget.style.color = "#15396A";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "#15396A";
                        e.currentTarget.style.color = "#fff";
                      }}
                    >
                      <MdDownload
                        style={{ fontSize: 22 }}
                        className="header_icon"
                      />{" "}
                      {pdf.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseItem;
