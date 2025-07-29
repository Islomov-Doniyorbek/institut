import React from 'react'
import ContactComp from '../../components/contactComp'
import Container from '../../components/Container'
import ActiveTopPage from '../../components/activeTopPage'

const Hamkorlik = () => {
  return (
      <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={"Xalqaro hamkorlik"} />
        </div>
        <Container>
          <div className="grdBox">
            <div className="col">
              <div className="title">
                <h2>Xalqaro hamkorlik</h2>
              </div>
              <div className="wrapper">
                <div class="mudir">
                    <p>
                        <b>Bo'lim boshlig'i: </b> Abdullaeva Suraya Abdulaxadovna
                    </p>
                    <p>
                        <b>Telefon: </b> +998 97 741 16 32
                    </p>
                    <p>
                        <b>Email: </b> abdullaeva1954@mail.ru
                    </p>
                </div>
                <p>
                    Boʻlim faoliyatining asosiy maqsadi institutning ta’lim dasturlari sifatini oshirishga qaratilgan xalqaro hamkorlik dasturlarida ishtirokini tashkil etish va muvofiqlashtirishdir.
                </p>
                <p>Xalqaro boʻlimning asosiy vazifalari quyidagilardan iborat:</p>
                <ul>
                    <li> - institut va xorijiy ta’lim muassasalari va xalqaro tashkilotlar bilan hamkorlik shartnomalari loyihalarini tayyorlash;</li>
                    <li> - xalqaro hamkorlik dasturlarini shakllantirish;</li>
                    <li> - xorijiy va xalqaro ijodiy loyihalar, tanlovlar, festivallar axborotni toʻplash va tizimlashtirish;</li>
                    <li> - institut professor-oʻqituvchilarini xalqaro ta’lim va ijodiy faoliyatda ishtirok etishga jalb qilish;</li>
                    <li> - institutning xalqaro faoliyati doirasida xodimlar, magistrantlar va talabalar uchun stajirovkalarni tashkil etish;</li>
                    <li> - institutda xorijiy professor-oʻqituvchilari ta’lim va ijodiy faoliyatni tashkil etish;</li>
                    <li> - elchixonalar va boshqa davlatlarning vakolatxonalari bilan hamkorlikni tashkil etish.</li>
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
