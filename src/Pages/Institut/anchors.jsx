import React from 'react'

import L1 from '../../assets/imgs/gerb1.png';
import L2 from '../../assets/imgs/inno2.png';
import L3 from '../../assets/imgs/madaniyat3.png';
import L4 from '../../assets/imgs/navo4.jpg';
import L5 from '../../assets/imgs/konserv5.png';
import ActiveTopPage from '../../components/activeTopPage';
import Container from '../../components/Container';
import ContactComp from '../../components/contactComp';
import { useTranslation } from 'react-i18next';

const Anchors = () => {
const links = [
  {
    id: 0,
    title: "link_0_title",
    data: "link_0_data",
    url: "https://constitution.uz/oz",
    logo: L1
  },
  {
    id: 1,
    title: "link_1_title",
    data: "link_1_data",
    url: "https://edu.uz/uz",
    logo: L2
  },
  {
    id: 2,
    title: "link_2_title",
    data: "link_2_data",
    url: "https://gov.uz/oz/madaniyat",
    logo: L3
  },
  {
    id: 3,
    title: "link_3_title",
    data: "link_3_data",
    url: "#",
    logo: L4
  },
  {
    id: 4,
    title: "link_4_title",
    data: "link_4_data",
    url: "https://konservatoriya.uz/",
    logo: L5
  },
];
        const {t}=useTranslation()
  return (
      <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={t("useful_links")} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>{t("useful_links")}</h2>
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
                                  <h3><a href={r.url}> {t(r.title)}</a></h3>
                                  <p> {t(r.data)}</p>
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
