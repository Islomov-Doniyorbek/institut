import { Table } from 'antd'
import React from 'react'

const Follow = ({pageTitle}) => {
 const dataSource = [
    {
      direction: ' Cholg’u ijrochiligi: estrada cholg’ulari',
      science: '	1-fan',
      link: 'Havola',
      roomnumber: '220-xona',
      description:"Qo'shimcha Izoh"
    },  {
      direction: '  Cholg’u ijrochiligi: estrada cholg’ulari (fortepiano)',
      science: '	1-fan',
      link: 'Havola',
      roomnumber: '	108-xona',
      description:"	Imtihon"
    }
    
    
  ];

  const columns = [
    {
      title: "Yo'nalish",
      dataIndex: 'direction',
      key: 'direction',
    },
    {
      title: 'Fan',
      dataIndex: 'science',
      key: 'science',
    },
    {
      title: 'Online Havola',
      dataIndex: 'link',
      key: 'link',
    },
      {
      title: "Xona Raqami",
      dataIndex: 'roomnumber',
      key: 'roomnumber',
    },
    {
      title: "Qo'shimcha Izoh",
      dataIndex: 'description',
      key: 'description',
    },
  ];


  return (
    <div className='follow'>
       <div className='callcenter_top_text'>
        <h1>Qabul “Call centre”</h1>
        <p>Bosh sahifa - {pageTitle}</p>
        </div>
<div className='follow_box'>
        <div className='follow_text'>
<h2>Oʻzbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati institutida kasbiy (ijodiy) imtihonlar</h2>
<p>Yoʻnalishlar kesimida quyidagi online havolalar orqali kuzatib borishingiz mumkin:</p>
        
        
        <div className='follow_row'>
      <Table  className='student_table follow_table' dataSource={dataSource} columns={columns} />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Follow
