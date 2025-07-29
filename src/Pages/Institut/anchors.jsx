import React from 'react'

import L1 from '../../assets/imgs/gerb1.png';
import L2 from '../../assets/imgs/inno2.png';
import L3 from '../../assets/imgs/madaniyat3.png';
import L4 from '../../assets/imgs/navo4.jpg';
import L5 from '../../assets/imgs/konserv5.png';
import ActiveTopPage from '../../components/activeTopPage';
import Container from '../../components/Container';
import ContactComp from '../../components/contactComp';

const Anchors = () => {
    const links = [
        {
            id: 0,
            title: "O‘zbekiston respublikasi davlat ramzlari",
            data: "O‘zbekiston respublikasi davlat ramzlari: O'zbekiston Respublikasi Konstitutsiyasi, davlat gerbi, davlat bayrog‘i, davlat madhiyasi, davlat konstutsiyasi haqida to‘liq ma’lumot.",
            url: "https://constitution.uz/oz",
            logo: L1
        },
        {
            id: 1,
            title: "O‘zbekiston respublikasi oliy ta’lim, fan va innovatsiyalar vazirligi",
            data: "O‘zbekiston respublikasi oliy ta’lim, fan va innovatsiyalar vazirligi",
            url: "https://edu.uz/uz",
            logo: L2
        },
        {
            id: 2,
            title: "O‘zbekiston Respublikasi Madaniyat vazirligi",
            data: "O‘zbekiston Respublikasi Madaniyat vazirligi",
            url: "https://gov.uz/oz/madaniyat",
            logo: L3
        },
        {
            id: 3,
            title: "O‘zbeknavo estrada birlashmasi",
            data: "O‘zbeknavo estrada birlashmasi",
            url: "#",
            logo: L4
        },
        {
            id: 4,
            title: "O‘zbekiston Davlat Konservatoriyasi",
            data: "O‘zbekiston Davlat Konservatoriyasi",
            url: "https://konservatoriya.uz/",
            logo: L5
        },
    ]
  return (
      <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={"Rahbariyat"} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>Foydali havolalar</h2>
              </div>
              <div className="wrapper">
                <ul className="rahbars anchors">
                    {
                      links.map(r=>{
                        return (
                          <li className='gridLi' key={r.id}>
                              <div className="logoBx">
                                  <img src={r.logo} alt="rahbar"/>
                              </div>
                              <div className="bio anchor">
                                  <h3><a href={r.url}>{r.title}</a></h3>
                                  <p>{r.data}</p>
                              </div>
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

export default Anchors
