import React from 'react'
import { useTranslation } from 'react-i18next'
import { GiFeather } from 'react-icons/gi'
const About = () => {
  const {t }=useTranslation()
  return (
       <div className='about'>
        <div className='about_text'>
            <h1>{t("pre_sente")}</h1>
      <p>{t("prezident")}</p>
      <span>{t("sente-frag")} <b><GiFeather /></b></span>
        </div>
    </div>
  )
}

export default About;

