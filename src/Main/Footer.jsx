import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'

export default function Footer() {
      const {t }=useTranslation()
  return (
    <div className='footer'>
      <div className='footer_text'>
      <p className='text_line'></p>
<h1>{t("foot_text")}</h1>
      </div>
      
      <div className='footer_icon'>
           <span className='text_line'></span>
<p className='fo_facebook'><ImFacebook /></p>
<p className='fo_instagram'><FaInstagram /></p>
<p className='fo_telegram'><FaTelegram /></p>
<p className='fo_youtube'> <FaYoutube /></p>
      </div>
    </div>
  )
}
