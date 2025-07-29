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

const Rahbariyat = () => {
  const rahbarlar = [
    {
      id: 0,
      fish: "Mansurov Avaz Maksudovich",
      lavozim: "O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti rektori",
      unvon: "O‘zbekiston Respublikasida xizmat koʻrsatgan madaniyat xodimi, professor",
      qabul: "Dushanba 9:00 dan 18:00 gacha",
      phone: "+998 71 200 00 00",
      email: "info@estrada-art.uz",
      img: R1
    },
    {
      id: 1,
      fish: "Qurbonova Feruza Xayrullayevna",
      lavozim: "Yoshlar masalalari va ma-naviy-ma’rifiy ishlar bo’yicha birinchi prorektor",
      unvon: null,
      qabul: "Dushanba 15:00 dan 17:00 gacha",
      phone: "+998 71 200 00 00",
      email: "qurbonovaf@mail.ru",
      img: R2
    },
    {
      id: 2,
      fish: "Mirzayev Akbarjon Abduraximovich",
      lavozim: "Oʻquv ishlari boʻyicha prorektor",
      unvon: "Dotsent",
      qabul: "Dushanba 15:00 dan 17:00 gacha",
      phone: "+998 71 200 00 00",
      email: " mesiakbarjon@gmail.com",
      img: R3
    },
    {
      id: 3,
      fish: "Muxamedova Feruza Nurmaxmatovna",
      lavozim: "Ilmiy ishlar va innovatsiyalar boʻyicha prorektor",
      unvon: "San’atshunoslik fanlari nomzodi (PhD)",
      qabul: "Chorshanba 14:00 dan 16:00 gacha",
      phone: "+998 71 200 00 00",
      email: "feruzamuhamedova1986@gmail.com",
      img: R4
    },
    {
      id: 4,
      fish: "Tursunbayev Ilxom Karimovich",
      lavozim: "Ishlar boshqarmasi boshlig‘i",
      unvon: null,
      qabul: "Har kuni soat 10:00 dan 15:00 gacha",
      phone: "+998 71 200 00 00",
      email: " info@estrada-art.uz",
      img: R5
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
                <h2>Rahbariyat</h2>
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
                                  <h3>{rahbar.fish}</h3>
                                  <p>{rahbar.lavozim}</p>
                                  <p>{rahbar.unvon}</p>
                                  <p><BsCalendar3/> {rahbar.qabul}</p>
                                  <p><BsTelephone /> {rahbar.phone}</p>
                                  <p><BsGoogle/> {rahbar.email}</p>
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
