import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'
import NotFoundPage from '../../components/404'
const Achievements = () => {
   const {t}=useTranslation()
  return (
    <div className='achiv'>
           <ActiveTopPage pageTitle={t("send_achievements")} />
      <NotFoundPage/>
    </div>
  )
}

export default Achievements
