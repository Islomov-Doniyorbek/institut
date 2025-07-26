import React from 'react'
import { useParams } from 'react-router-dom'
import ActiveTopPage from '../../components/activeTopPage'
import Container from '../../components/Container'
import ContactComp from '../../components/contactComp'
import useTitle from '../../components/useTitle'
import Img0 from "../../../src/assets/imgs/logo-estrada.png"

const FakultetInfo = () => {
    const fakultetInfo = [
        {
            id: 0,
            fakultet: "Estrada cholgʻu ijrochiligi fakulteti",
            txt: [
                "O‘zbekiston Respublikasi Prezidentining 16.10.2021 yildagi 5261-son qaroriga asosan O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tashkil etildi.",
            "“Estrada cholgʻu ijrochiligi” fakulteti institutning eng muhim fakultetlaridan biri sifatida oʻz faoliyatini boshladi.",
            

            ],
            kafedralar: [
                "Estrada cholg‘ularida ijrochilik",
                "Estrada ijrochiligi pedagoglari tayyorlash",
                "Kompozitorlik va aranjirovka",
                "Orkestr dirijyorligi",
                "Fakultetlararo fortepiano ijrochiligi "
            ],
            theend: "Fakultetda 298 nafar, shundan, bakalavriat kunduzgi 284 nafar, magistratura mutaxassisliklarida 14 nafar talaba tahsil olmoqda."
        },
        {
            id: 1,
            fakultet: "Estrada xonandaligi fakulteti",
            txt: [
                "1996-yili Estrada fakulteti bazasida Estrada san’ati fakulteti tashkil etildi. Zamonamizning ma’naviy-estetik talab ehtiyojlariga javob beradigan ushbu fakultetning ochilishi yoshlarning musiqa ijodiga bo‘lgan katta qiziqishi bilan izohlanadi.",
            "O‘zbekiston Respublikasi Prezidentining 16.10.2021 yildagi 5261-son qaroriga asosan O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tashkil etildi.",
            "Institutda ikkita fakultet faoliyat olib bormoqda: “Estrada xonandaligi” va “Estrada cholg‘u ijrochiligi” fakultetlari.",
            

            ],
            kafedralar: [
                "Estrada xonandaligi",
                "Musiqiy ovoz rejissorligi",
                "Musiqiy nazariy va tarixiy fanlar",
                "O‘zbek tili, sport va ijtimoiy fanlar"
            ],
            theend: "Fakultetda 215 nafar, shundan, bakalavriat kunduzgi 189 nafar, sirtqi 10 nafar, magistratura mutaxassisliklarida 16 nafar talaba tahsil oladi. Shu bilan birga fakultetda 3 nafar xorijiy talaba ham o‘qiydi."
        },
    ]

    const mamuriyat = [
        {
            id: 0,
            mamurs: {
                dekan: "Bobur Mansurov Ibragimovich",
                muovins: [
                    {
                        ish: "O'quv ishlari bo'yicha",
                        muovin: "Esonaliyev Abdulatif Abdujabbarovich"
                    },
                ]
            }
        },
        {
            id: 1,
            mamurs: {
                dekan: "Islamova Ruslana Ruslanovna",
                muovins: [
                    {
                        ish: "Yoshlar bilan ishlash bo‘yicha",
                        muovin: "Boybabayev Dilmurod"
                    },
                    {
                        ish: "O'quv ishlari bo'yicha",
                        muovin: "Esonaliyev Abdulatif Abdujabbarovich"
                    },
                ]
            }
        }
    ]

    const {fakultet} = useParams()
    const faculty = fakultetInfo.find(f => f.fakultet === String(fakultet));
    const mamur = mamuriyat.find(f => f.id === Number(faculty.id));

    useTitle(faculty.fakultet)

  return (
     <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={faculty.fakultet} />
        </div>
        <Container>
        <div className="grdBox">
          <div className="col">
              <div className="title">
                <h2>{faculty.fakultet}</h2>
              </div>
            <div className="wrapper">
              <h3>Fakultet haqida ma'lumot</h3>
              <div className="mamuriyat">
                <div className="row">
                    <div className="top">
                        <img src={Img0} alt="" />
                        <p><b>{faculty.fakultet} dekani</b></p>
                    </div>
                    <div className="xodim">
                        <p>{mamur.mamurs.dekan}</p>
                    </div>
                </div>
                <div class="muovinlar">
                    {
                        mamur.mamurs.muovins.map((item, i)=>{
                            return (
                                <div className="row" key={i}>
                                    <div className="top">
                                        <img src={Img0} alt="" />
                                        <p><b>{item.ish} dekan o'rinbosari</b></p>
                                    </div>
                                    <div className="xodim">
                                        <p>{item.muovin}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
              </div>
              <div className="malumot">
                {
                    faculty.txt.map((t,o)=>{
                        return <p key={o}>{t}</p>
                    })
                }
                <h3>Fakultet kafedralari:</h3>
                <ul>
                    {
                        faculty.kafedralar.map((t,o)=>{
                            return <li key={o}>{t}</li>
                        })
                    }
                </ul>

                <p>
                    {faculty.theend}
                </p>
              </div>
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

export default FakultetInfo
