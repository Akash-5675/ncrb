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
          defaultValue="Convict"
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
          <Option value="capital_punishment">Capital Punishment</Option>
          <Option value="period_of_sentence">Period of Sentence</Option>
          <Option value="life_imprisonment">Life imprisonment (i.e 14 years and above)</Option>
          <Option value="temporary_imprisonment_1">10 - 13 years</Option>
          <Option value="temporary_imprisonment_2">7 - 9 years</Option>
          <Option value="temporary_imprisonment_3">5 - 6 years</Option>
          <Option value="temporary_imprisonment_4">2 - 4 years</Option>
          <Option value="temporary_imprisonment_5">1 - less than 2years</Option>
          <Option value="temporary_imprisonment_6">6 months - less than 1 year</Option>
          <Option value="temporary_imprisonment_7">3 months - less than 6 months</Option>
          <Option value="temporary_imprisonment_3">less than 3 months</Option>

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
          <Option values="illiterate">Illiterate</Option>
          <Option values="class_x">Below Class X</Option>
          <Option values="class_x-xii">Class X & above but below graduation</Option>
          <Option values="graduate">Graduate</Option>
          <Option values="post_graduate">Post-Graduate</Option>
          <Option values="degree">Holding Technical Degree/Diploma etc.</Option>
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
          <Option values="hindu">Hindu</Option>
          <Option values="muslim">Muslim</Option>
          <Option values="sikh">Sikh</Option>
          <Option values="christian">Christian</Option>
          <Option values="others1">Others</Option>

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
          <Option values="sc">SC</Option>
          <Option values="st">ST</Option>
          <Option values="obc">OBC</Option>
          <Option values="others2">Others</Option>
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
          <Option values="state">Belongs to State</Option>
          <Option values="other_state">Beiongs to Other State</Option>
          <Option values="other_country">Belongs to Other country</Option>
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
          <Option values="a1">0, Reicased after completion of conviction pent</Option>
          <Option values="a2">0, Premature release</Option>
          <Option values="a3">0, Released on appeal</Option>
          <Option values="a4">0, Released on bail</Option>
          <Option values="a5">0, Pardons</Option>
          <Option values="a6">0, Transferree to other States</Option>
          <Option values="a7">0, Other Releases (release due to illness, transferred to Mental Hospital)</Option>
          <Option values="a8">1, Acquitted</Option>
          <Option values="a9">1, Released on appeal</Option>
          <Option values="a10">1, Reieased on bail</Option>
          <Option values="a11">1, Transferred to other States</Option>
          <Option values="a12">1, Extradited</Option>
          <Option values="a13">1, Other releases (transferred to Mental/Civil Hospital)</Option>
          <Option values="a14">2, Released on completion of detention period</Option>
          <Option values="a15">2, Released before completion of detention period</Option>
          <Option values="a16">2, Released on bail</Option>
          <Option values="a17">2, Other Releases (temporary transfer etc.)</Option>
          <Option values="a18">3, Escapees from Inside Prison</Option>
          <Option values="a19">3, Escapees from Outside Prison</Option>
          <Option values="a20">3, Escapees from Police Custody</Option>
          <Option values="a21">3, Re arrested escapees</Option>
          <Option values="a22">4, Natural</Option>
          <Option values="a23">4, Un-natural | Suicides</Option>
          <Option values="a24">4, Un-natural | Execution</Option>
          <Option values="a25">4, Un-natural | Murder by Inmates</Option>
          <Option values="a26">4, Un-natural | Death due to assault by outside elements curing transit or inside prison</Option>
          <Option values="a27">4, Un-natural | Deaths due to firing</Option>
          <Option values="a28">4, Un-natural | Death due to negligence/excesses by jail personnel</Option>
          <Option values="a29">4, Un-natural | Others</Option>
          <Option values="a30">5, Number of persons released on parole</Option>
          <Option values="a31">5, Number of parole absconders</Option>
          <Option values="a32">5, Number of parole absconcers re-arrested</Option>
        </Select>


      </Modal>
    </>
  );
};



export default App;