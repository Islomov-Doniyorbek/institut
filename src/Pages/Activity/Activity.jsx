import React from 'react'
import './Active.css'

import active2 from '../../Images/active2.jpg'
import { Carousel } from 'antd'
import { FaBook, FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { LuMusic4 } from 'react-icons/lu'
import { HiMusicNote } from 'react-icons/hi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
const Activity = () => {
  return (
    <div className='activ'>
      <ActiveTopPage pageTitle={"Ilmiy tadqiqot"} />
    <div className='active_padd'>
    <div className='active_box'>
<div className='active_img'>
<img src={active2}/>
</div>
<ContactComp/>
    </div>

    <div className='active_bottom'>
<h1>Ilmiy-tadqiqot faoliyati</h1>
<p></p>
<div className='active_bottom_text'>
<span>Botir Zokirov nomidagi Milliy estrada san’ati instituti ilmiy-tadqiqot faoliyati haqida ma’lumot</span>
<span>Quyidagi yoʻnalishlari ilmiy-tadqiqot ishlari olib borilmoqda:</span>
</div>



<div className='active_bottom_box'>


<div className='links_col active_col'>
  <div className='link_icon active_col_icon'>
<span className='link_inner'><FaBook /></span>
</div>
<div className='link_texts active_text_col'>
    <h2>Zamonaviy estrada cholgʻu asboblari</h2>
    <b>Zamonaviy estrada cholgʻu asboblari</b>
</div>
</div>

<div className='links_col active_col'>
  <div className='link_icon active_col_icon'>
<span className='link_inner'><HiMusicNote /></span>
</div>
<div className='link_texts active_text_col'>
    <h2>Zamonaviy musiqa san’ati janrlari boʻyicha ilmiy tadqiqot ishlari</h2>
    <b>Zamonaviy musiqa san’ati janrlari boʻyicha ilmiy tadqiqot ishlari</b>
</div>
</div>


</div>
</div>
    </div>

    <div className="active_connect">
<h1>Qo‘shimcha ma’lumot olish uchun institut matbuot xizmatiga murojaat qiling</h1>
<button>Bog'lanish <span><FiPhoneCall /></span></button>
    </div>
    </div>
  )
}

export default Activity;

