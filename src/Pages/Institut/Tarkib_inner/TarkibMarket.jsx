import React from 'react'
import { useTranslation } from 'react-i18next'
import ActiveTopPage from '../../../components/activeTopPage'
import { FaHandPointRight } from 'react-icons/fa'

const TarkibMarket = () => {
         const {t}= useTranslation()
  return (
       <div>
          <ActiveTopPage pageTitle={ t("marketing")} />
    <div className='kengashinfo'>
        <div className='kengash_info_con market_con'>
      <h1>{t("marketing")}</h1>
      <div className='tarkibmarket_box'>
<h1>{t('market_title')}</h1>
<div className='market_card'>
    <span><FaHandPointRight /></span>
{t('market_title2')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title3')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title4')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title5')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title6')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title7')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title8')}
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
{t('market_title9')}
</div>
  </div>
      </div>
    </div>
    </div>
  )
}

export default TarkibMarket
