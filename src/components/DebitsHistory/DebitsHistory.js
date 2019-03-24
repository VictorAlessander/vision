import React from 'react';
import { Table, Tag, Row, Col } from 'antd';


const DebitsHistory = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: category => (
        <span>
          <Tag color={'geekblue'}>{category.toUpperCase()}</Tag>
        </span>
      )
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    }
  ];

  const data = [
    {
      key: '1',
      name: 'Gasoline',
      category: 'Essential',
      cost: 136.60,
      date: '2019-03-15'
    }
  ];

  return (
    <Row>
      <Col span={12} offset={6}>
        <Table columns={columns} dataSource={data} title={() => 'Debits History'} />
      </Col>
    </Row>
  );
}

export default DebitsHistory;