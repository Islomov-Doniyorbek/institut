// import { t } from 'i18next'
import React, { useState } from 'react'
import './albom.css'
import ActiveTopPage from '../../components/activeTopPage'
import BZ1 from "../../Audio/Botir Zokirov - Maftun Bo ldim.mp3"
import { BsArrowDownCircle, BsArrowDownUp, BsArrowRightCircle, BsPlusCircle } from 'react-icons/bs'
const Albom = () => {

  const albomlar = [
    {
      id:0,
      sanatkor: "Botir Zokirov",
      asarlar: [
        {
          id: 0,
          title: "Maftun bo'ldim",
          path: BZ1
        },
        {
          id: 1,
          title: "Majnuntol",
          path: BZ1
        },
        {
          id: 2,
          title: "Bir oqshom",
          path: BZ1
        },
      ]
    },
    {
      id:1,
      sanatkor: "Ozodbek Nazarbekov",
      asarlar: [
        {
          id: 0,
          title: "Hur o'g'lim",
          path: BZ1
        }
      ]
    },
  ]



  const [isOpen, setIsOpen] = useState(false)

  const toggleRow = (id) => {
    
  }
  return (
    <div>
      <ActiveTopPage pageTitle={"Sevimli Estrada Asarlari"} />
      <div className="albom">
        
        <ol>
          {
            albomlar.map(item=>{
              return (
                <li>
                  <p className=''>
                    <span>{item.sanatkor}</span>
                    <span>
                      <BsArrowDownCircle className={`${isOpen ? "scr" : "hide"} ico`} onClick={()=>setIsOpen(prev=>!prev)} />
                      <BsArrowRightCircle className={`${isOpen ? "hide" : "scr"} ico`} onClick={()=>setIsOpen(prev=>!prev)} />
                    </span>
                  </p>
                  <div className="musics">
                    {
                      item.asarlar.map(m=>{
                        return (
                          <audio controls src={m.path}></audio>
                        )
                      })
                    }
                  </div>
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default Albom
