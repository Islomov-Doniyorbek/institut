import React from 'react'
import bio from '../../assets/imgs/bio.jpg'
import ActiveTopPage from '../../components/activeTopPage'
import Container from '../../components/Container'

const Biography = () => {
  return (
     <div className='fakultet'>
      <div className="innerWrapper">
        <div className="banner">
          <ActiveTopPage pageTitle={"Botir Zokirov Hayoti va Ijodi"} />
        </div>
        <Container>
          <div className="gridBox">
            <div className="col">
              <div className="title">
                <h2>Botir Zokirov hayoti va ijodi</h2>
              </div>
              <div className="wrapper">
               <p>1936 yilda Alisher Navoiy nomidagi opera va balet teatri artisti Karim Zokirov va Muqumiy nomidagi musiqali drama teatri qo‘shiqchisi Shoista Saidovalar xonadonida o‘g‘il farzand dunyoga keladi. To‘ng‘ich farzandlariga yaxshi niyatlar bilan Botir deb ism qo‘yishadi.</p>
               <p>Zokirovlar xonadoniga ko‘plab san’at ahli namoyondalari tashrif buyurgani sababli Botirning ko‘nglida ham musiqaga nisbatan kuchli muxabbat paydo bo‘la boshlaydi. U 1952-1957 yillarda Toshkent Davlat konservatoriyasida, 1958- 1962 yillarda esa Toshkent Davlat teatr va rassomchilik institutlarida tahsil oladi. U “Yoshlik” ansambli va O‘zbek Davlat estrada orkestrining yakkaxon xonandasi sifatida faoliyat olib borgan.</p>
               <p>U 29 yoshida O‘zbekiston xalq artisti unvoniga sazovor bo‘lgan.</p>
               <p>Botir Zokirov 1955-yilda og‘ir dardga yo‘liqqan. Bir necha marta jarrohlik amaliyotlarini boshidan o‘tkazgan. Shifokorlar unga qo‘shiq aytishni taqiqlagan. Lekin u ijoddan to‘xtamagan.</p>
               <p>U sharq folklori va zamonaviy estrada san’atini uyg‘unlashtirib, “Myuzik xoll” ijodiy jamoasini tashkil etgan, xonanda va kompozitor sifatida ko‘plab yoshlarga ustozlik qilgan. Respublikada xizmat ko‘rsatgan “Yalla” ansamblining tashkil topishida uning xizmatlari katta bo‘lgan.</p>
               <p>San’atkorning xotirasini e’zozlash maqsadida 2021-yilda Botir Zokirovning 85 yillik tavallud ayyomi keng nishonlangan. Uning nomidagi milliy mukofot ta’sis etildi. U haqda ilmiy va badiiy asarlar, hujjatli film va spektakllar yaratildi.</p>
               <p>Botir Zokirov tahsil olgan O‘zbekiston davlat konservatoriyasi joylashgan ko‘chaga uning nomi berildi. Ushbu konservatoriya huzurida Botir Zokirov nomidagi milliy estrada san’ati instituti barpo etildi.</p>
               <p>2000-yilda “Buyuk xizmatlari uchun” va 2021-yilda “El-yurt hurmati” ordenlari bilan mukofotlangan. 1985-yilda — 49 yoshida vafot etgan.</p>
              </div>
            </div>
            <div className="col">
              <div class="bioImg">
                <img src={bio} alt="bio" />
              </div>
              <div className="nutq">
              <p>
                Sehrli musiqani tinglab oʻzingni yettinchi osmonda his etasan. Alamu ogʻriqlardan nishon yoʻq, faqat ohanglar, ohanglar… Ohanglar erkin qush misol seni yuksaklarga eltadi. Koʻnglingdagi barcha gʻuborlar yuvilib ketgan. Koʻzlaringdan sizayotgan yoshni sezasan…
              </p>
              <p>
                Bu dunyoda boshqa hech narsa yoʻq! Bari roʻyo! Faqat, faqat musiqa qoldi. …Yoʻtal ohangga aralashib ketdi. Hechqisi yoʻq. Axir, musiqa yangrayapti! Borliq qanchalar goʻzal…
              </p>
              <b>Botir Zokirov<br/>O‘zbekiston xalq artisti</b>
            </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Biography
