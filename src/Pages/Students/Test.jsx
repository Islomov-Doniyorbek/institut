import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'
import NotFoundPage from '../../components/404'
const Test = () => {
  const {t}=useTranslation()
  return (
  <div className='achiv'>
      <ActiveTopPage pageTitle={t("grant_test")} />
      <NotFoundPage/>
    </div>
  )
}

export default Test
