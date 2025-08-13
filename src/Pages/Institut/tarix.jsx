import React, { useState } from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import { BsMusicNote, BsMusicNoteBeamed } from 'react-icons/bs'
import Container from '../../components/Container'
import tarix from '../../assets/imgs/tarix.jpg'
import { MdClose } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
const Tarix = () => {

  const tarixlar = [
    {
      id: 0,
      years: 'history_0_years',
      title: "history_0_title",
      data: "history_0_data"
    },
    {
      id: 1,
      years: 'history_1_years',
      title: "history_1_title",
      data: "history_1_data"
    },
    {
      id: 2,
      years: 'history_2_years',
      title: "history_2_title",
      data: "history_2_data"
    },
    {
      id: 3,
      years: 'history_3_years',
      title: "history_3_title",
      data: "history_3_data"
    },
    {
      id: 4,
      years: 'history_4_years',
      title: "history_5_title",
      data: "history_4_data"
    },
  ]

  const [openId, setOpenId] = useState()

  // const screen = bool => {
  //   setIsOpen(bool)
  // }

  const {t}=useTranslation()


  return (
    <div className='history'>
      <ActiveTopPage pageTitle={t("history")} />
      <Container>
        <div className="tarix">
          <div className="col">
            <p>{t('quote_4')}</p>
             <p>{t('quote_3')}</p>
            <div className="nutq">
              <p>{t('quote_2')}</p>
              <p>{t('quote_1')}</p>
              <b>{t('president_title')}</b>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={tarix} alt="tarix"/>
            </div>
          </div>
        </div>
          <div className="istoriya">
          <h2>{t("history")}</h2>
         {
tarixlar.map((item, index) => {
  const isActive = openId === item.id;
  return (
    <div key={item.id} className={`rowBtn ${isActive ? 'true' : 'false'}`} >
      <div className="bannerRow" onClick={() => setOpenId(item.id)}>
        <p>
          <strong>{t(`history_${index}_years`)} - {t(`history_${index}_title`)}</strong>
        </p>
        <div className="anime">
          <span className='real'><BsMusicNote className='nota'/></span>
          <span className='shadow'><BsMusicNote className='nota'/></span>
        </div>
      </div>
      <div className="data">
        <span className="close" onClick={() => setOpenId(null)}><MdClose/> <br/></span>
        {t(`history_${index}_data`)}
      </div>
    </div>
  );
})
}
        </div>
      </Container>
    </div>
  )
}

export default Tarix
