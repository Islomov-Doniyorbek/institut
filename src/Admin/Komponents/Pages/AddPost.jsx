import React, { useEffect, useRef, useState } from 'react';
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
  const [fileName, setFileName] = useState('Fayl yuklash');
  const [selectedCategory, setSelectedCategory] = useState('Tanlang !!!');
  const [selectedDocCategory, setSelectedDocCategory] = useState('Tanlang !!!');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDocCategoryOpen, setIsDocCategoryOpen] = useState(false);

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const postCategories = ['Yangilik', 'Tadbir', 'Elon'];
  const fileCategories = ['Magistratura', 'Bakalavr', 'Dars Jadvali', 'Ilmiy Jurnall'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setIsDocCategoryOpen(false);
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

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || 'Fayl yuklash');
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

  const handleSaveFile = () => {
    if (fileName === 'Fayl yuklash' || selectedDocCategory === 'Tanlang !!!') {
      alert("Fayl va kategoriya tanlang!");
      return;
    }

    const newFile = {
      id: Date.now(),
      file: fileName,
      category: selectedDocCategory,
      date: new Date().toLocaleDateString(),
    };

    const storedFiles = JSON.parse(localStorage.getItem('userFiles')) || [];
    const updatedFiles = [...storedFiles, newFile];
    localStorage.setItem('userFiles', JSON.stringify(updatedFiles));

    alert("Fayl ma'lumotlari saqlandi!");
    setFileName('Fayl yuklash');
    setSelectedDocCategory('Tanlang !!!');
  };

  const handleClearForm = () => {
    setTitle('');
    setText('');
    setImages([]);
    setSelectedCategory('Tanlang !!!');
    setFileName('Fayl yuklash');
    setSelectedDocCategory('Tanlang !!!');
  };

  return (
    <div className='addpost'>
      <div className='addpost_box'>
        <h1>Yangilik va tadbirlar</h1>
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

      <div className='add_files addpost_box'>
        <h1>Dars jadvali magistratura va bakalavrga oid hujjatlar uchun !!!</h1>
        <h3><span><GrDocumentPdf /></span>Kategoriya tanlab faylni yuklang !!!</h3>
        <div className='upload_file'>
          <div className="custom_select" ref={dropdownRef2}>
            <div className="custom_select_box post_select" onClick={() => setIsDocCategoryOpen(!isDocCategoryOpen)}>
              <span className='adduser_selected'>{selectedDocCategory}</span>
              <p><IoIosArrowDown /></p>
            </div>
            {isDocCategoryOpen && (
              <div className="custom_select_list adduser_selected post_selected">
                {fileCategories.map((option, index) => (
                  <p key={index} onClick={() => {
                    setSelectedDocCategory(option);
                    setIsDocCategoryOpen(false);
                  }}>{option}</p>
                ))}
              </div>
            )}
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

          <button onClick={handleSaveFile}>Saqlash</button>
        </div>
      </div>





<AddVideo/>
<AddStudent/>






    </div>
  );
};

export default AddPost;
