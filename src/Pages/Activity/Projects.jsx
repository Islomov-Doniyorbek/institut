import React from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'

const Projects = () => {
  return (
       <div className='activ'>
           <ActiveTopPage pageTitle={"Ilmiy loyihalar"} />
         <div className='active_padd'>
         <div className='active_box project-box'>
     <div className='active_img council_img project-img'>
     <h2>Ilmiy loyihalar</h2>
     <span></span>
     <p>Botir Zokirov nomidagi Milliy estrada san’ati institutining ilmiy loyihalari haqida ma’lumot.</p>
     </div>
     <div className='active-alw project-alw'>
<ContactComp/>
</div>
         </div>
  
         </div>
     
         <div className="active_connect">
     <h1>Qo‘shimcha ma’lumot olish uchun institut matbuot xizmatiga murojaat qiling</h1>
     <button>Bog'lanish <span><FiPhoneCall /></span></button>
         </div>
         </div>
  )
}

export default Projects;
