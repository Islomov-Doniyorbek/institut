import React from 'react'
import { useTranslation } from 'react-i18next'
import ActiveTopPage from '../../../components/activeTopPage'

const KengashInfo = () => {
     const {t}= useTranslation()
  return (
    <div>
          <ActiveTopPage pageTitle={ t("mesi_council")} />
    <div className='kengashinfo'>
        <div className='kengash_info_con'>
      <h1>{t("mesi_council")}</h1>
      <div className='kengashinfo_box'>
{t("mesi_council_text1")}<br/>

{t("mesi_council_text2")}<br/>

{t("mesi_council_text3")}<br/>

{t("mesi_council_text4")}<br/>

{t("mesi_council_text5")}<br/>

{t("mesi_council_text6")}<br/>

{t("mesi_council_text7")}<br/>

{t("mesi_council_text8")}<br/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default KengashInfo
