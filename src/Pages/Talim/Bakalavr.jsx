import React from "react";
import ActiveTopPage from "../../components/activeTopPage";
import CourseItem from "../../components/CourseItem";
import "./Training.css";
import { useTranslation } from "react-i18next";

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
  const {t}=useTranslation()
  return (
    <>
      <ActiveTopPage   pageTitle={t("admission_page_title")} />
      <CourseItem
         title={t("bachelor_programs")}
        yoNalishlar={yoNalishlar}
      />
    </>
  );
};

export default Bakalavr;
