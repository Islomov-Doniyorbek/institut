import React, { useState } from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import ContactComp from '../../components/contactComp'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'
import { HiDownload } from 'react-icons/hi'
import { IoEyeSharp } from 'react-icons/io5'
import { Modal } from 'antd'
import { ImCancelCircle } from 'react-icons/im'

const Projects = () => {
    const {t}=useTranslation()
      const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
       <div className='activ'>
           <ActiveTopPage pageTitle={t("projects")} />
         <div className='active_padd'>
         <div className='active_box project-box'>
<div className='conuncil_row'>
 <h1>{t("projects")}</h1>
<div className='article_text'>
  <h1>{t("projects")}</h1>
<div className='download_box kengash_box'>
  <div className='download loyihalar_jamlanma'>
<span>1.</span>
  <h3>{t("projects")}</h3>
<button className='ilmiy_download'>
  <a
    href="/images/ILMIY-KENGASH.doc"
    download
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <span><HiDownload /></span>{t("download")}
  </a>
</button>
<button className='ilmiy_download_see' onClick={showModal}>
 <span><IoEyeSharp /></span>
</button>
</div>

  <div className='download loyihalar_jamlanma'>
<span>2.</span>
  <h3>{t("projects")}</h3>
<button className='ilmiy_download'>
  <a
    href="/images/ILMIY-KENGASH.doc"
    download
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <span><HiDownload /></span>{t("download")}
  </a>
</button>

<button className='ilmiy_download_see' onClick={showModal}>
 <span><IoEyeSharp /></span>
</button>
</div>


  <div className='download loyihalar_jamlanma'>
<span>3.</span>
  <h3>{t("projects")}</h3>
<button className='ilmiy_download'>
  <a
    href="/images/ILMIY-KENGASH.doc"
    download
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <span><HiDownload /></span>{t("download")}
  </a>
</button>

<button className='ilmiy_download_see' onClick={showModal}>
 <span><IoEyeSharp /></span>
</button>
</div>


  <div className='download loyihalar_jamlanma'>
<span>4.</span>
  <h3>{t("projects")}</h3>
<button className='ilmiy_download'>
  <a
    href="/images/ILMIY-KENGASH.doc"
    download
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <span><HiDownload /></span>{t("download")}
  </a>
</button>

<button className='ilmiy_download_see' onClick={showModal}>
 <span><IoEyeSharp /></span>
</button>
</div>


</div>
</div>
</div>
     <div className='active-alw project-alw'>
<ContactComp/>
</div>
         </div>
  
         </div>
     
         <div className="active_connect">
  <h1>{t("contact_for_more")}</h1>
  <button>{t("contact_button")} <span><FiPhoneCall /></span></button>
         </div>

          <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
         maskClosable={false}
  getContainer={false}
      >
        <div className='ilmiy_loyiha_can'>
<span onClick={handleCancel}><ImCancelCircle /></span>
        </div>
        <div className='ilmiy_loyiha_modal'>
         <h1>FZ-2019081449 Bajarilishi 2020-2023 yillarga mo‘ljallangan   Amaliy loyiha</h1>
      <h2>Sanoat ikkilamchi xom ashyosi asosida yangi turdagi kationit olish texnologiyasini ishlab chiqish</h2>
      </div>
      </Modal>

         </div>
  )
}

export default Projects;
