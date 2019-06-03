import React from 'react';
import { BILLING_MANAGER_BASE_PATH, BILLING_HEADERS, BILLING_MANAGER_CATEGORIES_PATH } from '../../constants/BillingManager';
import { Table, Row, Col, Spin, Button } from 'antd';
import './Categories.css';
import { Link } from 'react-router-dom';
import withDefaultLayout from '../../hoc/Layout';


class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = { categories: {}, isLoading: true, isLoaded: false };
  }

  componentDidMount () {
    fetch(
      BILLING_MANAGER_BASE_PATH + BILLING_MANAGER_CATEGORIES_PATH,
      {
        headers: BILLING_HEADERS,
        method: 'GET'
      }
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ categories: data.categories, isLoading: false, isLoaded: true });
          console.log(data.categories);
          console.log(this.state.categories.map(category => {
            return {
              key: category.id,
              name: category.name
            }
          }));
        });
      }
      else {
        console.log('Something went wrong');
      }
    }).catch(err => {
      console.log(err);
    });
  };

  render () {

    const { Column } = Table;
    const { isLoading, isLoaded, categories } = this.state;

    if (!isLoaded || !categories) {
      return null;
    }

    else if (isLoading) {
      return (<Spin size="large" />);
    }
    else {
      return (
        <Row>
          <Col span={12} offset={6}>
            <Table dataSource={this.state.categories.map(category => {
              return {
                key: category.id,
                name: category.name
              }
            })} title={() => 'Categories'}>
              <Column align={'center'} title="Name" dataIndex="name" key="name" />
            </Table>
          </Col>
          <Col span={12} offset={6}>
            <Button type="primary" className="category-create-button">
              <Link to={{ pathname: '/categories/create' }}>
                Create
              </Link>
            </Button>
          </Col>
        </Row>
      );
    }
  };
};


export default withDefaultLayout(Categories);