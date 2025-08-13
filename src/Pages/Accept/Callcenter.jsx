import React from 'react'
import './Accept.css'
import { MdLocalPhone } from 'react-icons/md'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Callcenter = () => {
  const { t } = useTranslation()

  const kafedra = [
    {
      id:0,
      name: "Dilmurotov Mirzobek O‘tkir o‘g‘li",
      job: t("job_0"),
      phone: "+998 91 003 36 55",
    },
    {
      id:1,
      name: "Ishaliyev Javohir Erkin o‘g‘li",
      job: t("job_1"),
      phone: "+998 91 003 36 55",
    },
    {
      id:2,
      name: "Karimov Аsiljon Olimjon o‘g‘li",
      job: t("job_2"),
      phone: "+998 99 048 95 05",
    },
    {
      id:3,
      name: "Matyaqubov Jo‘shqinbek Bozorboy o‘g‘li",
      job: t("job_3"),
      phone: "+998 50 779 01 44",
    },
    {
      id:4,
      name: "Esonaliyev Abdulatif Abdujabbor o‘g‘li",
      job: t("job_4"),
      phone: "+998 97 712 85 84",
    },
    {
      id:5,
      name: "Yo‘ldashov Samandar Ortiq o‘g‘li",
      job: t("job_5"),
      phone: "+998 95 557 05 35",
    },
    {
      id:6,
      name: "Umidullayev Bekzod Farxod o‘g‘li",
      job: t("job_6"),
      phone: "+998 93 931 44 94",
    },
    {
      id:7,
      name: "Yuldoshev Bekdosh Dilshod o‘g‘li",
      job: t("job_7"),
      phone: "+998 99 461 45 15",
    }
  ]

  return (
    <div className='callcenter'>
        <ActiveTopPage pageTitle={t("call_centre_title")} />

        <div className='callcenter_box'>
          <div className='callcenter_text'>
            <h1>{t("call_centre_heading")}</h1>
            <p>{t("call_centre_desc")}</p>
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
