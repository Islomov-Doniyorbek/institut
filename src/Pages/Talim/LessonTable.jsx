import React from 'react'
import './Training.css'
import { FiPhoneCall } from 'react-icons/fi'
import { FaDownload } from 'react-icons/fa'
import ActiveTopPage from '../../components/activeTopPage'
import ContactComp from '../../components/contactComp'
import { useTranslation } from 'react-i18next'
const LessonTable = () => {
     const {t}=useTranslation()
  return (
    <div>
       <ActiveTopPage pageTitle={t("schedule")}  />
      <div className='places_box'>
     <div className='places_row'>
     <div className='places_card'>
     <h1>{t("bachelor_schedule_title")}</h1>
     <a  href="/Images/Dars-jadval-o‘zbek-guruh.pdf" download="Dars-jadval-o‘zbek-guruh.pdf" type="application/pdf">
       <p><span><FaDownload /></span>{t("bachelor_schedule_uz")}</p>
     </a>
       <a  href="/Images/Dars-jadval-rus-guruh.pdf" download="Dars-jadval-rus-guruh.pdf" type="application/pdf">
     <p><span><FaDownload /></span>{t("bachelor_schedule_ru")}</p>
     </a>
     </div>
     
     <div className='places_card'>
      <h1>{t("master_schedule_title")}</h1>
     <a  href="/Images/Dars-jadval-magisrtatura.pdf" download="Dars-jadval-magisrtatura.pdf" type="application/pdf">
     <p><span><FaDownload /></span>{t("master_schedule")}</p>
     </a>
     </div>
     
     
     </div>
     
         <ContactComp/>
     
     
             </div>
    </div>
  )
}

export default LessonTable
