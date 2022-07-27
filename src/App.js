import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Button, Modal } from 'antd';
import { Typography } from 'antd';
import { Select } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       
        <Title level={5}>Type</Title>
        <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="1">Undertrials</Option>
      <Option value="2">Detenus</Option>
      <Option value="3">Escapees</Option>
      <Option value="4">Deaths</Option>
      <Option value="5">Parole</Option>
      <Option value="6">others</Option>
    </Select>
    <br></br>
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="ayush">Ayush</Option>
      <Option value="lucy">Lucyrsdfhh</Option>
      
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
      </Modal>
    </>
  );
};



export default App;