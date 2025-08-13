import { Table } from 'antd'
import React from 'react'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Follow = () => {
  const { t } = useTranslation()

  const dataSource = [
    {
      direction: t("direction_1"),
      science: t("science_1"),
      link: t("link_1"),
      roomnumber: t("room_1"),
      description: t("description_1")
    },
    {
      direction: t("direction_2"),
      science: t("science_2"),
      link: t("link_2"),
      roomnumber: t("room_2"),
      description: t("description_2")
    }
  ]

  const columns = [
    {
      title: t("column_direction"),
      dataIndex: 'direction',
      key: 'direction',
    },
    {
      title: t("column_science"),
      dataIndex: 'science',
      key: 'science',
    },
    {
      title: t("column_link"),
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: t("column_roomnumber"),
      dataIndex: 'roomnumber',
      key: 'roomnumber',
    },
    {
      title: t("column_description"),
      dataIndex: 'description',
      key: 'description',
    },
  ]

  return (
    <div className='follow'>
      <ActiveTopPage pageTitle={t("page_title")} />
      <div className='follow_box'>
        <div className='follow_text'>
          <h2>{t("follow_heading")}</h2>
          <p>{t("follow_text")}</p>

          <div className='follow_row'>
            <Table className='student_table follow_table' dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Follow
