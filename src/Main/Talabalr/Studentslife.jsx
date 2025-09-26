import React from 'react'
import life1 from '../../ImagesStatik/life1.jpg'
import life2 from '../../ImagesStatik/life2.jpg'
import life9 from '../../ImagesStatik/life4.jpg'
import life10 from '../../ImagesStatik/life5.jpg'
import life16 from '../../ImagesStatik/yashil.jpg'
import life17 from '../../ImagesStatik/yashil2.jpg'
import life19 from '../../ImagesStatik/gulxan.jpg'
import life21 from '../../ImagesStatik/sayohat.jpg'
import life24 from '../../ImagesStatik/qahramon.jpg'
import life25 from '../../ImagesStatik/qahramon3.jpg'
import { useTranslation } from 'react-i18next'

const Studentslife = () => {
  const {t} = useTranslation()
  const lifeEvents = [
    {
      images: [life1, life2],
      text: t("life_1")
    },
    {
      images: [life9, life10],
      text: t("life_2")
    },
    {
      images: [life16, life17],
      text: t("life_3")
    },
    {
      images: [life19],
      text:  t("life_4")
    },
    {
      images: [life21],
      text:  t("life_5")
    },
    {
      images: [life24, life25],
      text:  t("life_6")
    }
  ]

  return (
    <div className='students_life'>
      <h1> {t("stu_life")}</h1>
      <div className='stud_life_box'>
        {lifeEvents.map((event, index) => (
          <div className='stud_life_card' key={index}>
            <div className='stud_life_card_img'>
              {event.images.map((img, i) => (
                <img src={img} key={i} alt={`life-${index}-${i}`} />
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

export default Studentslife
