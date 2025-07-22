import React from 'react'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_text'>
      <p className='text_line'></p>
<h1>© 2025 O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy   <br/>  estrada 
san’ati instituti. Barcha huquqlar himoyalanan. Ushbu veb-saytidagi , ma'lumotlardan  foydalanilganda,  manbaga havola berish majburiy.</h1>
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
