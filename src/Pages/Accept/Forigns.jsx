import React, { useState } from 'react'
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaPassport } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import ActiveTopPage from '../../components/activeTopPage';
import { useTranslation } from 'react-i18next';

const Forigns = () => {
  const { t } = useTranslation()

  const [selected, setSelected] = useState('');
  const [language, setLanguage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [document, setDocument] = useState(null);
  const [selectedText, setSelectedText] = useState(t("select_option"));

  const options = [
    t("option_1"),
    t("option_2"),
    t("option_3"),
  ];

  const handleSelect = (text) => {
    setSelectedText(text);
    setIsOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleImagenNext = (e) => {
    const file = e.target.files[0];
    if (file) setImages(URL.createObjectURL(file));
  };

  const handleImagenBack = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const handleImageDoc = (e) => {
    const file = e.target.files[0];
    if (file) setDocument(URL.createObjectURL(file));
  };

  return (
    <div className='forign'>
      <ActiveTopPage pageTitle={t("page_title")} />
      <div className='forign_container'>
        <div className='forign_top'>
          <h1>{t("heading")}</h1>
          <p>{t("sub_heading")}</p>
        </div>

        <div className='forign_box'>
          <h2>{t("form_title")}</h2>
          <div className='forign_inputs'>

            <div className='forign_inputs_card'>
              <h3>{t("full_name")}</h3>
              <input type='text' placeholder={t("full_name_placeholder")}/>
            </div>

            <div className='forign_inputs_card'>
              <h3>{t("passport_number")}</h3>
              <input type='text' placeholder='AD0000000'/>
            </div>

            <div className='forign_inputs_card'>
              <h3>{t("country")}</h3>
              <input type='text' placeholder={t("country_placeholder")}/>
            </div>

            <div className='forign_inputs_card'>
              <h3>{t("city")}</h3>
              <input type='text' placeholder={t("city_placeholder")}/>
            </div>

            <div className="edu-container">
              <h3>{t("education_form")}</h3>
              <label className="edu-option">
                <input
                  type="radio"
                  name="education"
                  value="bakalavr"
                  checked={selected === 'bakalavr'}
                  onChange={() => setSelected('bakalavr')}
                />
                <span className="custom-radio"></span>
                {t("bachelor")}
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
                {t("master")}
              </label>
            </div>

            <div className='forign_select forign_inputs_card'>
              <h3>{t("education_level")}</h3>
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
              <h3>{t("language")}</h3>
              <label className="edu-option">
                <input
                  type="radio"
                  name="language"
                  value="rustili"
                  checked={language === 'rustili'}
                  onChange={() => setLanguage('rustili')}
                />
                <span className="custom-radio"></span>
                {t("russian")}
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
                {t("uzbek")}
              </label>
            </div>

            <div className='forign_inputs_card'>
              <h3>{t("email")}</h3>
              <input type='email' placeholder='example@gmail.com'/>
            </div>

            <div className='forign_inputs_card'>
              <h3>{t("phone_number")}</h3>
              <input type='text' placeholder='+998 999 99 99'/>
            </div>

            <div className='forign-photo-boxx'>
              {/* 3x4 rasm */}
              <div className='forign_photo'>
                <h3><span><BsPersonBoundingBox /></span>{t("photo_3x4")}</h3>
                <h4>{t("photo_3x4_hint")}</h4>
                <input
                  type="file"
                  id="imageUpload1"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
                <label htmlFor="imageUpload1" className="forign_photo_box">
                  {image ? (
                    <img src={image} alt="Selected" className="preview-img" />
                  ) : (
                    <span><MdOutlineAddPhotoAlternate /></span>
                  )}
                </label>
              </div>

              {/* Pasport old rasm */}
              <div className='forign_photo'>
                <h3><span><FaPassport /></span>{t("passport_front")}</h3>
                <h4>{t("passport_front_hint")}</h4>
                <input
                  type="file"
                  id="imageUpload2"
                  accept="image/*"
                  onChange={handleImagenNext}
                  style={{ display: 'none' }}
                />
                <label htmlFor="imageUpload2" className="forign_photo_box">
                  {images ? (
                    <img src={images} alt="Selected" className="preview-img" />
                  ) : (
                    <span><MdOutlineAddPhotoAlternate /></span>
                  )}
                </label>
              </div>

              {/* Pasport orqa rasm */}
              <div className='forign_photo'>
                <h3><span><FaPassport /></span>{t("passport_back")}</h3>
                <h4>{t("passport_back_hint")}</h4>
                <input
                  type="file"
                  id="imageUpload3"
                  accept="image/*"
                  onChange={handleImagenBack}
                  style={{ display: 'none' }}
                />
                <label htmlFor="imageUpload3" className="forign_photo_box">
                  {photo ? (
                    <img src={photo} alt="Selected" className="preview-img" />
                  ) : (
                    <span><MdOutlineAddPhotoAlternate /></span>
                  )}
                </label>
              </div>

              {/* Diplom rasm */}
              <div className='forign_photo'>
                <h3><span><GiDiploma /></span>{t("diploma")}</h3>
                <h4>{t("diploma_hint")}</h4>
                <input
                  type="file"
                  id="imageUpload4"
                  accept="image/*"
                  onChange={handleImageDoc}
                  style={{ display: 'none' }}
                />
                <label htmlFor="imageUpload4" className="forign_photo_box">
                  {document ? (
                    <img src={document} alt="Selected" className="preview-img" />
                  ) : (
                    <span><MdOutlineAddPhotoAlternate /></span>
                  )}
                </label>
              </div>
            </div>

            <div className='forign_button'>
              <button>{t("submit")}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Forigns
