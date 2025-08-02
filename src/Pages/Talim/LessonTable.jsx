import React from 'react'
import './Training.css'
import { FiPhoneCall } from 'react-icons/fi'
import { FaDownload } from 'react-icons/fa'
import ActiveTopPage from '../../components/activeTopPage'
import ContactComp from '../../components/contactComp'
const LessonTable = () => {
  return (
    <div>
       <ActiveTopPage pageTitle={"Dars jadvali"} />
      <div className='places_box'>
     <div className='places_row'>
     <div className='places_card'>
     <h1>Bakalavriyat ta’lim yo‘nalishlari uchun dars jadvalini yuklab olish:</h1>
     <a  href="/Images/Dars-jadval-o‘zbek-guruh.pdf" download="Dars-jadval-o‘zbek-guruh.pdf" type="application/pdf">
       <p><span><FaDownload /></span>Dars jadvali (oʻzbek guruhi)</p>
     </a>
       <a  href="/Images/Dars-jadval-rus-guruh.pdf" download="Dars-jadval-rus-guruh.pdf" type="application/pdf">
       <p><span><FaDownload /></span>Dars jadvali (rus guruhi)</p>
     </a>
     </div>
     
     <div className='places_card'>
     <h1>Magistratura ta’lim yo‘nalishlari uchun dars jadvalini yuklab olish:</h1>
     <a  href="/Images/Dars-jadval-magisrtatura.pdf" download="Dars-jadval-magisrtatura.pdf" type="application/pdf">
     <p><span><FaDownload /></span>Dars jadvali (magistratura)</p>
     </a>
     </div>
     
     
     </div>
     
         <ContactComp/>
     
     
             </div>
    </div>
  )
}

export default LessonTable
