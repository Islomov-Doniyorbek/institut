import React from 'react'
import './Training.css'
import { FiPhoneCall } from 'react-icons/fi'
import { FaDownload } from 'react-icons/fa'
const LessonTable = ({pageTitle}) => {
  return (
    <div>
       <div className='callcenter_top_text'>
        <h1>Dars jadvali (BA & MA)</h1>
        <p>Bosh sahifa - {pageTitle}</p>
        </div>
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
     
         <div className='active_text_box allnews_right_text places_text'>
                       <h1>Hurmatli foydalanuvchi!</h1>
                       <p>
                         Institut haqida qoʻshimcha ma’lumot olish uchun info@estrada-art.uz elektron pochta manziliga
                         xabar yuboring yoki +998 71 200 00 00 raqamiga qoʻngʻiroq qiling.
                       </p>
                       <button><span><FiPhoneCall /></span>Bog'lanish</button>
                     </div>
     
     
             </div>
    </div>
  )
}

export default LessonTable
