import React from 'react';
import { Form, Button, Row, Col, notification, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import './DebitsForm.css';


class DebitsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cost: '', date: '', category: '', owner: '', debitName: '' }

    this.handleCostInputChange = this.handleCostInputChange.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleDebitNameInputChange = this.handleDebitNameInputChange.bind(this);
  }

  handleCostInputChange = (event) => {
    this.props.form.setFieldsValue({ cost: event.target.value })
    this.setState({ cost: event.target.value })
  }

  handleDateInputChange = (event) => {
    this.props.form.setFieldsValue({ date: event.target.value })
    this.setState({ date: event.target.value })
  }

  handleDebitNameInputChange = (event) => {
    this.props.form.setFieldsValue({ debitName: event.target.value })
    this.setState({ debitName: event.target.value })
  }

  handleSelectedCategory = (value) => {
    console.log(`${value} selected`);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    notification.open({
      message: 'Debit status',
      description: 'Created successfully'
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const Option = Select.Option;

    return (
      <Row>
        <h1>Create a debit</h1>
        <Col span={12} offset={6} className="column-form">
          <Form onSubmit={this.handleSubmit} className="debits-form">
            <Form.Item>
              {
                getFieldDecorator('debitName', {
                  rules: [{ required: true, message: 'Enter the name of debit' }]
                })(
                  <Input type="text" placeholder="Debit Name" onChange={this.handleDebitNameInputChange} />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('date', {
                  rules: [{ required: true, message: 'Enter the date of debit' }]
                })(
                  <Input type="text" placeholder="Debit date" onChange={this.handleDateInputChange} />
                )
              }
            </Form.Item>
            <Form.Item>
              <Select
                showSearch
                placeholder="Select a category"
                optionFilterProp="children"
                onChange={this.handleSelectedCategory}
                filterOption={
                  (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }>
                  <Option value="food">Food</Option>
                  <Option value="clothes">Clothes</Option>
                  <Option value="eletronics">Eletronics</Option>
                  <Option value="obrigatory">Obrigatory</Option>
              </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit">Create debit</Button>
            <Button type="primary" htmlType="button" className="debit-form-btn-back">
              <Link to={{ pathname: '/' }}>Back</Link>
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedDebitsForm = Form.create({ name: 'debit_form' })(DebitsForm);

export default WrappedDebitsForm;