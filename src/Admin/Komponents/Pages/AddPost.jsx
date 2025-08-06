import React, {  useEffect, useRef, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { TiNews } from 'react-icons/ti';
import AddVideo from './AddInner/AddVideo';
import AddStudent from './AddInner/AddStudent';

const AddPost = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
const [isCategoryOpen, setIsCategoryOpen] = useState(false);


  const dropdownRef1 = useRef(null);

  const postCategories = ['Yangilik', 'Tadbir', 'Elon'];
 
           useEffect(() => {
    const handleClickOutside = (event) => {
       if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


 const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  const newImages = [];

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      newImages.push(reader.result);
      if (newImages.length === files.length) {
        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    };
    reader.readAsDataURL(file); // ✅ base64 formatga o‘giradi
  });
};

  const handleDeleteImage = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };



  const handleSavePost = () => {
    if (!title || !text || selectedCategory === 'Tanlang !!!' || images.length === 0) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      text,
      images,
      category: selectedCategory,
      date: new Date().toLocaleDateString(),
    };

    const storedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
    const updatedPosts = [...storedPosts, newPost];
    localStorage.setItem('userPosts', JSON.stringify(updatedPosts));

    alert("Ma'lumot saqlandi!");
    handleClearForm();
  };

  const handleClearForm = () => {
    setTitle('');
    setText('');
    setImages([]);
    setSelectedCategory('Tanlang !!!');
  };

  return (
    <div className='addpost'>
      <h1 className='main-text-h1'>Axborot sahifasi uchun ma'lumotlar yuklashingiz mumkin!!!</h1>
      <div className='addpost_box'>
        <h1>Yangilik, tadbirlar, e'lonlar</h1>
        <div className='forign_photo'>
          <h3>
            <span><TiNews /></span>Yangilik va tadbirlar ma'lumotini yuklash uchun kategoriyadan tanlang !!!
          </h3>

          <div className="custom_select" ref={dropdownRef1}>
            <div className="custom_select_box post_select" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <span className='adduser_selected'>{selectedCategory}</span>
              <p><IoIosArrowDown /></p>
            </div>

            {isCategoryOpen && (
              <div className="custom_select_list adduser_selected post_selected">
                {postCategories.map((option, index) => (
                  <p key={index} onClick={() => {
                    setSelectedCategory(option);
                    setIsCategoryOpen(false);
                  }}>{option}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='addpost_cont'>
          <div className='ad_post_img'>
            <input
              type="file"
              id="imageUpload1"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              style={{ display: 'none' }}
            />
            <label htmlFor="imageUpload1" className="forign_photo_box add_post_boxx">
              <span><MdOutlineAddPhotoAlternate /></span>
            </label>
          </div>

          <div className='addpost_img'>
            {images.map((img, index) => (
              <div key={index} className="image-container">
                <img src={img} alt={`rasm-${index}`} className="preview-img2" />
                <span className="delete-icon" onClick={() => handleDeleteImage(index)}><FaTrashAlt /></span>
              </div>
            ))}
          </div>
        </div>

        <div className='addpost_textarea'>
          <h1>Sarlavha</h1>
          <textarea
            className='my_textarea first_textarea'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Matn sarlavhasini kiriting!!!"
            rows={5}
            cols={50}
          />
          <h1>Ma'lumotlar</h1> 
          <textarea
            className='my_textarea'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Yangilik yoki tadbiringizga oid ma'lumotlarni kiriting !!!"
            rows={5}
            cols={50}
          />
        </div>

        <div className='add_btn_box'>
          <button className='btn_add' onClick={handleSavePost}>Ma'lumotlarni Saqlash</button>
          <button className='btn_add btn_add2' onClick={handleClearForm}>Ma'lumotlarni Tozalash</button>
        </div>
      </div>

  <AddVideo/>


 </div>
  );
};

export default AddPost;
