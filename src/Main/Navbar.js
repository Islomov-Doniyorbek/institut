import React from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import main_img from '../Images/main_img.jpg'
import person from '../Images/main_img_2.jpg'
import { IoMdArrowDropdown } from 'react-icons/io'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_top'>
<p className='mar_rig'><span><IoLocationOutline /></span> Toshkent 100027, Botir Zokirov ko'chasi 1 uy</p>
<p><span><AiOutlinePrinter /></span> Toshkent 100027, Botir Zokirov ko'chasi 1 uy</p>
        </div>
        <div className='navbar_center'>
<img className='main_img' src={main_img}/>
<img className='person' src={person}/>
        </div>

        <div className='navbar_bottom'>
<ul>
    <li>
        <a>Bosh sahifa</a>
    </li>


    <li className="dropdown">
        <a>Institut</a> <span><IoMdArrowDropdown /></span>
        <div className='dropdown_container'>
        <div className="dropdown-content">
          <p>Tuzilma</p>
          <p>Rahbariyat</p>
          <p>Institut tarixi</p>
          <p>Me'yoriy-huquqiy hujjatlar</p>
          <p>Xalqaro hamkorlik</p>
          <p>Foydali havolalar</p>
          <p>Botir Zokirov hayoti va ijodi</p>
          
        </div>
        </div>
    </li>



    <li className="dropdown">
        <a>Ta'lim</a>  <span><IoMdArrowDropdown /></span>
        <div className='dropdown_container'>
        <div className="dropdown-content">
          <p>Bakalavriyat</p>
          <p>Magistratura</p>
          <p>Dars jadvali (BA & MA)</p>
          <p>Bitiruvchilar</p>
 
        </div>
        </div>
    </li>

    <li className="dropdown">
        <a>Ilmiy faoliyat</a>  <span><IoMdArrowDropdown /></span>
        <div className='dropdown_container'>
        <div className="dropdown-content dropdown-content_2">
          <p>Ilmiy-tadqiqot faoliyati</p>
          <p>Ilmiy kengashlar</p>
          <p>Ilmiy jurnallar</p>
          <p>Ilmiy loyihalar</p>
 
        </div>
        </div>
    </li>


    <li  className="dropdown">
        <a>Axborot xizmati</a>  <span><IoMdArrowDropdown /></span>
        <div className='dropdown_container'>
        <div className="dropdown-content dropdown-content_3">
          <p>Yangiliklar</p>
          <p>Tadbirlar</p>
          <p>Media galereya</p>
          <p>Bog'lanish</p>
          <p>Qabul 2025-yil natijalari</p>
        </div>
        </div>
    </li>


    <li className="dropdown">
        <a>Qabul-2025</a>  <span><IoMdArrowDropdown /></span>
        <div className='dropdown_container'>
        <div className="dropdown-content dropdown-content_3">
          <p>Qabul “Call centre”</p>
          <p>Qabul kvotalari (BA & MA)</p>
          <p>Xorijiy fuqarolar uchun qabul</p>
          <p>Qabul dasturlari</p>
          <p>Kasbiy(ijodiy) imtihonlar translatsiyasi</p>
        </div>
        </div>
    </li>


    <li className="dropdown">
        <a>Talabalar</a>  <span><IoMdArrowDropdown /></span>
        <div className='dropdown_container'>
        <div className="dropdown-content dropdown-content_3">
          <p>Ekofaol talabalar</p>
          <p>GRANT UCHUN ARIZA</p>
          <p>Talabalar Yutuqlari Jo’natish</p>
          <p>GRANT UCHUN TEST</p>
        </div>
        </div>
    </li>


    <li className="search">
       <input type='search' placeholder='search...'/>
    </li>
</ul>
        </div>
    </div>
  )
}
