import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import Container from '../../components/Container'
import ContactComp from '../../components/contactComp'
import { MdLink } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const Document = () => {
    const docs = [
        {
          id: 0,
          title: "document_0_title",
          date:   "document_0_date",
          tur: "document_0_number",
          pdf: ""
        },
        {
          id: 1,
          title:  "document_1_title",
          date: "document_1_date",
          tur: "document_1_number",
          pdf: ""
        },
        {
          id: 2,
          title:  "document_2_title",
          date: "document_2_date",
          tur: "document_2_number",
          pdf: ""
        },
        {
          id: 3,
          title: "document_3_title",
          date: "document_3_date",
          tur: "document_3_number",
          pdf: ""
        },
        {
          id: 4,
          title:  "document_4_title",
          date: "",
          tur: "document_4_number",
          pdf: ""
        },
        {
          id: 5,
          title:  "document_5_title",
          date: "",
          tur: "",
          pdf: ""
        },
        {
          id: 6,
          title:  "document_6_title",
          date: "",
          tur: "document_6_number",
          pdf: ""
        },
        {
          id: 7,
          title: "document_7_title",
          date: "",
          tur: "document_7_number",
          pdf: ""
        },
        {
          id: 8,
          title:  "document_8_title",
          date: "",
          tur:"document_8_number",
          pdf: ""
        },
        {
          id: 9,
          title:  "document_9_title",
          date: "",
          tur: "document_9_number",
          pdf: ""
        },
      ]

      const {t}=useTranslation()
  return (
       <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={t("legal_documents")} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>{t("legal_documents")}</h2>
              </div>
              <div className="wrapper">
                <ul className="docs">
                    {
                        docs.map(item=>{
                            return (
                                <li key={item.id}>
                                    <div className='doc'>
                                      <p>{t(item.title)}</p> 
                                        <p>
                                           {t(item.date)} {t(item.tur)}
                                        </p>
                                    </div>
                                    <button>
                                      {t("read")} <MdLink />
                                    </button>
                                </li>
                            )
                        })
                    }
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

export default Document
