import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import Container from '../../components/Container'
import ContactComp from '../../components/contactComp'
import { MdLink } from 'react-icons/md'

const Document = () => {
    const docs = [
        {
          id: 0,
          title: "Oʻzbekiston Respublikasining “Ta’lim toʻgʻrisida” gi qonuni",
          date: "23.09.2020 yildagi",
          tur: "O‘RQ-637-son",
          pdf: ""
        },
        {
          id: 1,
          title: "O‘zbekiston Respublikasining “Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risida”gi qonuni",
          date: "20.01.2021 yildagi",
          tur: "O‘RQ-668-son",
          pdf: ""
        },
        {
          id: 2,
          title: "O‘zbekiston Respublikasi Prezidentining “O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati institutini tashkil etish to‘g‘risida”gi qarori",
          date: "16.10.2021 yildagi",
          tur: "PQ-5261-son",
          pdf: ""
        },
        {
          id: 3,
          title: "O‘zbekiston Respublikasi Vazirlar Mahkamasining “Botir Zokirov nomidagi milliy estrada mukofotini ta’sis etish to‘g‘risida”gi qarori",
          date: "18.01.2024 yildagi",
          tur: "32-son",
          pdf: ""
        },
        {
          id: 4,
          title: "O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti",
          date: "",
          tur: "Guvohnoma",
          pdf: ""
        },
        {
          id: 5,
          title: "O‘zbekiston Respublikasi madaniyat vaziri buyrug‘i",
          date: "",
          tur: "",
          pdf: ""
        },
        {
          id: 6,
          title: "O‘zbekiston Respublikasi madaniyat vaziri buyrug‘i",
          date: "",
          tur: "Ustavni tasdiqlash to'g'risida",
          pdf: ""
        },
        {
          id: 7,
          title: "O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti ustavi",
          date: "",
          tur: "Ustav",
          pdf: ""
        },
        {
          id: 8,
          title: "O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti 2023-2025 yillar uchun",
          date: "",
          tur: "Jamoat shartnomasi",
          pdf: ""
        },
        {
          id: 9,
          title: "O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tarkibiy tuzilmasi",
          date: "",
          tur: "Tarkibiy tuzilma",
          pdf: ""
        },
      ]
  return (
       <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={"Me'yoriy-huquqiy hujjatlar"} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>Me'yoriy-huquqiy hujjatlar</h2>
              </div>
              <div className="wrapper">
                <ul className="docs">
                    {
                        docs.map(item=>{
                            return (
                                <li key={item.id}>
                                    <div className='doc'>
                                        <p>{item.title}</p>
                                        <p>
                                            {item.date} {item.tur}
                                        </p>
                                    </div>
                                    <button>
                                        O'qish <MdLink />
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
