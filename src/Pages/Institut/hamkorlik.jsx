import React from 'react'
import ContactComp from '../../components/contactComp'
import Container from '../../components/Container'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Hamkorlik = () => {
     const {t}=useTranslation()
  return (
      <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={t("international")} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>{t("international")}</h2>
              </div>
              <div className="wrapper">
           <div className="mudir">
  <p>
    <b>{t("section_head")}: </b> Abdullaeva Suraya Abdulaxadovna
  </p>
  <p>
    <b>{t("phone")}: </b> +998 97 741 16 32
  </p>
  <p>
    <b>{t("email")}: </b> abdullaeva1954@mail.ru
  </p>
</div>

<p>
  <b>{t("purpose_label")}: </b> {t("purpose")}
</p>
<p>
  <b>{t("tasks_intro_label")}: </b> {t("tasks_intro")}
</p>
                <ul>
                    <li>{t("prepare_contracts")}</li>
                    <li> {t("form_programs")}</li>
                    <li>{t("collect_info")}</li>
                    <li>{t("engage_teachers")}</li>
                    <li> {t("organize_internships")}</li>
                    <li> {t("organize_foreign_teachers")}</li>
                    <li>{t("cooperate_embassies")}</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <ContactComp />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hamkorlik
