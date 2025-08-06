import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';


const AddPostSciene = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
    const [fileName, setFileName] = useState('Fayl yuklash');
    const categories = ['Ilmiy Taqiqot faoliyati', 'Ilmiy Jurnall', 'Ilmiy Kengash', 'Ilmiy Loyiha'];
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Fayl yuklash');
  };
     const handleSave = () => {
    if (fileName === 'Fayl yuklash' || selectedCategory === 'Tanlang !!!') {
      alert("Fayl va kategoriya tanlang!");
      return;
    }

    const newFile = {
      id: Date.now(),
      file: fileName,
      category: selectedCategory,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem('userFiles')) || [];
    const updated = [...existing, newFile];
    localStorage.setItem('userFiles', JSON.stringify(updated));

    alert("Fayl ma'lumotlari saqlandi!");
    setFileName('Fayl yuklash');
    setSelectedCategory('Tanlang !!!');
  };
  
  return (
   <div className='ilmiy'>
<h1 className='main-text-h1'>Ilmiy faoliyatlar sahifasi uchun ma'lumot yuklashingiz mumkin!!!</h1>
<div className='ilmiy-box'>
  <h2>Ilmiy faoliay sahifasida qaysi pagega ma'lumot yuklashni tanlang</h2>
 <div className="custom_select " ref={dropdownRef}>
            <div className="custom_select_box post_select ilmiy-select" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className='adduser_selected'>{selectedCategory}</span>
              <p><IoIosArrowDown /></p>
            </div>
            {isDropdownOpen && (
              <div className="custom_select_list adduser_selected post_selected">
                {categories.map((cat, idx) => (
                  <p key={idx} onClick={() => {
                        setSelectedCategory(cat);
                    setIsDropdownOpen(false);
                  }}>{cat}</p>
                ))}
              </div>
            )}
          </div>

<div className='ilmiy-input'>
<input type='text' placeholder='File nomini kiriting'/>
</div>
 <div className="file_gpg">
            <label htmlFor="fileUpload" className="file_upload_label">
              <span className="upload_icon">📁</span>
              <span className="upload_text">{fileName}</span>
              <input
                type="file"
                id="fileUpload"
                className="file_input"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <button onClick={handleSave}>Saqlash</button>


</div>

   </div>
  )
};

export default AddPostSciene;
