import { Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { MdNewspaper } from 'react-icons/md';
import './UserOwn.css'
const UserOwnNews = () => {
     const [userPosts, setUserPosts] = useState([]);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [editingPost, setEditingPost] = useState(null);
      const [editedTitle, setEditedTitle] = useState('');
      const [editedText, setEditedText] = useState('');
    
      useEffect(() => {
        const storedPosts = localStorage.getItem("userPosts");
        if (storedPosts) {
          setUserPosts(JSON.parse(storedPosts));
        }
      }, []);
    
      const showModal = (post) => {
        setEditingPost(post);
        setEditedTitle(post.title);
        setEditedText(post.text);
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        const updatedPosts = userPosts.map((post) =>
          post.id === editingPost.id
            ? { ...post, title: editedTitle, text: editedText }
            : post
        );
        setUserPosts(updatedPosts);
        localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
        setIsModalOpen(false);
        setEditingPost(null);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setEditingPost(null);
      };
    
      const handleDelete = (id) => {
        const filtered = userPosts.filter(post => post.id !== id);
        setUserPosts(filtered);
        localStorage.setItem("userPosts", JSON.stringify(filtered));
      };
  return (
    <div>
        <div className='user-video-post'>
      <div className='userpost_row'>
              {userPosts.map((post) => (
                <div key={post.id} className='userpost_card'>
          
                     <div
  className="news_img userpost_card_img"
  style={{ backgroundImage: `url(${post.images?.[0]})` }}
>
</div>
                      <div className='news_text'>
                        <h2>{post.title}</h2>
                      </div>
                      <div className='news_icons_box'>
                        <div className='news_icons'>
                          <p><span><MdNewspaper /></span>{post.category}</p>
                          <p><span><FaRegClock /></span>{post.date}</p>
                        </div>
                        <div className='new_delete_icon'>
                          <span className='yellow_icon' onClick={() => showModal(post)}>
                            <FaPencilAlt />
                          </span>
                          <span onClick={() => handleDelete(post.id)}>
                            <FaTrashAlt />
                          </span>
                        </div>
                      </div>
                    </div>
              ))}
            </div>
      </div>
      
      
      
      
      <>
      <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null} 
              title="Ma'lumotlarni tahrirlash"
            >
              <div className='modal_user'>
                <p>Sarlavha</p>
                <Input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                <p>Ma'lumot matni</p>
                <Input.TextArea rows={4} value={editedText} onChange={(e) => setEditedText(e.target.value)} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
                <button onClick={handleCancel} className="cancel_btn">Bekor qilish</button>
                <button onClick={handleOk} className="save_btn">Saqlash</button>
              </div>
            </Modal>
            </>
    </div>
  )
}

export default UserOwnNews
