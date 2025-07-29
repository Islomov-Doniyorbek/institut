import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

const Place = ({pageTitle}) => {
  return (
    <div className='places'>
            <div className='callcenter_top_text'>
        <h1>Qabul “Call centre”</h1>
        <p>Bosh sahifa - {pageTitle}</p>
        </div>
        <div className='places_box'>
<div className='places_row'>
<div className='places_card'>
<h1>2024-2025 o‘quv yilida bakalavriat ta’lim yo‘nalishlari uchun qabul kvotasini yuklab olish:</h1>
<a  href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
  <p><span><FaDownload /></span>2024-2025 o‘quv yili qabul kvotasi (bakalavriat) hamda o'tish ballari</p>
</a>
</div>

<div className='places_card'>
<h1>2024-2025 o‘quv yilida magistratura ta’lim yo‘nalishlari uchun qabul kvotasini yuklab olish:</h1>
<a  href="/Images/2-илова.pdf" download="2-илова(1).pdf" type="application/pdf">
<p><span><FaDownload /></span>2024-2025 o‘quv yili qabul kvotasi (magistratura) hamda o'tish ballari</p>
</a>
</div>


</div>

    <div className='active_text_box allnews_right_text places_text'>
                  <h1>Hurmatli foydalanuvchi!</h1>
                  <p>
                    Institut haqida qoʻshimcha ma’lumot olish uchun info@estrada-art.uz elektron pochta manziliga
                    xabar yuboring yoki +998 71 200 00 00 raqamiga qoʻngʻiroq qiling.
                  </p>
                  <button><span><FiPhoneCall /></span>Bog'lanish</button>
                </div>


        </div>
    </div>
  )
}

export default Place
