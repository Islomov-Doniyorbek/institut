import React, { useState } from "react";
import Container from "../../components/Container";
import { MdDownload } from "react-icons/md";
import ActiveTopPage from "../../components/activeTopPage";
import './Training.css'
const yoNalishlar = [
  {
    title: "Estrada cholg'u ijrochiligi kafedrasi",
    pdfs: [
      {
        name: "Estrada cholg'usida ijrochilik (fortepiano)",
        file: "Estrada-cholgusida-ijrochiik-fortepiano.pdf",
      },
      {
        name: "Estrada cholg'usida ijrochilik (damli cholg'ular)",
        file: "Estrada-cholgusida-ijrochilik-damli-cholgular.pdf",
      },
      {
        name: "Estrada cholg'usida ijrochilik (zarbli cholg'ular)",
        file: "Estrada-cholgusida-ijrochilik-zarbli-cholgular.pdf",
      },
      {
        name: "Estrada cholg'usida ijrochilik (gitara, elektro gitara, bas-gitara)",
        file: "Estrada-cholgusida-ijrochilik-gitara-elektrogitara-bas-gitara.pdf",
      },
      { name: "Ansambl sinfi", file: "Ansambl-sinfi.pdf" },
      { name: "Improvizatsiya", file: "Improvizatsiya.pdf" },
      {
        name: "Estrada cholg'u ijrochiligi (o'quv-uslubiy)",
        file: "Estrada-cholg'u-ijrochiligi-oquv-uslubiy.pdf",
      },
      {
        name: "O'zbek milliy cholg'u chalish uslubi",
        file: "Ozbek-milliy-cholgu-chalish-uslubi.pdf",
      },
    ],
  },
  {
    title: "Estrada xonandaligi kafedrasi",
    pdfs: [
      { name: "Estrada xonandaligi", file: "Estrada-xonandaligi.pdf" },
      { name: "Ansambl", file: "Ansambl-xonanda.pdf" },
      { name: "Improvizatsiya", file: "Improvizatsiya-xonanda.pdf" },
      {
        name: "Orkestr jo'rligida kuylash",
        file: "Orkestr-jorligida-kuylash.pdf",
      },
      { name: "Raqs", file: "Raqs.pdf" },
      {
        name: "Estrada xonandaligiga o'qitish uslubiyoti",
        file: "Estrada-xonandaligiga-oqitish-uslubiyoti.pdf",
      },
      { name: "Shou-biznes asoslari", file: "Shou-biznes-asoslari.pdf" },
      { name: "Sahna mahorati", file: "Sahna-mahorati.pdf" },
    ],
  },
  {
    title: "Fakultetlararo fortepiano ijrochiligi kafedrasi",
    pdfs: [
      { name: "Fortepiano Dasturi (PDF)", file: "Fortepiano-dasturi.pdf" },
    ],
  },
  {
    title: "Kompozitorlik va aranjirovka kafedrasi",
    pdfs: [
      { name: "Kompozitorlik san'ati (PDF)", file: "Kompozitorlik-sanati.pdf" },
      { name: "Aranjirovka asoslari (PDF)", file: "Aranjirovka-asoslari.pdf" },
      { name: "Notalashtirish (PDF)", file: "Notalashtirish.pdf" },
      {
        name: "Partituralarda zamonaviy nota grafikasi (PDF)",
        file: "Partituralarda-zamonaviy-nota-grafikasi.pdf",
      },
      {
        name: "Bastakorlikni o'qitish uslubiyoti (PDF)",
        file: "Bastakorlikni-oqitish-uslubiyoti.pdf",
      },
    ],
  },
  {
    title: "Musiqiy nazariya va tanlov fanlari kafedrasi",
    pdfs: [
      {
        name: "Musiqashunoslik asoslari (PDF)",
        file: "Musiqashunoslik-asoslari.pdf",
      },
      { name: "Musiqa tarixi (PDF)", file: "Musiqa-tarixi.pdf" },
      {
        name: "Musiqiy estrada tarixi (PDF)",
        file: "Musiqiy-estrada-tarixi.pdf",
      },
      {
        name: "Musiqa nazariyasi (vokal) (PDF)",
        file: "Musiqa-nazariyasi-vokal.pdf",
      },
      { name: "Musiqa nazariyasi (PDF)", file: "Musiqa-nazariyasi.pdf" },
      {
        name: "Jaz ritmikasi va musiqiy eshitishni rivojlantirish (PDF)",
        file: "Jaz-ritmikasi-va-musiqiy-eshitishni-rivojlantirish.pdf",
      },
      {
        name: "Estrada asarlarini tinglash va tahlil qilish (PDF)",
        file: "Estrada-asarlarini-tinglash-va-tahlil-qilish.pdf",
      },
      {
        name: "Musiqiy-nazariy tanlov fanlarni o'qitish uslubiyoti (PDF)",
        file: "Musiqiy-nazariy-tanlov-fanlarni-oqitish-uslubiyoti.pdf",
      },
      {
        name: "Radio va telejurnalistika notaligii (PDF)",
        file: "Radio-va-telejurnalistika-notaligii.pdf",
      },
      {
        name: "Musiqiy tahliliy ilmiy asoslari (PDF)",
        file: "Musiqiy-tahliliy-ilmiy-asoslari.pdf",
      },
    ],
  },
  {
    title: "Musiqiy ovoz rejissyorligi kafedrasi",
    pdfs: [
      {
        name: "Musiqiy ovoz rejissyorligi san'ati (PDF)",
        file: "Musiqiy-ovoz-rejissyorligi-sanati.pdf",
      },
      {
        name: "Tinglab tahlil qilish (PDF)",
        file: "Tinglab-tahlil-qilish.pdf",
      },
      {
        name: "Ovoz rejissyorligi akustikasi asoslari (PDF)",
        file: "Ovoz-rejissyorligi-akustikasi-asoslari.pdf",
      },
      {
        name: "Radio va televizionde ovoz rejissyorligi (PDF)",
        file: "Radio-va-televizionde-ovoz-rejissyorligi.pdf",
      },
      {
        name: "Fizika va elektronika asoslari (PDF)",
        file: "Fizika-va-elektronika-asoslari.pdf",
      },
      {
        name: "Ovoz yozish studiyalari, konsert zallari va ochiq maydonlarda foydalaniladigan zamonaviy texnik jihozlar (PDF)",
        file: "Ovoz-yozish-studiyalari-konsert-zallari-ochiq-maydonlarda-texnik-jihozlar.pdf",
      },
      {
        name: "Musiqiy ovoz rejissyorligini o'qitish uslubiyoti (PDF)",
        file: "Musiqiy-ovoz-rejissyorligini-oqitish-uslubiyoti.pdf",
      },
      {
        name: "Kompyuter musiqasi texnologiyalarini o'qitish uslubiyoti (PDF)",
        file: "Kompyuter-musiqasi-texnologiyalarini-oqitish-uslubiyoti.pdf",
      },
      {
        name: "Elektron va kompyuter musiqasi (zamonaviy musiqa audiodasturlar) (PDF)",
        file: "Elektron-va-kompyuter-musiqasi-zamonaviy-musiqa-audiodasturlar.pdf",
      },
      {
        name: "Ko'p yo'lakli fonogrammalarni tenglashtirish texnologiyasi (PDF)",
        file: "Kop-yolakli-fonogrammalarni-tenglashtirish-texnologiyasi.pdf",
      },
    ],
  },
  {
    title: "O'zbek tili, sport va garmoniya kafedrasi",
    pdfs: [
      {
        name: "Xorijiy Til (PDF)",
        file: "Xorijiy-Til.pdf",
      },
      {
        name: "Nutq madaniyati (PDF)",
        file: "Nutq-madaniyati.pdf",
      },
    ],
  },
  {
    title: "Estrada psixologiyasi pedagogikasi tayyorlash kafedrasi",
    pdfs: [
      {
        name: "Musiqiy pedagogika va psixologiya (PDF)",
        file: "Musiqiy-pedagogika-va-psixologiya.pdf",
      },
      {
        name: "Kasbiy pedagogika (PDF)",
        file: "Kasbiy-pedagogika.pdf",
      },
    ],
  },
  {
    title: "Estrada orkestri dirijyorligi kafedrasi",
    pdfs: [
      {
        name: "Dirijyorlik san'ati (PDF)",
        file: "Dirijyorlik-sanati.pdf",
      },
      {
        name: "Dirijyorlik va orkestr uslublari tarixi (PDF)",
        file: "Dirijyorlik-va-orkestr-uslublari-tarixi.pdf",
      },
      {
        name: "Orkestr cholg'ularini o'rganish (PDF)",
        file: "Orkestr-cholgularini-organish.pdf",
      },
      {
        name: "Estrada-simfonik orkestr repertuarini o'rganish (PDF)",
        file: "Estrada-simfonik-orkestr-repertuarini-organish.pdf",
      },
      {
        name: "Orkestr bilan ishlash (PDF)",
        file: "Orkestr-bilan-ishlash.pdf",
      },
      {
        name: "Dirijyorlikni o'qitish uslubiyoti (PDF)",
        file: "Dirijyorlikni-oqitish-uslubiyoti.pdf",
      },
      {
        name: "Orkestr bilan ishlash uslubiyoti (PDF)",
        file: "Orkestr-bilan-ishlash-uslubiyoti.pdf",
      },
      {
        name: "Dirijyorlik (estrada cholg'ulari) (PDF)",
        file: "Dirijyorlik-estrada-cholgulari.pdf",
      },
      {
        name: "Dirijyorlik (bastakorlik san'ati) (PDF)",
        file: "Dirijyorlik-bastakorlik-sanati.pdf",
      },
      {
        name: "Orkestr sinfi (PDF)",
        file: "Orkestr-sinfi.pdf",
      },
    ],
  },
];

const Bakalavr = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Container>
       <ActiveTopPage pageTitle={"Qabul dasturlari"} />
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
          Bakalavriyat ta'lim yo'nalishlari uchun o'quv dasturlari
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
                        <MdDownload style={{ fontSize: 22 }} className="header_icon"/> {pdf.name}
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

export default Bakalavr;
