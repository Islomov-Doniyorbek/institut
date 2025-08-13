import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import Container from '../../components/Container'
import ContactComp from '../../components/contactComp'
import R1 from '../../assets/imgs/Maksudov_A.jpg'
import R2 from '../../assets/imgs/Qurbonova_F-—-250.jpg'
import R3 from '../../assets/imgs/Mirzayev_A.jpg'
import R4 from '../../assets/imgs/Muxamedova_F.jpg'
import R5 from '../../assets/imgs/Tursunbayev_Ilhom_K.jpg'
import { BsCalendar, BsCalendar2Fill, BsCalendar3, BsGoogle, BsMailbox, BsPhone, BsTelephone } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Rahbariyat = () => {
  const rahbarlar = [
    {
      id: 0,
      fish: "faculty_fish_1",
      lavozim: "faculty_fish_1_1",
      unvon: "faculty_fish_1_2",
      qabul: "faculty_fish_1_3",
      phone: "+998 71 200 00 00",
      email: "info@estrada-art.uz",
      img: R1
    },
    {
      id: 1,
      fish: "faculty_fish_2",
      lavozim: "faculty_fish_2_1",
      qabul: "faculty_fish_2_3",
      phone: "+998 71 200 00 00",
      email: "qurbonovaf@mail.ru",
      img: R2
    },
    {
      id: 2,
      fish: "faculty_fish_3",
      lavozim: "faculty_fish_3_1",
      unvon: "faculty_fish_3_2",
      qabul: "faculty_fish_3_3",
      phone: "+998 71 200 00 00",
      email: " mesiakbarjon@gmail.com",
      img: R3
    },
    {
      id: 3,
      fish: "faculty_fish_4",
      lavozim: "faculty_fish_4_1",
      unvon: "faculty_fish_4_2",
      qabul: "faculty_fish_4_3",
      phone: "+998 71 200 00 00",
      email: "feruzamuhamedova1986@gmail.com",
      img: R4
    },
    {
      id: 4,
      fish: "faculty_fish_5",
      lavozim: "faculty_fish_5_1",
      qabul: "faculty_fish_5_3",
      phone: "+998 71 200 00 00",
      email: " info@estrada-art.uz",
      img: R5
    },
  ]


  const {t}=useTranslation()
  return (
     <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={ t("management")} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>{ t("management")}</h2>
              </div>
              <div className="wrapper">
                <ul class="rahbars">
                    {
                      rahbarlar.map(rahbar=>{
                        return (
                          <li className='gridLi' key={rahbar.id}>
                              <div className="imgBx">
                                  <img src={rahbar.img} alt="rahbar"/>
                              </div>
                              <div class="bio">
                                  <h3>{t(rahbar.fish)}</h3>
                                  <p>{t(rahbar.lavozim)}</p>
                                  <p>{t(rahbar.unvon)}</p>
                                  <p><BsCalendar3/> {t(rahbar.qabul)}</p>
                                  <p><BsTelephone /> {t(rahbar.phone)}</p>
                                  <p><BsGoogle/> {t(rahbar.email)}</p>
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

export default Rahbariyat
