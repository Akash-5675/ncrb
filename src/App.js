import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,

} from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
import { Button, Modal, Upload, message } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Select } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const { Title } = Typography;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
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
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >



      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >


            <>
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <Title level={5}>Type</Title>
                <Select
                  defaultValue="Convict"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="under_trials">Undertrials</Option>
                  <Option value="detenus">Detenus</Option>
                  <Option value="escapees">Escapees</Option>
                  <Option value="deaths">Deaths</Option>
                  <Option value="parole">Parole</Option>
                  <Option value="other">others</Option>
                </Select>
                <br></br><br></br>
                <Title level={5}>Offence</Title>
                <Select
                  defaultValue="Offence"
                  style={{
                    width: 400,
                  }}
                  onChange={handleChange}
                >
                  <Option value="1">"A","Murder (U/S302 & 303")</Option>
                  <Option value="2">"A","Attempt to Murder (U/S 307)"</Option>
                  <Option value="3">"A","CH not amounting to Murder (U/S 304 & 308)"</Option>
                  <Option value="4">"A","Rape (U/S 376)")</Option>
                  <Option value="5">"A","Kidnapping & Abduction (U/S 363 to 369, 379 to 373)"</Option>
                  <Option value="6">"A","Dacoity (U/S 395 to 398)")</Option>
                  <Option value="7">"A","Prep. & Assembly for Dacoity (U/S 399 to 402) "</Option>
                  <Option value="8">"A","Robbery (U/S 392 to 394, 397 & 398) ")</Option>
                  <Option value="9">"A","Burglary (U/S 449 to 452, 454, 455, 457 to 460) "</Option>
                  <Option value="10">"A","Thefts (U/S 379 to 382)"</Option>
                  <Option value="11">"A","Extortion (U/S 384 to 389)"</Option>
                  <Option value="12">"A","Riots (U/s 146 to 149)")</Option>
                  <Option value="13">"A","Arson (U/S 436 to 438) ")</Option>
                  <Option value="14">"A","Criminal Breach of Trust (U/S 406 to 409) "</Option>
                  <Option value="15">"A","Cheating (U/S 417 to 419)"</Option>
                  <Option value="16">"A","Counterfeiting (U/S 231 to 236A & 489A to 489E)"</Option>
                  <Option value="17">"A","Dowry Deaths (U/S 304B)"</Option>
                  <Option value="18">"A","Molestation (U/S 354)"</Option>
                  <Option value="19">"A","Eve-teasing (U/S 509)"</Option>
                  <Option value="20">"A","Cruelty by Husband or Relative of husband (U/S 498A) "</Option>
                  <Option value="21">"A","Other IPC crimes (not included above)"</Option>
                  <Option value="22">"B","Arms Act"</Option>
                  <Option value="23">"B","N.D.P.S.Act"</Option>
                  <Option value="24">"B","Gambling Act"</Option>
                  <Option value="25">"B","Excise Act"</Option>
                  <Option value="26">"B","Prohibition Act"</Option>
                  <Option value="27">"B","Explosive & Explosive Substances Act"</Option>
                  <Option value="28">"B","Terrorist & Disruptive Activities (TADA) Act "</Option>
                  <Option value="29">"B","Immoral Traffic (Prevention Act)"</Option>
                  <Option value="30">"B","Indian Railways Act"</Option>
                  <Option value="31">"B","Registration of Foreigners Act"</Option>
                  <Option value="32">"B","Protection of Civil Rights Act"</Option>
                  <Option value="33">"B","SC/ST (Prevention of Atrocities ) Act"</Option>
                  <Option value="34">"B","Indian Passport Act"</Option>
                  <Option value="35">"B","Essential Commodities Act"</Option>
                  <Option value="36">"B","Antiquity & Art Treasure Act"</Option>
                  <Option value="37">"B","Dowry Prohibition Act "</Option>
                  <Option value="38">"B","Foreign Exchange Regulation Act 1973 "</Option>
                  <Option value="39">"B","Prevention of Corruption Act, 1988"</Option>
                  <Option value="40">"B","Conservation of Foreign Exchange & Prevention of Smuggling Activities Act "</Option>
                  <Option value="41">"B","Other SLL Offences (not included above)"</Option>
                  <Option value="42">"C","Civil cases"</Option>
                </Select>
                <br></br><br></br>
                <Title level={5}>Sentence</Title>

                <Select
                  defaultValue="Sentence"
                  style={{
                    width: 400,
                  }}
                  onChange={handleChange}
                >
                  <Option value="43">Capital Punishment</Option>
                  <Option value="44">Period of Sentence</Option>
                  <Option value="45">Life imprisonment (i.e 14 years and above)</Option>
                  <Option value="46">10 - 13 years</Option>
                  <Option value="47">7 - 9 years</Option>
                  <Option value="48">5 - 6 years</Option>
                  <Option value="49">2 - 4 years</Option>
                  <Option value="50">1 - less than 2years</Option>
                  <Option value="51">6 months - less than 1 year</Option>
                  <Option value="52">3 months - less than 6 months</Option>
                  <Option value="53">less than 3 months</Option>

                </Select> <br></br><br></br>

                <Title level={5}>Qualifications</Title>
                <br></br>

                <Select
                  defaultValue="Qualification"
                  style={{
                    width: 400,
                  }}
                  onChange={handleChange}
                >
                  <Option value="54">Illiterate</Option>
                  <Option value="55">Below Class X</Option>
                  <Option value="56">Class X & above but below graduation</Option>
                  <Option value="57">Graduate</Option>
                  <Option value="58">Post-Graduate</Option>
                  <Option value="59">Holding Technical Degree/Diploma etc.</Option>
                </Select>


                <br></br><br></br>

                <Title level={5}>Religion</Title>
                <br></br>

                <Select
                  defaultValue="Religion"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="hindu">Hindu</Option>
                  <Option value="muslim">Muslim</Option>
                  <Option value="sikh">Sikh</Option>
                  <Option value="christian">Christian</Option>
                  <Option value="others1">Others</Option>

                </Select>

                <br></br><br></br>

                <Title level={5}>Caste</Title>
                <br></br>

                <Select
                  defaultValue="Caste"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="sc">SC</Option>
                  <Option value="st">ST</Option>
                  <Option value="obc">OBC</Option>
                  <Option value="others2">Others</Option>
                </Select>

                <br></br><br></br>

                <Title level={5}>Domicile</Title>
                <br></br>

                <Select
                  defaultValue="Domicile"
                  style={{
                    width: 200,
                  }}
                  onChange={handleChange}
                >
                  <Option value="state">Belongs to State</Option>
                  <Option value="other_state">Beiongs to Other State</Option>
                  <Option value="other_country">Belongs to Other country</Option>
                </Select>

                <br></br><br></br>

                <Title level={5}>Detention Period</Title>
                <br></br>

                <Select
                  defaultValue="Detention Period"
                  style={{
                    width: 400,
                  }}
                  onChange={handleChange}
                >
                  <Option value="a1">0, Reicased after completion of conviction pent</Option>
                  <Option value="a2">0, Premature release</Option>
                  <Option value="a3">0, Released on appeal</Option>
                  <Option value="a4">0, Released on bail</Option>
                  <Option value="a5">0, Pardons</Option>
                  <Option value="a6">0, Transferree to other States</Option>
                  <Option value="a7">0, Other Releases (release due to illness, transferred to Mental Hospital)</Option>
                  <Option value="a8">1, Acquitted</Option>
                  <Option value="a9">1, Released on appeal</Option>
                  <Option value="a10">1, Reieased on bail</Option>
                  <Option value="a11">1, Transferred to other States</Option>
                  <Option value="a12">1, Extradited</Option>
                  <Option value="a13">1, Other releases (transferred to Mental/Civil Hospital)</Option>
                  <Option value="a14">2, Released on completion of detention period</Option>
                  <Option value="a15">2, Released before completion of detention period</Option>
                  <Option value="a16">2, Released on bail</Option>
                  <Option value="a17">2, Other Releases (temporary transfer etc.)</Option>
                  <Option value="a18">3, Escapees from Inside Prison</Option>
                  <Option value="a19">3, Escapees from Outside Prison</Option>
                  <Option value="a20">3, Escapees from Police Custody</Option>
                  <Option value="a21">3, Re arrested escapees</Option>
                  <Option value="a22">4, Natural</Option>
                  <Option value="a23">4, Un-natural | Suicides</Option>
                  <Option value="a24">4, Un-natural | Execution</Option>
                  <Option value="a25">4, Un-natural | Murder by Inmates</Option>
                  <Option value="a26">4, Un-natural | Death due to assault by outside elements curing transit or inside prison</Option>
                  <Option value="a27">4, Un-natural | Deaths due to firing</Option>
                  <Option value="a28">4, Un-natural | Death due to negligence/excesses by jail personnel</Option>
                  <Option value="a29">4, Un-natural | Others</Option>
                  <Option value="a30">5, Number of persons released on parole</Option>
                  <Option value="a31">5, Number of parole absconders</Option>
                  <Option value="a32">5, Number of parole absconcers re-arrested</Option>
                </Select>


              </Modal><br></br><br></br>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

            </>

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;