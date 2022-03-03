import React, { useState } from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as ChevronSmDownIcon } from "../../../_starter/shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "../../../_starter/shared/Icons/Phone";
import { default as PlusIcon } from "../../../_starter/shared/Icons/Plus";

const ActivityDetailButtons = styled.div`
  display: flex;
`;

const TabNav = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  box-sizing: border-box;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
`;

const TabItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 3px solid ${(props) => (
    props.active ? `${getColor('blueLight')}` : `${getColor('white')}`
  )};
  background-color: ${getColor('white')};
`;

const TabPanel = styled.div`
    display: ${props => (props.active ? '' : 'none')};
`;

const ActivityDpwnBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 88px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 16px 10px 16px 20px;
  color: ${getColor('greyDarkest')};
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
`;
const PersonDropdownBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 88px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 16px 10px 16px 20px;
  color: ${getColor('white')};
  background: ${getColor('blue')};
`;
const ActivityContainer = styled.div`
  width: 667px;
  height: 1095px;
  margin: 0 0 10px 0px;


  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
const BtnTitle = styled.label`
  margin: 0 8px;
`;
const LogActivityLink = styled.a`
  line-height: 16px;
  margin: auto 10px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${getColor('blue')};
`;

function ActivityInfo() {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
 
  return (
    <ActivityContainer>
      <TabNav>
        <TabItem onClick={handleClick} active={active === 0} id={0} >Activity</TabItem>
        <TabItem onClick={handleClick} active={active === 1} id={1}>Traking</TabItem>
        <TabItem onClick={handleClick} active={active === 2} id={2}>Reminders</TabItem>
      </TabNav>
      <TabPanel active={active === 0}>
        <ActivityDetailButtons>
          <PersonDropdownBtn typeof="button">
            <BtnTitle>Person</BtnTitle>
            <ChevronSmDownIcon />
          </PersonDropdownBtn>
          <ActivityDpwnBtn>
            <BtnTitle>Activity</BtnTitle>
            <ChevronSmDownIcon />
          </ActivityDpwnBtn>
          <LogActivityLink>
            <PhoneIcon/>
            <BtnTitle>Log a Call</BtnTitle>
          </LogActivityLink>
          <LogActivityLink>
            <PlusIcon/>
            <BtnTitle>Add a Note</BtnTitle>
          </LogActivityLink>
        </ActivityDetailButtons>
        <h2>Upcoming Activities</h2>
        <p></p>
        <h2>Past Activities</h2>
        <div></div>
      </TabPanel>
      <TabPanel active={active === 1} ></TabPanel>
      <TabPanel active={active === 2} ></TabPanel>

    </ActivityContainer>
  );

}

export default ActivityInfo;