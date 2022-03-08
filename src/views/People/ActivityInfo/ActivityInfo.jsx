import React, { useEffect, useState } from 'react';
import Activity from "./Activity/Activity";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import {PeopleAPI} from "../../../_starter/shared/API/PeopleAPI";
import Traking from './Traking/Traking';
import Reminders from './Reminders/Reminders';

const TabNav = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  box-sizing: border-box;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
`;
const TabItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 3px solid ${(props) => (
    props.active ? `${getColor('blueLight')}` : `${getColor('white')}`
  )};
  font-weight: ${(props) => (
    props.active ? '600' : 'normal'
  )};
  background-color: ${getColor('white')};
`;
const TabPanel = styled.div`
    display: ${props => (props.active ? '' : 'none')};
`;
const ActivityContainer = styled.div`
  width: 55%;
  height: 1095px;
  margin: 0 0 10px 0px;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;

function ActivityInfo() {
  const [active, setActive] = useState(0);
  const [pastActivities, setPastActivities] = useState([]);
  const peopleAPI = PeopleAPI();

  const fetchPastActivities = async () => {
    peopleAPI.getPastActivities().then(activities => setPastActivities(activities));
  }

  useEffect(() => {
    fetchPastActivities();
  }, [])

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
        <Activity
          pastActivities={pastActivities}
        />
      </TabPanel>
      <TabPanel active={active === 1} >
        <Traking></Traking>
      </TabPanel>
      <TabPanel active={active === 2} >
        <Reminders></Reminders>
      </TabPanel>
    </ActivityContainer>
  );

}

export default ActivityInfo;