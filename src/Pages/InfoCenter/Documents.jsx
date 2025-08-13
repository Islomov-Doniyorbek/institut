import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import document from '../../Images/main_doc.jpg'
import document2 from '../../Images/documnt1.jpg'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { GrLanguage } from 'react-icons/gr'
import { useTranslation } from 'react-i18next'

const Documents = () => {
const {t}=useTranslation()
  return (
 <div>
  <div className='allnews_top accept_top document_top'>
    <h1>{t("admission_2025")}</h1>
    <p>{t("breadcrumb_admission")}</p>
  </div>

  <div className='document_box'>
    <div className='document_box_top'>
      <h1>{t("exam_results")}</h1>
      <p>{t("exam_results_desc")}</p>
    </div>

    <div className='document_box_center'>
      <div className='document_boxshadow'>
        <div className='document_center_top'>
          <img src={document}/>
          <h2>{t("instrument_exam_title")}</h2>
        </div>
        <div className='document_center_center'>
          <h3>
            <span><FaCalendarAlt /></span>
            <p>{t("date")}:</p> 2025-yil 9-iyul
          </h3>
          <h3>
            <span><MdOutlineLibraryMusic /></span>
            <p>{t("exam_type")}:</p> {t("exam_type_professional")}
          </h3>
          <h3>
            <span><GrLanguage /></span>
            <p>{t("language")}:</p> {t("language_uz")}
          </h3>
        </div>
        <div className='document_img'>
          <img src={document2}/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Documents
