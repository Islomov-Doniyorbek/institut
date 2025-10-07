import React, { useState, useRef } from 'react'
import './albom.css'
import ActiveTopPage from '../../components/activeTopPage'
import BZ1 from "../../Audio/Botir Zokirov - Maftun Bo ldim.mp3"
import BZ2 from "../../Audio/Botir Zokirov - Majnuntol (matni bilan).mp3"
import BZ3 from "../../Audio/Botir Zokirov - Bir oqshom.mp3"
import BZ4 from "../../Audio/Botir Zokirov - Ra'no.mp3"
import BZ5 from "../../Audio/Botir Zokirov - Yarog' etma.mp3"

import OZ1 from "../../Audio/new_muz_15110_dodasicom.mp3"
import OZ2 from "../../Audio/new_muz_7225_nbkuz.mp3"
import { BsArrowRightCircle, BsArrowDownCircle, BsPlayCircle, BsPauseCircle } from 'react-icons/bs'

const Albom = () => {
  const albomlar = [
    {
      id: 0,
      sanatkor: "Botir Zokirov",
      asarlar: [
        { id: 0, title: "Maftun bo'ldim", path: BZ1 },
        { id: 1, title: "Majnuntol", path: BZ2 },
        { id: 2, title: "Bir oqshom", path: BZ3 },
        { id: 3, title: "Ra'no", path: BZ4 },
        { id: 4, title: "Yarog' etma", path: BZ5 },
      ],
    },
    {
      id: 1,
      sanatkor: "Ozodbek Nazarbekov",
      asarlar: [
        { id: 0, title: "Hur o‘g‘lim", path: OZ1 },
        { id: 1, title: "Kechir meni", path: OZ2 },
      ],
    },
  ]

  const [openId, setOpenId] = useState(null)
  const [playingId, setPlayingId] = useState(null)
  const audioRefs = useRef({})
  const [progress, setProgress] = useState({})
  const [durations, setDurations] = useState({})
  const [currentTimes, setCurrentTimes] = useState({})

  const toggleArtist = (id) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  const handlePlayPause = (artistId, songId) => {
    const key = `${artistId}-${songId}`
    const audio = audioRefs.current[key]
    if (!audio) return
    Object.entries(audioRefs.current).forEach(([k, a]) => {
      if (k !== key && a) a.pause()
    })

    if (audio.paused) {
      audio.play()
      setPlayingId(key)
    } else {
      audio.pause()
      setPlayingId(null)
    }
  }

  const handleTimeUpdate = (artistId, songId) => {
    const key = `${artistId}-${songId}`
    const audio = audioRefs.current[key]
    if (!audio) return
    const percent = (audio.currentTime / audio.duration) * 100
    setProgress(prev => ({ ...prev, [key]: percent }))
    setCurrentTimes(prev => ({ ...prev, [key]: audio.currentTime }))
  }

  const handleLoadedMetadata = (artistId, songId) => {
    const key = `${artistId}-${songId}`
    const audio = audioRefs.current[key]
    if (audio?.duration) {
      setDurations(prev => ({ ...prev, [key]: audio.duration }))
    }
  }

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div>
      <ActiveTopPage pageTitle={"Sevimli Estrada Asarlari"} />
      <div className="albom">
        <ol>
          {albomlar.map((artist) => (
            <li key={artist.id}>
              <div className="artist-header">
                <span className="artist-name">{artist.sanatkor}</span>
                {openId === artist.id ? (
                  <BsArrowDownCircle
                    className="ico"
                    onClick={() => toggleArtist(artist.id)}
                  />
                ) : (
                  <BsArrowRightCircle
                    className="ico"
                    onClick={() => toggleArtist(artist.id)}
                  />
                )}
              </div>

              {openId === artist.id && (
                <div className="music-list">
                  {artist.asarlar.map((song) => {
                    const key = `${artist.id}-${song.id}`
                    return (
                      <div
                        className={`music-item ${playingId === key ? 'playing' : ''}`}
                        key={song.id}
                      >
                        <audio
                          ref={(el) => (audioRefs.current[key] = el)}
                          src={song.path}
                          onTimeUpdate={() => handleTimeUpdate(artist.id, song.id)}
                          onLoadedMetadata={() => handleLoadedMetadata(artist.id, song.id)}
                          onEnded={() => setPlayingId(null)}
                        />

                        <button
                          className="play-btn"
                          onClick={() => handlePlayPause(artist.id, song.id)}
                        >
                          {playingId === key ? <BsPauseCircle /> : <BsPlayCircle />}
                        </button>

                        <div className="song-info">
                          <p>{song.title}</p>
                          <div className="progress-bar">
                            <div
                              className="progress"
                              style={{ width: `${progress[key] || 0}%` }}
                            ></div>
                          </div>

                          <div className="time-info">
                            <span>{formatTime(currentTimes[key])}</span>
                            <span>{formatTime(durations[key])}</span>
                          </div>
                        </div>
                        
                      </div>
                    )
                  })}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Albom
