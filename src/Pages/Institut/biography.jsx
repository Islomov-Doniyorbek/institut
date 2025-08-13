import React from 'react'
import bio from '../../assets/imgs/bio.jpg'
import ActiveTopPage from '../../components/activeTopPage'
import Container from '../../components/Container'
import { useTranslation } from 'react-i18next'

const Biography = () => {
    const {t}=useTranslation()
  return (
     <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={t("botir_life")} />
        </div>
        <Container>
          <div className="gridBox">
            <div className="col">
              <div className="title">
                <h2>{t("botir_life")}</h2>
              </div>
              <div className="wrapper">
             <p>{t("bio_bz_1")}</p>
<p>{t("bio_bz_2")}</p>
<p>{t("bio_bz_3")}</p>
<p>{t("bio_bz_4")}</p>
<p>{t("bio_bz_5")}</p>
<p>{t("bio_bz_6")}</p>
<p>{t("bio_bz_7")}</p>
<p>{t("bio_bz_8")}</p>
              </div>
            </div>
            <div className="col">
              <div class="bioImg">
                <img src={bio} alt="bio" />
              </div>
              <div className="nutq">
             <p>{t("bio_bzn_2")}</p>
             <p>{t("bio_bzn_3")}</p>
              <b>{t("bio_bzn_4")}</b>
            </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Biography
