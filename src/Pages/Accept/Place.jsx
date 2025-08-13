import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ActiveTopPage from '../../components/activeTopPage'
import ContactComp from '../../components/contactComp'
import { useTranslation } from 'react-i18next'

const Place = () => {
  const {t}=useTranslation()
  return (
<div className='places'>
  <ActiveTopPage pageTitle={t("page_title_bachelor")} />
  <div className='places_box'>
    <div className='places_row'>
      <div className='places_card'>
        <h1>{t("bachelor_heading")}</h1>
        <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
          <p><span><FaDownload /></span>{t("bachelor_file")}</p>
        </a>
      </div>

      <div className='places_card'>
        <h1>{t("master_heading")}</h1>
        <a href="/Images/2-илова.pdf" download="2-илова(1).pdf" type="application/pdf">
          <p><span><FaDownload /></span>{t("master_file")}</p>
        </a>
      </div>
    </div>

    <ContactComp/>
  </div>
</div>
  )
}

export default Place
