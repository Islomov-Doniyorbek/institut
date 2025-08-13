import React from 'react'
import { useTranslation } from 'react-i18next'
import {  FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
const ContactComp = () => {
  const {t} =useTranslation()
  return (
    <div className='active_text'>
        <button><span><FaRegFilePdf /></span>{t("institute_presentation")}</button>
        <div className='active_text_box'>
            <h1>{t("dear_user")}</h1>
            <p>{t("institute_contact_info")}</p>
        </div>
        <button className='phone_way'><span><FiPhoneCall /></span>{t("download")}</button>
    </div>
  )
}

export default ContactComp
