import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdLocalPhone, MdOutlineMarkEmailRead } from 'react-icons/md'
import { TbDeviceLandlinePhone } from 'react-icons/tb'


export default function Connect({pageTitle}) {

  return (
    <div className='connect_line'>
        <div className='allnews_top connect_top'>
        <h1>Bog‘lanish</h1>
        <p>Bosh sahifa - {pageTitle}</p>
      </div>
      <div className='connect_box'>
<h1>Bog‘lanish ma’lumotlari</h1>
<h2>O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti </h2>

<div className='connect_row'>
<div className='connect_col'>
<div className='connect_col_icon'>
    <span><MdLocalPhone /></span>
</div>
<div className='connect_col_text'>
    <p>Tel.</p>
    <h1>+998 71 200 00 00</h1>
</div>
</div>


<div className='connect_col'>
<div className='connect_col_icon'>
    <span><TbDeviceLandlinePhone /></span>
</div>
<div className='connect_col_text'>
    <p>	Faks</p>
    <h1>+998 71 200 00 00</h1>
</div>
</div>


<div className='connect_col'>
<div className='connect_col_icon'>
    <span><MdOutlineMarkEmailRead /></span>
</div>
<div className='connect_col_text'>
    <p>E-mail</p>
    <h1>info@consulting.com</h1>
</div>
</div>


<div className='connect_col'>
<div className='connect_col_icon'>
    <span><FaLocationDot /></span>
</div>
<div className='connect_col_text'>
    <p>	Manzil</p>
    <h1>Toshkent 100027, Botir Zokirov ko'chasi 1-uy</h1>
</div>
</div>


</div>
      </div>



      <div className='connect_send'>
<h1>Xabar yuborish</h1>
<div className='connect_send_box'>
    <div className='connect_connect'>
<div className='connect_send_card'>
    <h2>Ism</h2>
    <input type='text' placeholder='Ism'/>
</div>

<div className='connect_send_card'>
    <h2>E-mail</h2>
    <input type='email' placeholder='Email'/>
</div>
</div>
<div className='connect_send_textarea'>
   <h2>Xabaringizni yozing</h2> 
    <textarea id="message" name="message" rows="5" cols="30" placeholder="Bu yerga yozing..."></textarea>
</div>
<div className='connect_send_send'>
<button>Jo'natish</button>
</div>
</div>
      </div>


    </div>
  )
}
