import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Projects = () => {
    const {t}=useTranslation()
  return (
       <div className='activ'>
           <ActiveTopPage pageTitle={t("projects")} />
         <div className='active_padd'>
         <div className='active_box project-box'>
     <div className='active_img council_img project-img'>
     <h2>{t("projects")}</h2>
     <span></span>
     <p>{t("scientific_projects_info")}</p>
     </div>
     <div className='active-alw project-alw'>
<ContactComp/>
</div>
         </div>
  
         </div>
     
         <div className="active_connect">
  <h1>{t("contact_for_more")}</h1>
  <button>{t("contact_button")} <span><FiPhoneCall /></span></button>
         </div>
         </div>
  )
}

export default Projects;
