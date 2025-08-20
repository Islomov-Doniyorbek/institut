import { Table } from 'antd';
import React from 'react';
import './Students.css';
import ActiveTopPage from '../../components/activeTopPage';
import { useTranslation } from 'react-i18next';

const Ecostudent = () => {
  const { t } = useTranslation();

  const dataSource = [
    {
      key: '1',
      name: 'Abdusamatov Azamat',
      faculty: 'Professional ta’lim: vokal, 4-kurs talabasi',
      phone: '90 674 83 53',
    },
    {
      key: '2',
      name: 'Kenjayev Jahonmirzo',
      faculty: 'Estrada xonandaligi, 4-kurs talabasi',
      phone: '	90 108 08 01',
    },
      {
      key: '3',
      name: '	Mamayunusova Zarnigor',
      faculty: 'Musiqashunoslik, 3-kurs talabasi',
      phone: '90 674 83 53',
    },  {
      key: '4',
      name: 'Kodirova Nargiza',
      faculty: '	Estrada cholg‘u ijrochiligi, 2-kurs talabasi',
      phone: '	93 035 03 50',
    },  {
      key: '5',
      name: '	Xasanboyev Aziz',
      faculty: '	Estrada cholg‘u ijrochiligi, 2-kurs talabasi',
      phone: '	93 035 03 50',
    }
  ];

  const columns = [
    {
      title: t('column_no'),
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: t('column_name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('column_faculty'),
      dataIndex: 'faculty',
      key: 'faculty',
    },
    {
      title: t('column_phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
  ];

  return (
    <div className='students'>
      <ActiveTopPage pageTitle={t('eco_students_page')} />
 <div className='students_list'>
        <h1>{t('eco_students_heading')}</h1>
        <Table className='student_table' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Ecostudent;
