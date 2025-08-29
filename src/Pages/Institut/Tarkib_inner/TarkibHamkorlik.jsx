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
<h1>{t("hamkorlik_bog")}:<p>Abdullaeva Suraya Abdulaxadovna</p></h1>
      </div>
        <div className='market_man_card'>
<span><FaPhone /></span>
<h1>{t("tel")}:<p>+998 97 741 16 32</p></h1>
      </div>
        <div className='market_man_card'>
<span><MdOutlineAlternateEmail /></span>
<h1>{t("email")}:<p>abdullaeva1954@mail.ru</p></h1>
      </div>
      </div>
      <div className='kengashinfo_box hamkorlik_box'>
<h2> { t("t1") }<br/>
{ t("t2") }</h2>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{ t("t3") }
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{ t("t4") }
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{ t("t5") }
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{ t("t6") }
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{ t("t7") }
</div>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{ t("t8") }
</div>

  </div>
      </div>
    </div>
    </div>
  )
}

export default TarkibHamkorlik
