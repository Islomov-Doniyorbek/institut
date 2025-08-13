import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from 'react-icons/io';


function Main() {
  const {t }=useTranslation()
  return (
    <div className='main_box'>
        <div className='main_box_img'>
          <div className='main_text'>
          <h1>{t("per-name")}</h1>
          <p>{t("est-asos")}</p>
          <button >{t("bataf")}<span><IoIosArrowForward /></span></button>
          </div>
          </div>
          <div className='main_box_bottom'>
          <h1>{t("abou_ins")}</h1>
          <button>{t("accept")} <span><IoIosArrowForward /></span></button>
      </div>
    </div>
  )
}

export default Main
