import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdNewspaper } from 'react-icons/md'
import photos from '../Images/photo_2025-07-20_14-03-41.jpg'
function News() {
  return (
    <div className='news'>
      <h1>Yangiliklar va e'lonlar</h1>
      <div className='news_row'> 
     <div className='news_card'> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>Yangilik</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>

            <div className='news_card'> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>Yangilik</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>
       
       
                 <div className='news_card'> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>Yangilik</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>


              <div className='news_card'> 
<div className='news_img'>
    <img src={photos}/>
</div>
<div className='news_text'>
<h2>Botir Zokirov nomidagi Milliy estrada san’ati institutida Respublika ilmiy-amaliy anjumani o’tkazildi. 
 </h2>
</div>
<div className='news_icons'>
<p><span><MdNewspaper /></span>Yangilik</p>
<p><span><FaRegClock /></span>04/24/2025</p>
</div>
      </div>

      </div>
<div className='news_button'>
      <button>Barcha yangiliklar</button>
      </div>
    </div>
  )
}


export default News