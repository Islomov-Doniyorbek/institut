import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ActiveTopPage from '../../components/activeTopPage'
import ContactComp from '../../components/contactComp'

const Place = () => {
  return (
    <div className='places'>
            <ActiveTopPage pageTitle={"Qabul Bakalavr"} />
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

    <ContactComp/>


        </div>
    </div>
  )
}

export default Place
