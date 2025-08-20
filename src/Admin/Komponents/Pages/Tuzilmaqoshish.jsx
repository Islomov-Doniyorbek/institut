import React from 'react'

const Tuzilmaqoshish = () => {
  return (
    <div className='tuzilma'>
      <h1>Rahbar kiriting</h1>
      <div className='tuzilma_rahbariyat'>
<div className='rahbariyat_card'>
<h2>Rahbarning ism familiyasi:</h2>
<input type='text' placeholder='Ism va familiya'/>
</div>

<div className='rahbariyat_card'>
<h2>Rahbarning lavozimi:</h2>
<input type='text' placeholder='Lavozim'/>
</div>


<div className='rahbariyat_card'>
<h2>Rahbarning unvonlari:</h2>
<input type='text' placeholder='unvoni: professor, dotsent.....'/>
</div>


<div className='rahbariyat_card'>
<h2>Rahbarning qaysi vaqtda qabul qilishi :</h2>
<input type='text' placeholder='9:00 da 17:00gacha dushanba seshanba kunlari'/>
</div>

<div className='rahbariyat_card'>
<h2>Rahbarning nomeri :</h2>
<input type='text' placeholder='+998767676767'/>
</div>


<div className='rahbariyat_card'>
<h2>Rahbarning emaili :</h2>
<input type='text' placeholder='admin@gmail.com'/>
</div>
      </div>

    </div>
  )
}

export default Tuzilmaqoshish






