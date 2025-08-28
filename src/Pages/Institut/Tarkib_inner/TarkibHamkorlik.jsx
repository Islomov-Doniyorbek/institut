import React from 'react'
import { useTranslation } from 'react-i18next'
import ActiveTopPage from '../../../components/activeTopPage'
import { FaHandPointRight, FaPhone } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'

const TarkibHamkorlik = () => {
     const {t}= useTranslation()
  return (
  <div>
          <ActiveTopPage pageTitle={ t("international")} />
    <div className='kengashinfo'>
        <div className='kengash_info_con'>
      <h1>{t("international")}</h1>
      <div className='market_man'>
      <div className='market_man_card'>
<span><BsPersonCircle /></span>
<h1>Boʻlimi boshlig‘i:<p>Abdullaeva Suraya Abdulaxadovna</p></h1>
      </div>
        <div className='market_man_card'>
<span><FaPhone /></span>
<h1>Tel:<p>+998 97 741 16 32</p></h1>
      </div>
        <div className='market_man_card'>
<span><MdOutlineAlternateEmail /></span>
<h1>E-mail:<p>abdullaeva1954@mail.ru</p></h1>
      </div>
      </div>
      <div className='kengashinfo_box hamkorlik_box'>
<h2>Boʻlim faoliyatining asosiy maqsadi institutning ta’lim dasturlari sifatini oshirishga qaratilgan xalqaro hamkorlik dasturlarida ishtirokini tashkil etish va muvofiqlashtirishdir.
<br/>
Xalqaro boʻlimning asosiy vazifalari quyidagilardan iborat:</h2>
<div className='market_card'>
    <span><FaHandPointRight /></span>
institut va xorijiy ta’lim muassasalari va xalqaro tashkilotlar bilan hamkorlik shartnomalari loyihalarini tayrlash;
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
xalqaro hamkorlik dasturlarini shakllantirish;
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
xorijiy va xalqaro ijodiy loyihalar, tanlovlar, festivallar axborotni toʻplash va tizimlashtirish;
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
institut professor-oʻqituvchilarini xalqaro ta’lim va ijodiy faoliyatda ishtirok etishga jalb qilish;
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
institutning xalqaro faoliyati doirasida xodimlar, magistrantlar va talabalar uchun stajirovkalarni tashkil etish;
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
institutda xorijiy professor-oʻqituvchilari ta’lim va ijodiy faoliyatni tashkil etish;
</div>

  </div>
      </div>
    </div>
    </div>
  )
}

export default TarkibHamkorlik
