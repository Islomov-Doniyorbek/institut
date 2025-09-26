import React from 'react'

// Rasmlarni import qilish
import life6 from '../../ImagesStatik/giyohvandlik.jpg'
import life7 from '../../ImagesStatik/giyohvandlik2.jpg'
import life12 from '../../ImagesStatik/fudbol.jpg'
import life14 from '../../ImagesStatik/kansert.jpg'
import life15 from '../../ImagesStatik/kansert2.jpg'
import life19 from '../../ImagesStatik/tadbir.jpg'
import life20 from '../../ImagesStatik/tadbir2.jpg'
import life22 from '../../ImagesStatik/liboslar.jpg'
import life24 from '../../ImagesStatik/uchtepa.jpg'
import { useTranslation } from 'react-i18next'

const MadaniyTadbir = () => {
      const {t} = useTranslation()
      const events = [
  {
    images: [life6, life7],
    text: t("life_10")
  },
  {
    images: [life12],
    text: t("life_11")
  },
  {
    images: [life14, life15],
    text: t("life_12")
  },
  {
    images: [life19, life20],
    text: t("life_13")
  },
  {
    images: [life22],
    text: t("life_14")
  },
  {
    images: [life24],
    text: t("life_15")
  }
]

  return (
    <div className='students_life'>
      <h1>  {t("mada_tad")}</h1>
      <div className='stud_life_box'>
        {events.map((event, index) => (
          <div className='stud_life_card' key={index}>
            <div className='stud_life_card_img'>
              {event.images.map((img, i) => (
                <img key={i} src={img} alt={`event-${index}-${i}`} />
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

export default MadaniyTadbir
