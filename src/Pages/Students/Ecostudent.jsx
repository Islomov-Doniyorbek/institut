import { Table } from 'antd';
import React from 'react';
import './Students.css';

const Ecostudent = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    {
      key: '2',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    {
      key: '3',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    }, {
      key: '4',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    }, {
      key: '5',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    
  ];

  const columns = [
    {
      title: '№',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Ismi va Familiyasi',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Fakulteti va Kursi',
      dataIndex: 'faculty',
      key: 'faculty',
    },
    {
      title: 'Telefon raqami',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];

  return (
    <div className='students'>
      <div className='allnews_top accept_top'>
        <h1>Ekofaol talabalar</h1>
        <p>Bosh sahifa - Ekofaol talabalar</p>
      </div>

      <div className='students_list'>
        <h1>Ekofaol talabalar ro'yxati</h1>
        <Table className='student_table' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Ecostudent;