import React, { useState } from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import { BsMusicNote, BsMusicNoteBeamed } from 'react-icons/bs'
import Container from '../../components/Container'
import tarix from '../../assets/imgs/tarix.jpg'
import { MdClose } from 'react-icons/md'
const Tarix = () => {

  const tarixlar = [
    {
      id: 0,
      years: '1885',
      title: "Oʻzbek estrada musiqasi",
      data: "O‘zbek estrada musiqasi 100 yillik boy tarixga ega. Ta’kidlash joizki, ushbu san’atning ilk shakllari zamonaviy tasavvurlardan farqli ravishda estradaning yuzaki koʻrinishlarini namoyish etgan edi. Bugungi kun zamonaviy tomoshabinlarining sahnada koʻrayotgan va tinglayotgan estrada asarlari bu – turli davr madaniyatining ta’siri, siyosiy va ijtimoiy voqeliklardagi oʻzgarishlar hamda iste’dod egalarining koʻp yillik mehnati va izlanishlari samarasidir."
    },
    {
      id: 1,
      years: '1997',
      title: "Toshkent davlat konservatoriyasida estrada ijrochiligi kafedrasi",
      data: "Dastlab Muxtor Ashrafiy nomidagi Toshkent davlat konservatoriyasida estrada ijrochiligi kafedrasi oʻz faoliyatini boshladi. Shu tariqa 1997-yildan boshlab, Oʻzbekistonda ilk bor estrada musiqa san’ati tarixi oliy ta’lim tizimida oʻqitilishi yoʻlga qoʻyila boshlagan."
    },
    {
      id: 2,
      years: '2002-2021',
      title: "Oʻzbekiston davlat konservatoriyasi tarkibidagi “Estrada san’ati” fakulteti",
      data: "2002-yili Toshkent davlat konservatoriyasiga Oʻzbekiston davlat konservatoriyasi maqomi berilishi munosabati bilan yangi bino foydalanishga topshirilgach, tuzilmaga “Estrada san’ati” fakulteti kiritilib, oʻz faoliyatini 2021-yilga qadar olib bordi."
    },
    {
      id: 3,
      years: '2021',
      title: "Oʻzbekiston Respublikasi Prezidenti qarori",
      data: "“Estrada san’ati” fakulteti negizida O‘zbekiston Respublikasi Prezidentining 2021-yil 16-oktabrdagi PQ-5261-son qarori bilan O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tashkil etildi."
    },
    {
      id: 4,
      years: '2022-2023',
      title: "Institutning bakalavriat va magistratura yoʻnalishlari belgilandi",
      data: "2022-2023-yillarda bakalavr va magistrlar uchun bir qator yangi mutaxassislik va yo‘nalishlar tasdiqlandi. Hozirgi kunda Botir Zokirov nomidagi Milliy estrada san’ati instituti - estrada xonandaligi, estrada cholg‘u ijrochiligi, kompozitorlik san’ati, musiqashunoslik, estrada orkestri dirijyorligi, musiqiy ovoz rejissyorligi hamda estrada ijrochiligi pedagoglarini tayyorlash yoʻnalishlari boʻyicha yuqori malakali mutaxassislar tayyorlamoqda. “Estrada xonandaligi” kafedrasi - Botir Zokirov nomidagi Milliy estrada san’ati institutining yetakchi kafedralaridan biridir. Ushbu kafedraga taniqli kompozitor, Oʻzbekiston Respublikasi san’at arbobi, professor Dilorom Amanullayeva rahbarlik qilib kelmoqda. Mazkur yoʻnalishda talabalar oʻzbek estrada san’atining yetuk namoyondalari - Yunus Toʻrayev, Farruh Zokirov, Mansur Toshmatov, Kozim Qayumovlardan xonandalik sirlari va mahoratini oʻrganib kelmoqdalar. “Estrada xonandalik” kafedrasida faoliyat yuritayotgan yosh avlod pedagog kadrlari Akjol Meldebekov, Sabina Hamdamova, Toʻlqin Tadjiyev va Rasul Abdullayevlar estrada san’atida yetakchi oʻrinlarni egallamoqdalar. Estrada vokal ijrosini cholgʻu joʻrligisiz tasavvur qilib boʻlmaydi. Institutda “Estrada cholgʻu ijrochiligi” kafedrasi faoliyat yuritayotgan boʻlib, unda gitara, bas gitara, saksafon, truba, trombon, fortepiano, zarbli cholgʻularni professional darajada oʻzlashtirish uchun barcha imkoniyatlar yaratilgan. Estrada ijrochiligi yoʻnalishida pedagog kadrlarni tayyorlash maqsadida institutda “Estrada ijrochiligi pedagoglari tayyorlash” kafedrasi oʻz faoliyatini yuritmoqda. Ushbu kafedra bitiruvchilari estrada yoʻnalishida yangi avlod kadrlarini tarbiyalashda oʻz hissasini qoʻshishga tayyor. “Musiqiy ovoz rejissyorligi” yoʻnalishida tahsil olayotgan talabalar estrada janrlaridagi musiqalarni yozib olishda zamonaviy texnologiya imkoniyatlarini oʻrganishadi. Ularning yordami bilan estrada ijrochilari oʻz san’atini tinglovchilarga maksimal darajada yetkazish imkoniyatiga ega boʻladilar. Estrada janridagi musiqiy asarlarning oʻziga xos xususiyatlarini inobatga olgan holda, uning rivojlanish va yaratilish tarixini asoslab beruvchi va oʻrganuvchi yoʻnalish - bu “Musiqashunoslik” ta’limidir. Estrada musiqashunosligining asosiy maqsadi - kompozitorlik, xonandalik va cholgʻu ijrochiligining ijodiy jarayondagi tarixiy bosqichlari, qonuniyatlar va qarama-qarshiliklarni oʻrganish, baholash mezonlarini aniqlash, didga moyillik xususiyatlarini shakllantirishdan iborat. Institutda ijodiy yoʻnalishdagi kompozitor va dirijyorlar ham tayyorlanadi. Ta’limning tizimli va yuqori kasbiy tayyorgarligi xalqaro standart talablariga javob beradi. “Kompozitorlik va aranjirovka” va “Estrada orkestri dirijyorligi” ta’lim yoʻnalishi bitiruvchilari turli janrlarda estrada jaz musiqasini yaratishda bilim va koʻnikmaga ega boʻladilar. Institut professor-o‘qituvchilari va talabalarining ilmiy-ijodiy salohiyatini rivojlantirish maqsadida, xalqaro va respublika ilmiy-amaliy konferensiyalar, ilmiy loyihalarni tashkil etish va o‘tkazish orqali amalga oshiriladi. O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti nafaqat Oʻzbekiston, balki jahon musiqa madaniyati rivojiga ham oʻz hissasini qoʻshib kelmoqda."
    },
  ]

  const [openId, setOpenId] = useState()

  // const screen = bool => {
  //   setIsOpen(bool)
  // }


  return (
    <div className='history'>
      <ActiveTopPage pageTitle={"Institut tarixi"} />
      <Container>
        <div className="tarix">
          <div className="col">
            <p>
              O‘zbekiston Respublikasi Prezidentining 2021-yil 16-oktabrdagi PQ-5261-son qarori bilan O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tashkil etildi.
            </p>
            <p>
              O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati institutining ochilish marosimida O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev  estrada hofizi Botir Zokirov haqida quyidagi so‘zlarni aytdi:
            </p>
            <div className="nutq">
              <p>
                Taqdir Botir Zokirovning zimmasiga oʻzbek estrada sanʼatining asoschisi boʻlishdek ulugʻvor bir vazifani yukladi va bu vazifani u sharaf bilan ado etdi.
              </p>
              <p>
                Alloh taoloning oʻzi Botir Zokirovga ato etgan benazir isteʼdod va insoniy fazilatlar tufayli u sanʼat olamida chinakam moʻjizalar yaratdi.
              </p>
              <b>O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev</b>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={tarix} alt="tarix"/>
            </div>
          </div>
        </div>
          <div className="istoriya">
          <h2>Tarix</h2>
         {
  tarixlar.map(item => {
    const isActive = openId === item.id
    return (
      <div key={item.id} className={`rowBtn ${isActive ? 'true' : 'false'}`} >
        <div className="bannerRow" onClick={() => setOpenId(item.id)}>
          <p>
            <strong>{item.years} - {item.title}</strong>
          </p>
          <div className="anime">
            <span className='real'><BsMusicNote className='nota'/></span>
            <span className='shadow'><BsMusicNote className='nota'/></span>
          </div>
        </div>
        <div className="data">
          <span className="close" onClick={() => setOpenId(null)}><MdClose/> <br/></span>
          {item.data}
        </div>
      </div>
    )
  })
}
        </div>
      </Container>
    </div>
  )
}

export default Tarix
