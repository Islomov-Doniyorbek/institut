import React from 'react'
import { FaPencilAlt, FaRegCalendarAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { MdNewspaper } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

const UserOwnEvents = () => {

  return (
    <div>
       <div className='user-video-post'>
              <h1>Yangiliklar</h1>
 <div className='event_row'>

          <div className='event_card own_event_card'>
         <div className='eventt_img'></div>
          <div className='event_text'>
            <h2>“Jadidlar. Turkistonga maktublar” multimedia koʻrgazmasiga tashrif</h2>
          </div>
          <div className='own_event_icon'>
            <div className='event_icons'>
            <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
            <p><span><FaRegClock /></span>15:00 to 16:00</p>
            <p><span><SlLocationPin /></span>Toshkent, Estrada insitutiti</p>
            </div>
                   <div className='new_delete_icon own-icon'>
                                      <span className='yellow_icon' >
                                        <FaPencilAlt />
                                      </span>
                                      <span >
                                        <FaTrashAlt />
                                      </span>
                                    </div>
                                    </div>
          </div>


           <div className='event_card own_event_card'>
         <div className='eventt_img'></div>
          <div className='event_text'>
            <h2>“Jadidlar. Turkistonga maktublar” multimedia koʻrgazmasiga tashrif</h2>
          </div>
          <div className='own_event_icon'>
            <div className='event_icons'>
            <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
            <p><span><FaRegClock /></span>15:00 to 16:00</p>
            <p><span><SlLocationPin /></span>Toshkent, Estrada insitutiti</p>
            </div>
                   <div className='new_delete_icon own-icon'>
                                      <span className='yellow_icon' >
                                        <FaPencilAlt />
                                      </span>
                                      <span >
                                        <FaTrashAlt />
                                      </span>
                                    </div>
                                    </div>
          </div>


         <div className='event_card own_event_card'>
         <div className='eventt_img'></div>
          <div className='event_text'>
            <h2>“Jadidlar. Turkistonga maktublar” multimedia koʻrgazmasiga tashrif</h2>
          </div>
          <div className='own_event_icon'>
            <div className='event_icons'>
            <p><span><FaRegCalendarAlt /></span>10/14/2024</p>
            <p><span><FaRegClock /></span>15:00 to 16:00</p>
            <p><span><SlLocationPin /></span>Toshkent, Estrada insitutiti</p>
            </div>
                   <div className='new_delete_icon own-icon'>
                                      <span className='yellow_icon' >
                                        <FaPencilAlt />
                                      </span>
                                      <span >
                                        <FaTrashAlt />
                                      </span>
                                    </div>
                                    </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default UserOwnEvents
