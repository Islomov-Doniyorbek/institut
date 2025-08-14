import React from 'react'
import ActiveTopPage from '../../components/activeTopPage';
import { useTranslation } from 'react-i18next';
import NotFoundPage from '../../components/404';
const Grand = () => {
   const {t}=useTranslation()
  return (
 <div className='achiv'>
        <ActiveTopPage pageTitle={t("grant_application")} />
        <NotFoundPage/>
    </div>
  )
}

export default Grand;
