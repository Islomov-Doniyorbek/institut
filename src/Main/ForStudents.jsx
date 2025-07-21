import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { MdEmojiEvents } from 'react-icons/md'
import { PiStudentBold } from 'react-icons/pi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
const ForStudents = () => {
  return (
   <div className='forstudent'>
        <div className='forstudent_row'>
    <div className='forstudent_box'>
 <div className='forstudent_col'>
            <div className='forstudent_card'>
        <div className='forstudent_card_icon'>
<span><PiStudentBold /></span>
</div>
<div className='forstudent_card_text'>
    <p>Talabalar hayoti</p>
    <b>Batafsil</b>
</div>
</div>
</div>
<h1>Talabalar hayoti <span><PiStudentBold /></span></h1>
</div>


    <div className='forstudent_box'>
 <div className='forstudent_col'>
            <div className='forstudent_card'>
        <div className='forstudent_card_icon'>
<span><MdEmojiEvents /></span>
</div>
<div className='forstudent_card_text'>
    <p>Madaniy tadbirlar</p>
    <b>Batafsil</b>
</div>
</div>
</div>
<h1>Madaniy tadbirlar <span><MdEmojiEvents /></span></h1>
</div>


    <div className='forstudent_box'>
 <div className='forstudent_col'>
            <div className='forstudent_card'>
        <div className='forstudent_card_icon'>
<span><RiMoneyDollarCircleLine /></span>
</div>
<div className='forstudent_card_text'>
    <p>Tanlovlar va stipendiyalar</p>
    <b>Batafsil</b>
</div>
</div>
</div>
<h1>Tanlovlar va stipendiyalar<span><RiMoneyDollarCircleLine /></span></h1>
</div>




 </div>
    </div>
  )
}

export default ForStudents
