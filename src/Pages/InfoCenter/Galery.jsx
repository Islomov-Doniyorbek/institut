import React, { useState } from 'react'
import { IoMdPhotos } from "react-icons/io"
import { FaFileAudio } from "react-icons/fa"
import { LuVideotape } from "react-icons/lu"
import photo1 from '../../Images/photo1.jpg'
import photo2 from '../../Images/photo2.jpg'
import audio from '../../Images/audio.jpg'
import RanoMp3 from "../../Audio/Botir Zokirov - Ra'no.mp3";
import { useTranslation } from 'react-i18next'
export default function Galery() {
  const [activeTab, setActiveTab] = useState("photos")
   const {t }=useTranslation()
  return (
    <div className='galery_box'>

      <div className='galery_buttons'>
        <button onClick={() => setActiveTab("photos")}>
          <span className='photos'><IoMdPhotos /></span> {t("galery")}
        </button>
        <button onClick={() => setActiveTab("audios")}>
          <span><FaFileAudio /></span> {t("audio")}
        </button>
        <button onClick={() => setActiveTab("videos")}>
          <span><LuVideotape /></span> {t("video")}
        </button>
      </div>

      {/* Rasmlar */}
      {activeTab === "photos" && (
        <div className='galery_img_box'>
          <div className='galery_photos'>
            <img src={photo1} alt="photo1" />
          </div>
          <div className='galery_photos'>
            <img src={photo2} alt="photo2" />
          </div>
          <div className='galery_photos'>
            <img src={photo1} alt="photo1 again" />
          </div>
        </div>
      )}

      {/* Audiolar */}
      {activeTab === "audios" && (
        <div className='galery_audios'>
          <div className='audios_box'>
<div className='audio_img'>
     <img src={audio}/>
          </div>
   <div className="audio_item">
    <p>Botir Zokirov - Ra'no</p>
    <audio controls >
   <source src={RanoMp3} type="audio/mpeg" />
      Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
    </audio>
  </div>
</div>


      <div className='audios_box'>
<div className='audio_img'>
     <img src={audio}/>
          </div>
   <div className="audio_item">
    <p>Botir Zokirov - Ra'no</p>
    <audio controls>
   <source src={RanoMp3} type="audio/mpeg" />
      Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
    </audio>
  </div>
</div>


     <div className='audios_box'>
<div className='audio_img'>
     <img src={audio}/>
          </div>
   <div className="audio_item">
    <p>Botir Zokirov - Ra'no</p>
    <audio controls>
   <source src={RanoMp3} type="audio/mpeg" />
      Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
    </audio>
  </div>
</div>

        </div>
      )}

      {/* Videolar */}
      {activeTab === "videos" && (
        <div className='galery_videos'>
  <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/1xDIzlDksKA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

   <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/jCX_lKfCquc"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

   <div className="video_wrapper">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/uDq4-HkSJ-k"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

</div>
      )}
    </div>
  )
}