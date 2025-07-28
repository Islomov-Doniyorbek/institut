import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { HiDownload } from 'react-icons/hi'
import ContactComp from '../../components/contactComp'

const Article = () => {
  return (
    <div className='activ'>
         <div className='active_top'>
       <h1>Ilmiy jurnallar</h1>
       <p>Bosh sahifa - Ilmiy jurnallar</p>
       </div>
       <div className='active_padd'>
       <div className='active_box'>
   <div className='active_img council_img'>
   <h2>Ilmiy jurnallar</h2>
 <p>Botir Zokirov nomidagi Milliy estrada san’ati institutining ilmiy jurnallari haqida ma’lumot.</p>
<div className='article_text'>
<h1>Eng So'nggi Ilmiy Maqolalar</h1>
<div className='download_box'>
<div className='download'>
<span>1.</span>
<h3>Botir Zokirov nomidagi MESI xabarlari</h3>
<button><span><HiDownload /></span>Yuklab olish</button>
</div>

<div className='download'>
<span>1.</span>
<h3>Botir Zokirov nomidagi MESI xabarlari</h3>
<button><span><HiDownload /></span>Yuklab olish</button>
</div>
<div className='download'>
<span>1.</span>
<h3>Botir Zokirov nomidagi MESI xabarlari</h3>
<button><span><HiDownload /></span>Yuklab olish</button>
</div>
</div>
</div>

   </div>
  <ContactComp/>
       </div>

       </div>
   
       <div className="active_connect">
   <h1>Qo‘shimcha ma’lumot olish uchun institut matbuot xizmatiga murojaat qiling</h1>
   <button>Bog'lanish <span><FiPhoneCall /></span></button>
       </div>
       </div>
  )
}

export default Article
