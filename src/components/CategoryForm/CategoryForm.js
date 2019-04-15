import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  BILLING_HEADERS,
  BILLING_MANAGER_BASE_PATH,
  BILLING_MANAGER_CATEGORIES_PATH
} from '../../constants/BillingManager';


class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { categoryName: '' };

    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
  };

  handleCategoryNameChange = (event) => {
    this.props.form.setFieldsValue({ categoryName: event.target.value });
    this.setState({ categoryName: this.props.form.getFieldValue('categoryName') });
  };

  createCategory = () => {
    fetch(
      BILLING_MANAGER_BASE_PATH + BILLING_MANAGER_CATEGORIES_PATH,
      {
        headers: BILLING_HEADERS,
        method: 'POST',
        body: JSON.stringify(this.state.categoryName)
      }
    ).then(response => {
      if (response.ok) {
        console.log('Created');
      }
      else if (response.status === 401) {
        console.log('Unauthorized');
      }
      else {
        console.log('Something went wrong');
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.createCategory();
  };

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <h1>Create category</h1>
        <Col span={12} offset={6} className="column-form">
          <Form onSubmit={this.handleSubmit} className="category-form">
            <Form.Item>
              {
                getFieldDecorator('categoryName', {
                  rules: [{required: true, message: 'Enter category name'}]
                })(
                  <Input prefix={<Icon type="plus" />} placeholder="Category name" type="text" onChange={this.handleCategoryNameChange} />
                )
              }
            </Form.Item>
            <Button type="primary" htmlType="submit" className="category-form-button">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    );
  };
};

const WrappedCategoryForm = Form.create({name: 'category_form'})(CategoryForm);

export default withRouter(WrappedCategoryForm);