import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Achievements = () => {
   const {t}=useTranslation()
  return (
    <div className='achiv'>
           <ActiveTopPage pageTitle={t("send_achievements")} />
<div className='achive_send'>
  <h2></h2>
  <div className='achive_send_row'>
<div className='achive_send_card'>
<h1>O'quvchining ism familiyasi</h1>
<input type='text' placeholder='ism kiriting'/>
</div>
<div className='achive_send_card'>
<h1>Fakultetingizni kiriting</h1>
<input type='text' placeholder='fakultet'/>
</div>
<div className='achive_send_card'>
  <h1>Kursingizni kiriting</h1>
  <input 
    type="number" 
    placeholder="kurs" 
    min="1" 
    max="4"
  />
</div>
<div className='achive_send_card'>
  <h1>Yutug'ingizni pdf shaklda yuboring</h1>
  <input 
    type="file" 
    accept="application/pdf" 
  />
</div>
<div className='achive_send_card'>
<button>Yuborish</button>
</div>
</div>
</div>
    </div>
  )
}

export default Achievements
