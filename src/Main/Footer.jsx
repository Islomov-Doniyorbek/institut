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
<a 
  href="https://www.facebook.com/estradaart.uz" 
  className="fo_facebook" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <ImFacebook />
</a>

<a 
  href="https://www.instagram.com/estradaart.uz" 
  className="fo_instagram" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

<a 
  href="https://t.me/BZokirovnomidagiMesi" 
  className="fo_telegram" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaTelegram />
</a>
<p className='fo_youtube'> <FaYoutube /></p>
      </div>
    </div>
  )
}
