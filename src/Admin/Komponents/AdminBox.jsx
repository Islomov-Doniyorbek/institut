import React from 'react'
import './Admin.css'
import { GoPersonAdd } from 'react-icons/go'
import { RiFileAddLine } from 'react-icons/ri'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { TbCategory } from 'react-icons/tb'
import Adduser from './Pages/Adduser'
import AddPost from './Pages/AddPost'
import { IoPersonCircle } from 'react-icons/io5'
import { FaRegAddressCard } from 'react-icons/fa'
import UserPostList from './Pages/UserPostList'
import brand from '../images/Images/photo_2025-08-04_12-08-19.jpg'
import { GrDomain } from 'react-icons/gr'
import { BsMenuButtonWide } from 'react-icons/bs'
import Editing from './Pages/Editing'
import AddPostSciene from './Pages/AddPostSciene'
import science from '../images/Images/science_791187.png'
import training from '../images/Images/classroom_10748263.png'
import accept from '../images/Images/transaction_18787427.png'
import AddPostClass from './Pages/AddPostClass'
import { PiStudentBold } from 'react-icons/pi'
import AddPostCall from './Pages/AddPostCall'


const AdminBox = () => {
  const navigate = useNavigate(); 


  return (
    <div className='admin_container'>
    <div className='admin_menu'>
   
   <div className='admin_logo'>
<img src={brand}/>
<h1>Admin Panel</h1> 
</div>
<div className='admin_menu_list'>

  <div onClick={() => navigate('/admin/Adminpanel/Adminqoshish')} className='admin_menu_card'>
    <span><GoPersonAdd /></span>
    <div>
      <h2>User qo'shish</h2>
      <p>Yangi adminlar qo‘shish</p>
    </div>
  </div>

 <div onClick={() => navigate('/admin/Adminpanel/Postqoshish')} className='admin_menu_card'>
    <span><RiFileAddLine /></span>
    <div>
      <h2>Axborot uchun post qo'shish</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
  </div>


  <div onClick={() => navigate('/admin/Adminpanel/Ilmiyfaoliyatqoshish')} className='admin_menu_card'>
    <span className='admin_science'><img src={science}/></span>
    <div>
      <h2>Ilmiy faoliyat uchun post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
  </div>

  <div onClick={() => navigate('/admin/Adminpanel/TalimQoshish')} className='admin_menu_card'>
    <span className='admin_science'><img src={training}/></span>
    <div>
      <h2>Ta'lim uchun post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
  </div>


    <div onClick={() => navigate('/admin/Adminpanel/Qabul')} className='admin_menu_card'>
    <span className='admin_science'><img src={accept}/></span>
    <div>
      <h2>Qabul post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
  </div>

      <div onClick={() => navigate('/admin/Adminpanel/TalimQoshish')} className='admin_menu_card'>
    <span><PiStudentBold /></span>
    <div>
      <h2>Talabalar post</h2>
      <p>Ma'lumot qo‘shish</p>
    </div>
  </div>


  <div onClick={() => navigate('/admin/Adminpanel/UserPosts')} className='admin_menu_card'>
    <span><TbCategory /></span>
    <div>
      <h2>Qo‘shilgan Postlar</h2>
      <p>Barcha kategoriyadagi postlar</p>
    </div>
  </div>


    <div onClick={() => navigate('/admin/Adminpanel/EditToNav')} className='admin_menu_card'>
    <span><BsMenuButtonWide /></span>
    <div>
      <h2>Navbar va footer</h2>
      <p>Navbar va footerni tahrirlashingiz mumkin</p> 
    </div>
  </div>

</div>


 </div>


 <div className='admin_box'>
  <Routes>
        <Route path="Adminqoshish" element={<Adduser />} />
        <Route path="Postqoshish" element={<AddPost />} />
         <Route path="Ilmiyfaoliyatqoshish" element={<AddPostSciene />} />
                  <Route path="TalimQoshish" element={<AddPostClass />} />
                   <Route path="Qabul" element={<AddPostCall />} />
        <Route path="UserPosts" element={<UserPostList />} />
        <Route path="EditToNav" element={<Editing />} />
      </Routes>
 </div>
 </div>
 
  )
}

export default AdminBox
