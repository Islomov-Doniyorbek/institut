import React, { useState } from 'react'
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaPassport } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineAddPhotoAlternate, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import ActiveTopPage from '../../components/activeTopPage';

const Forigns = () => {
      const [selected, setSelected] = useState('');
          const [language, setLanguage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);   // 3x4 rasm
  const [images, setImages] = useState(null); // pasport rasm
  const [photo, setPhoto] = useState(null); // pasport rasm
    const [document, setDocument] = useState(null); // diplom rasm
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImagenNext = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(URL.createObjectURL(file));
    }
  };

    const handleImagenBack = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

     const handleImageDoc = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocument(URL.createObjectURL(file));
    }
  };

  const [selectedText, setSelectedText] = useState('Tanlang');

  const options = [
    '60210100 - Texnogen san’at: musiqiy ovoz rejissyorligi',
    '60310200 - Multimedia texnologiyalari',
    '60410300 - Kompyuter grafikasi va animatsiyasi',
  ];
    const handleSelect = (text) => {
    setSelectedText(text);
    setIsOpen(false);
  };
  return (
    <div className='forign'>
       <ActiveTopPage pageTitle={"Xorijiy fuqarolar uchun qabul"} />
<div className='forign_container'>
      <div className='forign_top'>
<h1>Xorijiy Fuqarolar uchun Qabul</h1>
<p>Botir Zokirov Nomidagi Milliy Estrada San'ati Institutida 2025-2026 o'quv yili uchun ariza topshirish.</p>
      </div>

<div className='forign_box'>
<h2>Ariza topshirish formasi</h2>
<div className='forign_inputs'>

<div className='forign_inputs_card'>
<h3>ISM-FAMILIYA:</h3>
<input type='text' placeholder='Ism va familiya'/>
</div>


<div className='forign_inputs_card'>
<h3>PASSPORT SERIYA RAQAM:</h3>
<input type='text' placeholder='AD0000000'/>
</div>

<div className='forign_inputs_card'>
<h3>DAVLAT:</h3>
<input type='text' placeholder='Davlatingiz nomini kiriting'/>
</div>

<div className='forign_inputs_card'>
<h3>SHAHAR:</h3>
<input type='text' placeholder='Shahringiz nomini kiriting'/>
</div>

<div className="edu-container">
    <h3> TA'LIM SHAKLI:</h3>
      <label className="edu-option">
        <input
          type="radio"
          name="education"
          value="bakalavr"
          checked={selected === 'bakalavr'}
          onChange={() => setSelected('bakalavr')}
        />
        <span className="custom-radio"></span>
        Bakalavr
      </label>

      <label className="edu-option">
        <input
          type="radio"
          name="education"
          value="magistr"
          checked={selected === 'magistr'}
          onChange={() => setSelected('magistr')}
        />
        <span className="custom-radio"></span>
        Magistratura
      </label>
    </div>



    <div className='forign_select forign_inputs_card'>
      <h3>Ta'lim darajasi:</h3>

      <div
        className='forign-select-box'
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <h1>{selectedText}</h1>
        <span><IoIosArrowDown /></span>
      </div>

      {isOpen && (
        <div className='forign_select_list'>
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleSelect(option)}
              style={{ cursor: 'pointer', margin: '5px 0' }}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>

<div className="edu-container">
    <h3> TA'LIM TILI:</h3>
      <label className="edu-option">
        <input
          type="radio"
          name="language"
          value="Rus Tili"
          checked={language === 'rustili'}
          onChange={() => setLanguage('rustili')}
        />
        <span className="custom-radio"></span>
      Rus Tili
      </label>

      <label className="edu-option">
        <input
          type="radio"
          name="language"
          value="ozbektili"
          checked={language === 'ozbektili'}
          onChange={() => setLanguage('ozbektili')}
        />
        <span className="custom-radio"></span>
        O'zbek Tili
      </label>
    </div>

<div className='forign_inputs_card'>
<h3>EMAIL:</h3>
<input type='email' placeholder='example@gmail.com'/>
</div>


<div className='forign_inputs_card'>
<h3>TELEFON RAQAM:</h3>
<input type='text' placeholder='+998 999 99 99'/>
</div>



  <div className='forign-photo-boxx'>
      {/* 3x4 rasm */}
      <div className='forign_photo'>
        <h3><span><BsPersonBoundingBox /></span>FOTOSURAT 3x4:</h3>
        <h4>O'zingizni 3x4 rasmingizni yuklang iltimos !!!</h4>
        <input
          type="file"
          id="imageUpload1"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />

        <label htmlFor="imageUpload1" className="forign_photo_box">
          {image ? (
            <img src={image} alt="Tanlangan rasm" className="preview-img" />
          ) : (
            <span><MdOutlineAddPhotoAlternate /></span>
          )}
        </label>
      </div>

      {/* Pasport rasm */}
      <div className='forign_photo'>
        <h3> <span><FaPassport /></span>PASSPORTINGIZNI OLD TOMON RASMINI YUKLANG:</h3>
          <h4>Passportingizni old tomon rasmini yuklang iltimos!!!</h4>
        <input
          type="file"
          id="imageUpload2"
          accept="image/*"
          onChange={handleImagenNext}
          style={{ display: 'none' }}
        />

        <label htmlFor="imageUpload2" className="forign_photo_box">
          {images ? (
            <img src={images} alt="Tanlangan rasm" className="preview-img" />
          ) : (
            <span><MdOutlineAddPhotoAlternate /></span>
          )}
        </label>
      </div>
   


  {/* Pasport rasm */}
      <div className='forign_photo'>
        <h3> <span><FaPassport /></span>PASSPORTINGIZNI ORQA TOMON RASMINI YUKLANG:</h3>
          <h4>Passportingizni orqa tomon rasmini yuklang iltimos!!!</h4>
        <input
          type="file"
          id="imageUpload3"
          accept="image/*"
          onChange={handleImagenBack}
          style={{ display: 'none' }}
        />

        <label htmlFor="imageUpload3" className="forign_photo_box">
          {photo ? (
            <img src={photo} alt="Tanlangan rasm" className="preview-img" />
          ) : (
            <span><MdOutlineAddPhotoAlternate /></span>
          )}
        </label>
      </div>


  {/* Diplom rasm */}
      <div className='forign_photo'>
        <h3> <span><GiDiploma /></span>PASSPORTINGIZNI OLD TOMON RASMINI YUKLANG:</h3>
          <h4>Passportingizni old tomon rasmini yuklang iltimos!!!</h4>
        <input
          type="file"
          id="imageUpload4"
          accept="image/*"
          onChange={handleImageDoc}
          style={{ display: 'none' }}
        />

        <label htmlFor="imageUpload4" className="forign_photo_box">
          {document ? (
            <img src={document} alt="Tanlangan rasm" className="preview-img" />
          ) : (
            <span><MdOutlineAddPhotoAlternate /></span>
          )}
        </label>
      </div>
 </div>

<div className='forign_button'>
    <button>Ma'lumotlarni yuborish</button>
</div>


</div>
</div>
</div>
    </div>
  )
}

export default Forigns
