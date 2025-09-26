import React from 'react'
import life17 from '../../ImagesStatik/inteluktual.jpg'
import life4 from '../../ImagesStatik/zakovat.jpg'
import life5 from '../../ImagesStatik/zakovat2.jpg'
import zakovat from '../../ImagesStatik/zakovat3.jpg'
import { useTranslation } from 'react-i18next'

const Stependiyalar = () => {
     const {t} = useTranslation()
  const events = [
        {
      images: [life4, life5],
      text: t("life_8")
    },{
      images: [life17],
      text: t("life_7")
    },
    {
      images: [zakovat],
      text: t("life_9")
    }
  ]

  return (
    <div className='students_life'>
      <h1>  {t("setpend")}</h1>
      <div className='stud_life_box'>
        {events.map((event, index) => (
          <div className='stud_life_card' key={index}>
            <div className='stud_life_card_img'>
              {event.images.map((img, i) => (
                <img src={img} key={i} alt={`event-${index}-${i}`} />
              ))}
            </div>
            <div className='stud_life_text'>
              <h2>{event.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stependiyalar
