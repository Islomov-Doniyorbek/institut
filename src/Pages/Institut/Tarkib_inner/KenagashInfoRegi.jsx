import React from 'react'
import { useTranslation } from 'react-i18next'
import office from '../../../institutinges/office1.jpg'
import office1 from '../../../institutinges/office2.jpg'
import office2 from '../../../institutinges/office3.jpg'
import { FaPhone, FaTelegram } from 'react-icons/fa'
import ActiveTopPage from '../../../components/activeTopPage'

const KenagashInfoRegi = () => {
  const { t } = useTranslation()

  return (
    <div>
      <ActiveTopPage pageTitle={t("registrar")} />
      <div className='kengashinfo'>
        <div className='kengash_info_con kengash_info_reg'>
          <h1>{t("registrar")}</h1>
          <p>{t("institute_name")}</p>
          <div className='kengashinfo_box'>
            <p>{t("office_desc")}</p>
            
            <h2>{t("office_activity")}</h2>
            <p>{t("office_head")}</p>
            
            <h2>{t("front_office")}</h2>
            <p>{t("front_office_desc")}</p>
            
            <h2>{t("back_office")}</h2>
            <p>{t("back_office_desc")}</p>
            
            <p>{t("start_date")}</p>
            <p>{t("service_stats")}</p>
          </div>
        </div>

        <div className='kengash_reg_men'>
          <div className='kengash_reg_men_row'>

            <div className='kengash_reg_men_card'>
              <div className='kengash_reg_men_img'>
                <img src={office} alt="Office Head" />
              </div>
              <h1>Karimov Asiljon Olimjon o‘g‘li</h1>
              <p>{t("office_head")}</p>
              <h2><span><FaTelegram /></span>@Asil_Olimovich</h2>
              <h2><span><FaPhone /></span>+998 99 048 95 05</h2>
            </div>

            <div className='kengash_reg_men_card'>
              <div className='kengash_reg_men_img'>
                <img src={office1} alt="Front Office Manager" />
              </div>
              <h1>Yo‘ldashov Samandar Ortiq o‘g‘li</h1>
              <p>{t("front_office")}</p>
              <h2><span><FaTelegram /></span>@Samandar0535</h2>
              <h2><span><FaPhone /></span>+998 94 413 05 35</h2>
            </div>

            <div className='kengash_reg_men_card'>
              <div className='kengash_reg_men_img'>
                <img src={office2} alt="Back Office Manager" />
              </div>
              <h1>Matyaqubov Jo‘shqinbek Bozorboy o‘gʻli</h1>
              <p>{t("back_office")}</p>
              <h2><span><FaTelegram /></span>@Joshqinbek_Matyaqubov</h2>
              <h2><span><FaPhone /></span>+998 50 779 01 44</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default KenagashInfoRegi
