import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import document from '../../Images/main_doc.jpg'
import document2 from '../../Images/documnt1.jpg'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { GrLanguage } from 'react-icons/gr'
const Documents = () => {
  return (
    <div>
  <div className='allnews_top'>
        <h1>Qabul 2025-yil natijalari</h1>
        <p>Bosh sahifa - Axborot xizmati - Qabul 2025-yil natijalari</p>
      </div>

      <div className='document_box'>
 
<div className='document_box_top'>
<h1>Imtihon Natijalari</h1>
<p>Botir Zokirov nomidagi Milliy estrada san’ati institutining 2025-yil 9-iyul sanasida o'tkazilgan imtihon natijalari.</p>
</div>

<div className='document_box_center'>
         <div className='document_boxshadow'>
<div className='document_center_top'>
    <img src={document}/>
    <h2>Cholg’u ijrochiligi: estrada cholg’ulari (saksafon)</h2>
</div>
<div className='document_center_center'>
<h3><span><FaCalendarAlt /></span><p>Sana:</p>2025-yil 9-iyul</h3>
<h3><span><MdOutlineLibraryMusic /></span><p>Imtihon turi:</p>Kasbiy (ijodiy) imtihon</h3>
<h3><span><GrLanguage /></span><p>Ta’lim tili:</p>O’zbekcha</h3>
</div>
<div className='document_img'>
<img src={document2}/>
</div>
</div>
      </div>
      </div>
    </div>
  )
}

export default Documents
