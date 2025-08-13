import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdLocalPhone, MdOutlineMarkEmailRead } from 'react-icons/md'
import { TbDeviceLandlinePhone } from 'react-icons/tb'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'


export default function Connect() {
 const {t }=useTranslation()
  return (
    <div className='connect_line'>
        <ActiveTopPage pageTitle={t("contact")} />
<div className='connect_box'>
  <h1>{t("contact_title")}</h1>
  <h2>{t("contact_institute")}</h2>

  <div className='connect_row'>
    <div className='connect_col'>
      <div className='connect_col_icon'>
          <span><MdLocalPhone /></span>
      </div>
      <div className='connect_col_text'>
          <p>{t("contact_tel")}</p>
          <h1>+998 71 200 00 00</h1>
      </div>
    </div>

    <div className='connect_col'>
      <div className='connect_col_icon'>
          <span><TbDeviceLandlinePhone /></span>
      </div>
      <div className='connect_col_text'>
          <p>{t("contact_fax")}</p>
          <h1>+998 71 200 00 00</h1>
      </div>
    </div>

    <div className='connect_col'>
      <div className='connect_col_icon'>
          <span><MdOutlineMarkEmailRead /></span>
      </div>
      <div className='connect_col_text'>
          <p>{t("contact_email")}</p>
          <h1>info@consulting.com</h1>
      </div>
    </div>

    <div className='connect_col'>
      <div className='connect_col_icon'>
          <span><FaLocationDot /></span>
      </div>
      <div className='connect_col_text'>
          <p>{t("contact_address")}</p>
          <h1>Toshkent 100027, Botir Zokirov ko'chasi 1-uy</h1>
      </div>
    </div>
  </div>
</div>



     <div className='connect_send'>
  <h1>{t("send_message")}</h1>
  <div className='connect_send_box'>
    <div className='connect_connect'>
      <div className='connect_send_card'>
        <h2>{t("send_name")}</h2>
        <input type='text' placeholder={t("send_name_placeholder")} />
      </div>

      <div className='connect_send_card'>
        <h2>{t("send_email")}</h2>
        <input type='email' placeholder={t("send_email_placeholder")} />
      </div>
    </div>

    <div className='connect_send_textarea'>
      <h2>{t("send_message_text")}</h2>
      <textarea
        id="message"
        name="message"
        rows="5"
        cols="30"
        placeholder={t("send_message_placeholder")}
      ></textarea>
    </div>

    <div className='connect_send_send'>
      <button>{t("send_button")}</button>
    </div>
  </div>
</div>


    </div>
  )
}
