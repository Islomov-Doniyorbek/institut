import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

const Projects = () => {
  return (
       <div className='activ'>
           <div className='active_top'>
         <h1>Ilmiy loyihalar</h1>
         <p>Bosh sahifa - Ilmiy loyihalar</p>
         </div>
         <div className='active_padd'>
         <div className='active_box'>
     <div className='active_img council_img'>
     <h2>Ilmiy loyihalar</h2>
     <span></span>
     <p>Botir Zokirov nomidagi Milliy estrada san’ati institutining ilmiy loyihalari haqida ma’lumot.</p>
     </div>
     <div className='active_text'>
     <button><span><FaRegFilePdf /></span>Institut taqdimoti</button>
     <div className='active_text_box'>
     <h1>Hurmatli foydalanuvchi!</h1>
     <p>Institut haqida qoʻshimcha ma’lumot olish uchun info@estrada-art.uz elektron pochta manziliga xabar yuboring yoki +998 71 200 00 00 raqamiga qoʻngʻiroq qiling.</p>
     </div>
     <button className='phone_way'><span><FiPhoneCall /></span>Bog'lanish</button>
     </div>
         </div>
  
         </div>
     
         <div className="active_connect">
     <h1>Qo‘shimcha ma’lumot olish uchun institut matbuot xizmatiga murojaat qiling</h1>
     <button>Bog'lanish <span><FiPhoneCall /></span></button>
         </div>
         </div>
  )
}

export default Projects;
