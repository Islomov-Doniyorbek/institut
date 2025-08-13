import './Sastav.css'
import React from 'react'
import ContactComp from '../../components/contactComp'
import Container from '../../components/Container'
import { GiMusicalNotes } from "react-icons/gi";
import { BsMusicNote, BsMusicNoteBeamed } from "react-icons/bs";


import ActiveTopPage from '../../components/activeTopPage';
import { Link } from 'react-router-dom';
import { Path } from 'leaflet';
import { useTranslation } from 'react-i18next';

const FakultetKafedra = () => {
  const {t}=useTranslation()
const kafedra = [
  {
    id: 0,
    fakultet: "faculty_0",
    kafedralar: [
      "faculty_0_kaf_0",
      "faculty_0_kaf_1",
      "faculty_0_kaf_2",
      "faculty_0_kaf_3",
      "faculty_0_kaf_4"
    ],
    path: "echif"
  },
  {
    id: 1,
    fakultet: "faculty_1",
    kafedralar: [
      "faculty_1_kaf_0",
      "faculty_1_kaf_1",
      "faculty_1_kaf_2",
      "faculty_1_kaf_3"
    ],
    path: "exf"
  }
];
  

  return (
     <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={t("departments")}/>
        </div>
        <Container>
        <div className="grdBox">
          <div className="col">
              <div className="title">
                 <h2>{t("departments")}</h2>
              </div>
            <div className="wrapper">
              {
                kafedra.map((item, ii)=>{
                  return (
                    <div key={ii} className="fakultetKaf">
                      <h2>
                        <Link to={`/Institut/fakultetInfo/${item.path}`}>{t(item.fakultet)}</Link>
                      </h2>
                      <p>{t("fack_section")}</p>
                      <ul>
                        {item.kafedralar.map((kaf, i)=>{
                          return(
                            <li key={i}>
                              <Link to={`/Institut/kafedra/${t(kaf)}`}>
                  <BsMusicNoteBeamed /> {t(kaf)}
                </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })
              }
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

export default FakultetKafedra
