import React from 'react'
import './Accept.css'
import { MdLocalPhone } from 'react-icons/md'
import ActiveTopPage from '../../components/activeTopPage'
const Callcenter = () => {

   const kafedra = [
    {
      id:0,
      name: "Dilmurotov Mirzobek O‘tkir o‘g‘li",
  job: `O‘quv-uslubiy boshqarma boshlig‘i
Qabul komissiyasi mas’ul kotibi`,
     phone: "+998 91 003 36 55",
    },
    {
      id:1,
      name: "Ishaliyev Javohir Erkin o‘g‘li",
  job: `Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy-pedagogik kadrlar tayyorlash bo‘limi boshlig‘i,
Magistratura bo‘yicha mas’ul kotib o‘rinbosari`,
     phone: "+998 91 003 36 55",
    },  {
      id:2,
      name: "Karimov Аsiljon Olimjon o‘g‘li",
  job: `“Registrator ofisi” boshlig‘i,
“Estrada xonandaligi” ta’lim yo‘nalishi abituriyentlarini ijodiy sinovlardan o‘tkazish bo‘yicha mas’ul`,
     phone: "+998 99 048 95 05",
    }, {
      id:3,
      name: "Matyaqubov Jo‘shqinbek Bozorboy o‘g‘li",
  job: `“Registrator ofisi” Malumotlar bazasi bo‘limi (Back Office) menejeri,
“Estrada xonandaligi” ta’lim yo‘nalishi abituriyentlarini ijodiy sinovlardan o‘tkazish bo‘yicha mas’ul`,
     phone: "+998 50 779 01 44",
    },
    {
      id:4,
      name: "Esonaliyev Abdulatif Abdujabbor o‘g‘li",
  job: `“Estrada cholg‘u ijrochiligi”, “Estrada xonandaligi” fakultetlari O‘quv ishlari bo‘yicha dekan o‘rinbosari,
“Estrada cholg‘ulari” ta’lim yo‘nalishi abituriyentlarini ijodiy sinovlardan o‘tkazish bo‘yicha mas’ul`,
     phone: "+998 97 712 85 84",
    },{
      id:5,
      name: "Yo‘ldashov Samandar Ortiq o‘g‘li",
  job: `“Registrator ofisi” Xizmat ko‘rsatish bo‘limi (Front Office) menejeri
“Estrada cholg‘ulari” ta’lim yo‘nalishi abituriyentlarini ijodiy sinovlardan o‘tkazish bo‘yicha mas’ul`,
     phone: "+998 95 557 05 35",
    },
    {
      id:6,
      name: "Umidullayev Bekzod Farxod o‘g‘li",
  job: `Talabalar amaliyoti bo‘limi boshlig‘i,
“Bastakorlik san’ati”, “San’atshunoslik: musiqashunoslik” ta’lim yo‘nalishlari abituriyentlarini ijodiy sinovlardan o‘tkazish bo‘yicha mas’ul`,
     phone: "+998 93 931 44 94",
    },{
      id:7,
      name: "Yuldoshev Bekdosh Dilshod o‘g‘li",
  job: `O‘quv-uslubiy boshqarma boshlig‘i o‘rinbosari,
“Texnogen san’at: musiqiy ovoz rejissyorligi” “Dirijorlik: estrada orkestri dirijorligi” ta’lim yo‘nalishlari abituriyentlarini ijodiy sinovlardan o‘tkazish bo‘yicha mas’ul`,
     phone: "+998 99 461 45 15",
    }
  ]
  


  return (
    <div className='callcenter'>
        <ActiveTopPage pageTitle={"Call Centr"} />

        <div className='callcenter_box'>


<div className='callcenter_text'>
<h1>Qabul komissiyasi "Call Centre" ma’lumotlari</h1>
<p>O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti 2025/2026 o‘quv yili bo‘yicha qabul komissiyasi bilan bog'lanish uchun:</p>
</div>

  <div className='callcenter_row'>
      {kafedra.map(item => (
        <div className='callcenter_card' key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.job}</p>
          <div className='callcenter_phone'>
            <span><MdLocalPhone /></span>
            <h3>{item.phone}</h3>
          </div>
        </div>
      ))}
    </div>

        </div>

    </div>
  )
}

export default Callcenter
