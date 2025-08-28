import React from 'react'
import { GrDocumentPdf } from 'react-icons/gr'
import tuzilma from '../../institutinges/photo_2025-08-28_14-11-07.jpg'
import tuzilma2 from '../../institutinges/photo_2025-08-28_14-11-11.jpg'
import pdf1 from "../../institutinges/МЭСИ ПП-5261.pdf";
import pdf2 from "../../institutinges/Жамоа Шартномаси  2023-2025 PDF.pdf";
import pdf3 from "../../institutinges/Б.Зокиров ГУВОХНОМА 2022й..pdf";
import pdf4 from "../../institutinges/Б.Зокиров СВИДЕТЕЛЬСТВО 2022й..pdf";
import pdf5 from "../../institutinges/Б.Зокиров УСТАВ 2022й. .pdf";
import { useTranslation } from 'react-i18next'
const History_doc = () => {
    const {t}=useTranslation()
  return (
    <div className='tarixiy_doc'>
        <h1>{t("history_doc_title")} <span><GrDocumentPdf /></span></h1> 
      <div className='tarixiy_doc_card'>
<h2>{t("history_doc_sub")}</h2>
<div className='tarixiy_doc_a_row'>
<div className='tarixiy_doc_a'>
  <a href={pdf1} target="_blank" rel="noopener noreferrer">
    <h2><span><GrDocumentPdf /></span>МЭСИ ПП-5261.pdf</h2>
  </a>
</div>

<div className='tarixiy_doc_a'>
  <a href={pdf2} target="_blank" rel="noopener noreferrer">
    <h2><span><GrDocumentPdf /></span>Жамоа Шартномаси  2023-2025 PDF.pdf</h2>
  </a>
</div>
</div>
<div className='tarixiy_doc_img'>
    <div className='tarixiy_doc_img_card'>
          <img src={tuzilma}/>
    </div>
 <div className='tarixiy_doc_img_card'>
          <img src={tuzilma2}/>
    </div>
</div>
      </div>


         <div className='tarixiy_doc_card'>
<h2>{t("history_doc_sub2")}</h2>
<div className='tarixiy_doc_a_row'>
<div className='tarixiy_doc_a'>
  <a href={pdf3} target="_blank" rel="noopener noreferrer">
    <h2><span><GrDocumentPdf /></span>Б.Зокиров ГУВОХНОМА 2022й..pdf</h2>
  </a>
</div>

<div className='tarixiy_doc_a'>
  <a href={pdf4} target="_blank" rel="noopener noreferrer">
    <h2><span><GrDocumentPdf /></span>Б.Зокиров СВИДЕТЕЛЬСТВО 2022й..pdf</h2>
  </a>
</div>

<div className='tarixiy_doc_a'>
  <a href={pdf5} target="_blank" rel="noopener noreferrer">
    <h2><span><GrDocumentPdf /></span>Б.Зокиров УСТАВ 2022й. .pdf</h2>
  </a>
</div>
</div>
      </div>



      
         <div className='tarixiy_doc_card'>
<h2>
{t("history_doc_sub3")} </h2>
<div className='tarixiy_doc_a_row'>
<div className='tarixiy_doc_a'>
  <a href={pdf2} target="_blank" rel="noopener noreferrer">
    <h2><span><GrDocumentPdf /></span>Жамоа Шартномаси  2023-2025 PDF.pdf</h2>
  </a>
</div>
</div>
      </div>
    </div>
  )
}

export default History_doc
