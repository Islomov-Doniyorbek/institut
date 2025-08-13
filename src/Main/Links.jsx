import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaBook, FaRegIdCard } from 'react-icons/fa'
// import { FaTableList } from 'react-icons/fa6'
import { LiaUniversitySolid } from 'react-icons/lia'
import { LuBookOpenText } from 'react-icons/lu'
import { MdOutlineMail, MdPerson } from 'react-icons/md'
import { PiTableFill } from 'react-icons/pi'

function Links() {
     const {t }=useTranslation()
  return (
   <div className='link'> 
<h1>{t("havola")}</h1>
<div className='links_row'>
<div className='links_col '>
  <div className='link_icon'>
<span className='link_inner'><LiaUniversitySolid /></span>
</div>
<div className='link_texts'>
    <h2>{t("hemis-otm")}</h2>
    <b>{t("bataf")}</b>
</div>
</div>

<div className='links_col '>
  <div className='link_icon'>
<span className='link_inner'><FaRegIdCard /></span>
</div>
<div className='link_texts'>
    <h2>{t("hemis-stu")}</h2>
    <b>{t("bataf")}</b>
</div>
</div>


<div className='links_col '>
  <div className='link_icon'>
<span className='link_inner'><PiTableFill /></span>
</div>
<div className='link_texts'>
    <h2>{t("les_table")}</h2>
    <b>{t("bataf")}</b>
</div>
</div>



<div className='links_col'>
  <div className='link_icon'>
<span className='link_inner'><LuBookOpenText /></span>
</div>
<div className='link_texts'>
    <h2>Ins.repozitoriy</h2>
    <b>{t("bataf")}</b>
</div>
</div>



<div className='links_col'>
  <div className='link_icon'>
<span className='link_inner'><FaBook /></span>
</div>
<div className='link_texts'>
    <h2>{t("elk_kutu")}</h2>
    <b>{t("bataf")}</b>
</div>
</div>



<div className='links_col'>
  <div className='link_icon'>
<span className='link_inner'><MdOutlineMail /></span>
</div>
<div className='link_texts'>
    <h2>{t("elk_email")}</h2>
    <b>{t("bataf")}</b>
</div>
</div>



</div>
    </div>
  )
}


export default Links
