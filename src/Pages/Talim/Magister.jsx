import React from "react";
import ActiveTopPage from "../../components/activeTopPage";
import CourseItem from "../../components/CourseItem";
import "./Training.css";
import { useTranslation } from "react-i18next";

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
      },
    ],
  },
  {
    title: " Musiqiy-nazariy va tarixiy fanlar kafedrasi",
    pdfs: [
      {
        name: "Ilmiy-tadqiqot-metodologiyasi",
        file: "Ilmiy-tadqiqot-metodologiyasi.pdf",
      },
      { name: "Musiqashunoslik", file: "Musiqashunoslik.pdf" },
      {
        name: "Musiqiy-tanqidning-ilmiy-asoslari",
        file: "Musiqiy-tanqidning-ilmiy-asoslari.pdf",
      },
      {
        name: "Zamonaviy-musiqa-shakli",
        file: "Zamonaviy-musiqa-shakli.pdf",
      },
      { name: "Zamonaviy-garmoniya", file: "Zamonaviy-garmoniya.pdf" },
      {
        name: "Zamonaviy-polifoniya",
        file: "Zamonaviy-polifoniya.pdf",
      },
      {
        name: "Jahon-va-O‘zbek-musiqiy-estrada-tarixi-va-nazariyasi",
        file: "Jahon-va-O‘zbek-musiqiy-estrada-tarixi-va-nazariyasi.pdf",
      },
      {
        name: "XXI-asr-jahon-musiqa-madaniyati",
        file: "XXI-asr-jahon-musiqa-madaniyati.pdf",
      },
      {
        name: "XXI-asr-O‘zbekiston-musiqa-madaniyati",
        file: "XXI-asr-O‘zbekiston-musiqa-madaniyati.pdf",
      },
    ],
  },
  {
    title: " Estrada xonandaligi kafedrasi ",
    pdfs: [
      {
        name: "Mutaxassislik-fannlarni-o‘qitish-metodikasi",
        file: "Mutaxassislik-fannlarni-o‘qitish-metodikasi.pdf",
      },
      {
        name: "Estrada-xonandalik-mahorati",
        file: "Estrada-xonandalik-mahorati.pdf",
      },
      {
        name: "Xonandalik-ansambl-san‘ati",
        file: "Xonandalik-ansambl-san‘ati.pdf",
      },
      { name: "Improvizatsiya-mahorati", file: "Improvizatsiya-mahorati.pdf" },
      {
        name: "Orkestr-jo‘rligida-ijrochilik-mahorati",
        file: "Orkestr-jo‘rligida-ijrochilik-mahorati.pdf",
      },
    ],
  },
  {
    title: " Musiqiy ovoz rejissyorligi kafedrasi",
    pdfs: [
      {
        name: "Mutaxassislik-fanlarni-o‘qitish-metodikasi-1",
        file: "Mutaxassislik-fanlarni-o‘qitish-metodikasi-1.pdf",
      },
      {
        name: "Musiqiy-ovoz-rejissorligi-mahorati",
        file: "Musiqiy-ovoz-rejissorligi-mahorati.pdf",
      },
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
      {
        name: "Estrada-orkestri-dirijorligi-mahorati",
        file: "Estrada-orkestri-dirijorligi-mahorati.pdf",
      },
      {
        name: "Orkestr-mashg‘uloti",
        file: "Orkestr-mashg‘uloti.pdf",
      },
    ],
  },
];

const Magister = () => {
    const {t}=useTranslation()
  return (
    <>
      <ActiveTopPage   pageTitle={t("master_page_title")} />
      <CourseItem
       title={t("master_programs")}
        yoNalishlar={yoNalishlar}
      />
    </>
  );
};

export default Magister;
