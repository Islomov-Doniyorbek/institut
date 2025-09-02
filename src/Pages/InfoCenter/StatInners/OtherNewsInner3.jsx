import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

import announcement2 from '../../../ImagesStatik/stependiya.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Newsrep from '../Newsrep'
import ContactComp from '../../../components/contactComp'
const OtherNewsInner3 = () => {
  return (
  <div className='news_inner oter_inner'>
  <div className='news_inner_text other_news'> 
    <h1>E'lonlar</h1>
<div className='other_news_box'>
<h1>“Rektor stipendiyasi” sohibi bo‘lish uchun nomzodlar quyidagi mezonlarni bajarishlari shart: </h1>
<div className='news_inner_info'>
<p><span><FaRegClock /></span>2025-yil 20-iyungacha</p>
<h2><p>Posted by:</p> estrada-conserva</h2>
<h2><p>Category:</p> E'lon</h2>
</div>
<div className='otherrr_img'>
    <img src={announcement2}/>
</div>
<div className='othernews_inner'>
<h1>📍“Rektor stipendiyasi” sohibi bo‘lish uchun nomzodlar quyidagi mezonlarni bajarishlari shart:
• “a’lo” va ”yaxshi” baholarga o‘qish va ijodiy ishlarda faol bo‘lishi;
• umumta’lim tayyorgarligida ilmiy-tadqiqotni ijodiy ishlar bilan uyg‘unlashtirishi;
• Xalqaro va respublika tanlov (konferensiya)larida qatnashishi;
• kamida 2 ta e'lon qilingan ilmiy ishlarning mavjudligi;
• tillarni — davlat tili, rus tili va kamida bitta horijiy tilni bilishi (Mustaqil davlatlar hamdo‘stligi (MDH) mamlakatlari davlat tillaridan tashqari).
Nomzodlar ishini ko‘rib chiqish uchun bakalavriatning 1-4-bosqich talabalari va magistratura bo‘limi talabalari tomonidan quyidagi hujjatlar topshiriladi:
• sinov daftarchasidan ko‘chirma;
• Xalqaro va respublika tanlov (konferensiya)larning diplomlari (sertifikatlari) nusxalari;
• Estrada va jaz festivallarida faol ishtirok etganligi (asoslovchi hujjatlar bilan);
• Botir Zokirov ijodini faol targ‘ib qilinishi (Botir Zokirov hayot va ijod yo‘lini tadqiq etgan maqolalar, radio eshittirish va teleko‘rsatuvlarda chiqishlar qilganligi, xonanda yoki cholg‘uchi sifatida Botir Zokirov qo‘shiqlarini yangicha talqinda ijro etganligi);
• konsertlarning afishalari va video yozuvlari;
• dekanat, kafedra tavsiyanomalari;
• ilmiy-ijodiy ishlar ro‘yhati va ularning bosma nusxalari.
Rektor stipendiyasiga talabgorlarning institutda o‘qish yillari mobaynidagi ijodiy yutuqlari tadqim etiladi. Barcha hujjatlar bir nusxada taqdim qilinadi. Hujjatlar to‘plami jild - faylga joylanadi, jild muqovasida talabgorning familyasi, ismi va otasining ismi, fakultet va yo‘nalishi ko‘rsatiladi.
🗂Hujjatlarni topshirish 2025-yil 20-iyungacha  Botir Zokirov nomidagi Milliy estrada san’ati institutining fakultet dekanlariga elektron (pdf) va fayl jild ko'rinishida topshiriladi. Fakultet dekanlari nomzodlar hujjatlarini jamlab, institutning Iqtidorli talabalarning ilmiy tadqiqot faoliyatini tashkil etish sektoriga taqdim etadi. 
✅Qoʻshimcha maʼlumotlar boʻyicha @Guliwka777 telegram-messendjeriga murojaat qilishingiz mumkin.
</h1>

<p> ✅https://t.me/BZokirovnomidagiMESI</p>
</div>
</div>


  </div>
    <div className='allnews_right news_inner_right other_news_right'>
            <div className='section'>
              <h1>Bo‘limlar</h1>
              <div className='section_row'>
                <p>Yangiliklar</p>
                <p>E'lonlar</p>
              </div>
            </div>
  
            <ContactComp/>
  
<Newsrep/>
          </div>
    </div>
  )
}

export default OtherNewsInner3
