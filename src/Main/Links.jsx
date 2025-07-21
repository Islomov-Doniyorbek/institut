import React from 'react'
import { FaBook, FaRegIdCard } from 'react-icons/fa'
import { FaTableList } from 'react-icons/fa6'
import { LiaUniversitySolid } from 'react-icons/lia'
import { LuBookOpenText } from 'react-icons/lu'
import { MdOutlineMail, MdPerson } from 'react-icons/md'
import { PiTableFill } from 'react-icons/pi'

const Links = () => {
  return (
   <div className='link'> 
<h1>Tezkor havolalar</h1>
<div className='links_row'>
<div className='links_col '>
  <div className='link_icon'>
<span className='link_inner'><LiaUniversitySolid /></span>
</div>
<div className='link_texts'>
    <h2>Hemis OTM</h2>
    <b>Batafsil</b>
</div>
</div>

<div className='links_col '>
  <div className='link_icon'>
<span className='link_inner'><FaRegIdCard /></span>
</div>
<div className='link_texts'>
    <h2>Hemis Talaba</h2>
    <b>Batafsil</b>
</div>
</div>


<div className='links_col '>
  <div className='link_icon'>
<span className='link_inner'><PiTableFill /></span>
</div>
<div className='link_texts'>
    <h2>Dars jadvali</h2>
    <b>Batafsil</b>
</div>
</div>



<div className='links_col'>
  <div className='link_icon'>
<span className='link_inner'><LuBookOpenText /></span>
</div>
<div className='link_texts'>
    <h2>Ins.repozitoriy</h2>
    <b>Batafsil</b>
</div>
</div>



<div className='links_col'>
  <div className='link_icon'>
<span className='link_inner'><FaBook /></span>
</div>
<div className='link_texts'>
    <h2>Elektron kutubxona</h2>
    <b>Batafsil</b>
</div>
</div>



<div className='links_col'>
  <div className='link_icon'>
<span className='link_inner'><MdOutlineMail /></span>
</div>
<div className='link_texts'>
    <h2>Elektron pochta</h2>
    <b>Batafsil</b>
</div>
</div>



</div>
    </div>
  )
}

export default Links
