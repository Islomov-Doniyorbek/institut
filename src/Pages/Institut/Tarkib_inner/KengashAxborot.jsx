import React from 'react'
import { useTranslation } from 'react-i18next'
import axborot from '../../../institutinges/axborot.jpg'
import ActiveTopPage from '../../../components/activeTopPage'
const KengashAxborot = () => {
     const {t}= useTranslation()
  return (
    <div>
          <ActiveTopPage pageTitle={ t("library")} />
        <div className='kengashinfo'>
        <div className='kengash_info_con kengash_axbo'>
      <h1>{t("library")}</h1>
      <div className='kengashinfo_images'>
<img src={axborot}/>
      </div>
      <div className='kengashinfo_box'>
{t("library_text1")}<br/>

{t("library_text2")}<br/>

{t("library_text3")}<br/>

{t("library_text4")}<br/>

{t("library_text5")}<br/>

{t("library_text6")}<br/>

{t("library_text7")}<br/>

{t("library_text8")}<br/>
      </div>
      </div>
    </div>
        </div>
  )
}

export default KengashAxborot
