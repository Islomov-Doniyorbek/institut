import React, { useState } from "react";
import Container from "../../components/Container";
import { MdDownload } from "react-icons/md";
import ActiveTopPage from "../../components/activeTopPage";
import './Training.css'
const yoNalishlar = [
  {
    title: " Komozitorlik va Aranjirovka kafedrasi",
    pdfs: [
      {
        name: "Mutaxassislik-fanlarni-o‘qitish-metodikasi",
        file: "Mutaxassislik-fanlarni-o‘qitish-metodikasi.pdf",
      },
      {
        name: "Kompazitorlik-maxorati",
        file: "Kompazitorlik-maxorati.pdf",
      },
      {
        name: "Aranjirovka-xalq-kuylari-asosida",
        file: "Aranjirovka-xalq-kuylari-asosida.pdf",
      },
      {
        name: "Zamonaviy-partituralarni-o‘qitish-va-cholg‘ulashtirish",
        file: "Zamonaviy-partituralarni-o‘qitish-va-cholg‘ulashtirish.pdf",
      }
    ],
  },
  {
    title: " Musiqiy-nazariy va tarixiy fanlar kafedrasi",
    pdfs: [
      { name: "Ilmiy-tadqiqot-metodologiyasi", file: "Ilmiy-tadqiqot-metodologiyasi.pdf" },
      { name: "Musiqashunoslik", file: "Musiqashunoslik.pdf" },
      { name: "Musiqiy-tanqidning-ilmiy-asoslari", file: "Musiqiy-tanqidning-ilmiy-asoslari.pdf" },
      {
        name: "Zamonaviy-musiqa-shakli",
        file: "Zamonaviy-musiqa-shakli.pdf",
      },
      { name: "Zamonaviy-garmoniya", file: "Zamonaviy-garmoniya.pdf" },
      {
        name: "Zamonaviy-polifoniya",
        file: "Zamonaviy-polifoniya.pdf",
      },
      { name: "Jahon-va-O‘zbek-musiqiy-estrada-tarixi-va-nazariyasi", file: "Jahon-va-O‘zbek-musiqiy-estrada-tarixi-va-nazariyasi.pdf" },
      { name: "XXI-asr-jahon-musiqa-madaniyati", file: "XXI-asr-jahon-musiqa-madaniyati.pdf" },
         { name: "XXI-asr-O‘zbekiston-musiqa-madaniyati", file: "XXI-asr-O‘zbekiston-musiqa-madaniyati.pdf" },
    ],
  },
  {
    title: " Estrada xonandaligi kafedrasi ",
    pdfs: [
      { name: "Mutaxassislik-fannlarni-o‘qitish-metodikasi", file: "Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf" },
     { name: "Estrada-xonandalik-mahorati", file: "Estrada-xonandalik-mahorati.pdf" },
      { name: "Xonandalik-ansambl-san‘ati", file: "Xonandalik-ansambl-san‘ati.pdf" },
       { name: "Improvizatsiya-mahorati", file: "Improvizatsiya-mahorati.pdf" },
        { name: "Orkestr-jo‘rligida-ijrochilik-mahorati", file: "Orkestr-jo‘rligida-ijrochilik-mahorati.pdf" },
    ],
  },
  {
    title: " Musiqiy ovoz rejissyorligi kafedrasi",
    pdfs: [
      { name: "Mutaxassislik-fanlarni-o‘qitish-metodikasi-1", file: "Mutaxassislik-fanlarni-o‘qitish-metodikasi-1.pdf" },
      { name: "Musiqiy-ovoz-rejissorligi-mahorati", file: "Musiqiy-ovoz-rejissorligi-mahorati.pdf" },
      { name: "Fonogramma-tahlili", file: "Fonogramma-tahlili.pdf" },
      {
        name: "Kompyuter-musiqasi-texnologiyasi",
        file: "Kompyuter-musiqasi-texnologiyasi.pdf",
      },
      {
        name: "Teleradio-uzatish-va-tomosha-tadbirlarini-ovozlashtirish",
        file: "Teleradio-uzatish-va-tomosha-tadbirlarini-ovozlashtirish.pdf",
      },
    ],
  },
  {
    title: " Estrada orkestri drijyorligi kafedrasi",
    pdfs: [
      {
        name: "Mutaxassislik-fanlarni-o‘qitish-metodikasi-2",
        file: "Mutaxassislik-fanlarni-o‘qitish-metodikasi-2.pdf",
      },
      { name: "Estrada-orkestri-dirijorligi-mahorati", file: "Estrada-orkestri-dirijorligi-mahorati.pdf" },
      {
        name: "Orkestr-mashg‘uloti",
        file: "Orkestr-mashg‘uloti.pdf",
      },
    ],
  },
  
];

const Magister = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Container>
       <div className='callcenter_top_text magister_top'>
        <h1>Qabul dasturlari</h1>
        <p>Bosh sahifa - Qabul dasturlari</p>
        </div>
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
          Magistratura ta'lim yo'nalishlari uchun o'quv dasturlari
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
              <button className="header-button"
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
                      <a className="header_a"
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
                        <MdDownload style={{ fontSize: 22 }}  className="header_icon"/> {pdf.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Magister;