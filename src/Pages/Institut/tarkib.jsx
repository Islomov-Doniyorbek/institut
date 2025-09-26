import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import NotFoundPage from '../../components/404'
import ContactComp from '../../components/contactComp'
import { GrFormNext } from 'react-icons/gr'
import { IoArrowForwardCircle } from 'react-icons/io5'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Tarkib = () => {
 const {t}= useTranslation()
 const navigate = useNavigate()
  return (
    <div>
      <ActiveTopPage pageTitle={"Tarkibiy tuzilma"}/>
<div className='tarkib_tuzilma'>
  <div className='tarkib_tuzilma_box'>
      <h1>{t("structure_title")}:</h1>

      <div className='tarkib_cards'>
        <h2>{t("rector")} <span><GrFormNext /></span></h2>
        <h3 onClick={()=>{navigate("/Institut/Tuzilma/Inner")}}>{t("mesi_council")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("trustees_council")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("advisory_council")}<span><IoArrowForwardCircle /></span></h3>
      </div>

      <div className='tarkib_cards'>
        <h2>{t("youth_prorector")} <span><GrFormNext /></span></h2>
        <h3>{t("youth_department")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("tutors")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("museum")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("concert_department")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("community_orgs")}<span><IoArrowForwardCircle /></span></h3>
      </div>

      <div className='tarkib_cards'>
        <h2>{t("study_prorector")}<span><GrFormNext /></span></h2>
        <h3 onClick={()=>{navigate("/Institut/fakultet")}}>{t("faculties")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("teaching_department")}<span><IoArrowForwardCircle /></span></h3>
        <h3 onClick={()=>{navigate("/Institut/Tuzilma/InnerReg")}}>{t("registrar")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("assistants")}<span><IoArrowForwardCircle /></span></h3>
        <h3  onClick={()=>{navigate("/Institut/Tuzilma/AxborotTizim")}}>{t("library")}<span><IoArrowForwardCircle /></span></h3>
        <h3 onClick={()=>{navigate("/Institut/Tuzilma/tarkibmarketing")}}>{t("marketing")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("video_phonetics")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("recording")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("distance")}<span><IoArrowForwardCircle /></span></h3>
      </div>

      <div className='tarkib_cards'>
        <h2>{t("science_prorector")}<span><GrFormNext /></span></h2>
        <h3>{t("research_sector")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("talented_students")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("magistracy")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("publishing")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("commercialization")}<span><IoArrowForwardCircle /></span></h3>
      </div>

      <div className='tarkib_cards'>
        <h2>{t("manager")}<span><GrFormNext /></span></h2>
        <h3>{t("finance")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("accounting")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("engineer")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("digital_center")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("technical")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("equipment")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("safety")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("nurse")}<span><IoArrowForwardCircle /></span></h3>
      </div>

      <div className='tarkib_cards'>
        <h2>{t("other_departments")}<span><GrFormNext /></span></h2>
        <h3>{t("quality")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("appeals")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("archive")}<span><IoArrowForwardCircle /></span></h3>
        <h3 onClick={()=>{navigate("/Institut/Tuzilma/tarkibhamkorlik")}}>{t("international")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("lawyer")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("secretary")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("advisor")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("press")}<span><IoArrowForwardCircle /></span></h3>
        <h3>{t("psychologist")}<span><IoArrowForwardCircle /></span></h3>
      </div>
    </div>


<div className='tarkib_tuzilma_right'>
     <ContactComp />
     </div>

</div>
    </div>
  
  )
}

export default Tarkib
