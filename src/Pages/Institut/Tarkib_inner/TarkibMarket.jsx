import React from 'react'
import { useTranslation } from 'react-i18next'
import ActiveTopPage from '../../../components/activeTopPage'
import { FaHandPointRight } from 'react-icons/fa'

const TarkibMarket = () => {
         const {t}= useTranslation()
  return (
       <div>
          <ActiveTopPage pageTitle={ t("marketing")} />
    <div className='kengashinfo'>
        <div className='kengash_info_con market_con'>
      <h1>{t("marketing")}</h1>
      <div className='tarkibmarket_box'>
<h1>Boʻlim quyidagi ishlarni amalga oshiradi:</h1>
<div className='market_card'>
    <span><FaHandPointRight /></span>
Oʻzbekiston Respublikasi Oliy va oʻrta maxsus ta’lim vazirligi buyruqlari Hay’atining qarorlari, shuningdek, universitet buyruqlari va Kengash qarorlarining boʻlimda belgilangan muddatda ijrosini ta’minlash, nazorat qilish va tegishli chora tadbirlarni belgilash;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Dekanlar va kafedra mudirlari bilan hamkorlikda “Kadrlarni davlat granti asosida maqsadli tayyorlash tartibi toʻgʻrisidagi Nizom”ga muvofiq institut bitiruvchilar taqsimotini tashkil etish va amalga oshirish;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Oliy taʼlim muassasasida tayyorlanayotgan oliy ma’lumotli kadrlarga korxona, muassasa va tashkilotlarning ehtiyojini oʻrganish asosida maʼlumotlar bazasini shakllantirish;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Oliy taʼlim muassasalari bitiruvchilarini ishga joylashish jarayonlarini tizimli tahlil qiladi va baholaydi, Oliy taʼlim muassasasi joylashgan hududdagi muassasa, korxona va tashkilotlarning kadrlarga boʻlgan real ehtiyojlari qondirilishiga oliy taʼlim muassasasi faoliyatini yoʻnaltirish;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Oliy taʼlim tizimida marketing xizmati jarayonlarining tez oʻzgaruvchanligi va mehnat bozori rivojlanish dinamikasi bilan oʻzaro bogʻliqligini hisobga olgan holda potensial ish beruvchilar (isteʼmolchilar) bilan hamkorlikda respublika iqtisodiyoti tarmoqlari va sohalarining oliy maʼlumotli yosh mutaxassislarga boʻlgan ehtiyojini hududlar boʻyicha oʻrganish;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Oliy taʼlim tizimida kadrlar tayyorlash yoʻnalishlari va taʼlim xizmatlari bozori borasidagi boshqaruv qarorlarini tayyorlash, qabul qilish va amaliyotga tatbiq etish jarayonlarida ishtirok etadi. Raqobatbardosh kadrlar tayyorlashni taʼminlash boʻyicha amaliy takliflar ishlab chiqish va tegishli chora-tadbirlarni amalga oshirish;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Kadrlar tayyorlash jarayonida buyurtmachilarning kadrlar sifatiga doir talablarini oliy taʼlim muassasasi kengashida muhokama qilish, televediniya, radio, gazeta va boshqa ommaviy axborot vositalari orqali bitiruvchilar reklamasini tashkil etish;
</div>
<div className='market_card'>
       <span><FaHandPointRight /></span>
Mehnat bozori konyunkturasini oʻrganish, qabul parametrlariga takliflarni isteʼmolchilarning bitiruvchilarga boʻlgan buyurtmalari asosida shakllantirish, qabul, talabalar kontingenti, bitiruvchilarni ishga yoʻnaltirish toʻgʻrisidagi oliy taʼlim muassasasining maʼlumotlar bazasini tashkil etishga doir hujjatlarni oʻz vaqtida Oliy va oʻrta maxsus taʼlim vazirligiga taqdim etib borish;
</div>
  </div>
      </div>
    </div>
    </div>
  )
}

export default TarkibMarket
