import React from 'react';
import DefaultHeader from '../DefaultHeader/DefaultHeader';
import { Layout } from 'antd';

const { Content, Footer } = Layout;


const DefaultLayout = (props) => (
  <Layout>
    <DefaultHeader />
    <Content style={{ margin: '16px 0' }}>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Vision @2019 Created by Victor Alessander
    </Footer>
  </Layout>
);



export default DefaultLayout;