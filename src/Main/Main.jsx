import { IoIosArrowForward } from 'react-icons/io';


function Main() {
  return (
    <div className='main_box'>
        <div className='main_box_img'>
          <div className='main_text'>
          <h1>Botir Zokirov</h1>
          <p>O'zbek estradasi asoschisi</p>
          <button >Batafsil <span><IoIosArrowForward /></span></button>
          </div>
          </div>
          <div className='main_box_bottom'>
          <h1>Institutga qabul haqida to‘liq ma’lumot olish uchun ushbu havolani bosing</h1>
          <button>Qabul-2025 <span><IoIosArrowForward /></span></button>
      </div>
    </div>
  )
}

export default Main