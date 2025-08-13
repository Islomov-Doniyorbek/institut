import React from 'react'
import error from '../../Images/2104.i301.004.S.m004.c13.404 error isometric composition.jpg'
import ActiveTopPage from '../../components/activeTopPage';
import { useTranslation } from 'react-i18next';
const Grand = () => {
   const {t}=useTranslation()
  return (
 <div className='achiv'>
        <ActiveTopPage pageTitle={t("grant_application")} />
      <div className='achiv_img'>
<img src={error}/>
      </div>
    </div>
  )
}

export default Grand;
