import React from 'react'
import {  FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
const ContactComp = () => {
  return (
    <div className='active_text'>
        <button><span><FaRegFilePdf /></span>Institut taqdimoti</button>
        <div className='active_text_box'>
            <h1>Hurmatli foydalanuvchi!</h1>
            <p>Institut haqida qoʻshimcha ma’lumot olish uchun info@estrada-art.uz elektron pochta manziliga xabar yuboring yoki +998 71 200 00 00 raqamiga qoʻngʻiroq qiling.</p>
        </div>
        <button className='phone_way'><span><FiPhoneCall /></span>Bog'lanish</button>
    </div>
  )
}

export default ContactComp
