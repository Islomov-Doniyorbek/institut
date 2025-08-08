import './Sastav.css'
import React from 'react'
import ContactComp from '../../components/contactComp'
import Container from '../../components/Container'
import { GiMusicalNotes } from "react-icons/gi";
import { BsMusicNote, BsMusicNoteBeamed } from "react-icons/bs";


import ActiveTopPage from '../../components/activeTopPage';
import { Link } from 'react-router-dom';
import { Path } from 'leaflet';

const FakultetKafedra = () => {

  const kafedra = [
    {
      id:0,
      fakultet: "Estrada cholgʻu ijrochiligi fakulteti",
      // fakultetPath: ''
      kafedralar: [
        "Estrada cholg‘ularida ijrochilik",
        "Estrada ijrochiligi pedagoglari tayyorlash",
        "Kompozitorlik va aranjirovka",
        "Orkestr dirijyorligi",
        "Fakultetlararo fortepiano ijrochiligi "
      ],
      path: "echif"
      
    },
    {
      id:1,
      fakultet: "Estrada xonandaligi fakulteti",
      kafedralar: [
        "Estrada xonandaligi",
        "Musiqiy ovoz rejissorligi",
        "Musiqiy nazariy va tarixiy fanlar",
        "O‘zbek tili, sport va ijtimoiy fanlar"
      ],
      path: "exf"
    },
  ]
  

  return (
     <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={"Fakultet va kafedralar"} />
        </div>
        <Container>
        <div className="grdBox">
          <div className="col">
              <div className="title">
                 <h2>Fakultet va kafedralar</h2>
              </div>
            <div className="wrapper">
              {
                kafedra.map((item, ii)=>{
                  return (
                    <div key={ii} className="fakultetKaf">
                      <h2>
                        <Link to={`/Institut/fakultetInfo/${item.path}`}>{item.fakultet}</Link>
                      </h2>
                      <p>Fakultet kafedralari</p>
                      <ul>
                        {item.kafedralar.map((kaf, i)=>{
                          return(
                            <li key={i}>
                              <Link to={`/Institut/kafedra/${kaf}`}><BsMusicNoteBeamed/> {kaf}</Link>
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
