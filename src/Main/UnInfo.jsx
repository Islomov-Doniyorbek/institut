import React from 'react'
import { FaUniversity } from 'react-icons/fa'

function UnInfo() {
  return (
    <div className='usinfo'>
                <div className='useinfo_box'>
        <div className='info_text'>
        <span><FaUniversity /></span>
        <h1><b>Institut</b> <br/> raqamlarda</h1>
        </div>
        <div className='useinfo_row'>
        <div className='useinfo_card'>
            <h2>150</h2>
            <p>Professor-o‘qituvchilar</p>
        </div>

        <div className='useinfo_card'>
            <h2>30</h2>
            <p>Xorijiy o‘qituvchilar</p>
        </div>

        <div className='useinfo_card '>
            <h2>25</h2>
            <p>Talabalar</p>
        </div>

        <div className='useinfo_card'>
            <h2>20</h2>
            <p>Xorijiy talabalar</p>
        </div>

        <div className='useinfo_card'>
            <h2>35</h2>
            <p>Ilmiy tadqiqotchilar</p>
        </div>
        </div>
                </div>
    </div>
  )
} 


export default  UnInfo
