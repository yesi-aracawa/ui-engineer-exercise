import React, { useEffect, useState } from 'react';
import { default as ChevronSmDownIcon } from "../../../_starter/shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "../../../_starter/shared/Icons/Phone";
import { default as PlusIcon } from "../../../_starter/shared/Icons/Plus";
import PastActivities from "./PastActivities";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const ActivityDetailButtons = styled.div`
  display: flex;
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

function Activity({pastActivities}) {
  console.log(pastActivities)
  return (
      <>
      <ActivityDetailButtons>
          <PersonDropdownBtn typeof="button">
            <BtnTitle>Person</BtnTitle>
            <ChevronSmDownIcon />
          </PersonDropdownBtn>
          <ActivityDpwnBtn>
            <BtnTitle>Activity</BtnTitle>
            <ChevronSmDownIcon />
          </ActivityDpwnBtn>
          <LogActivityLink role='button'>
            <PhoneIcon />
            <BtnTitle>Log a Call</BtnTitle>
          </LogActivityLink>
          <LogActivityLink role='button'>
            <PlusIcon />
            <BtnTitle>Add a Note</BtnTitle>
          </LogActivityLink>
        </ActivityDetailButtons>
        <h3>Upcoming Activities</h3>
          <p>Once actions are scheduled, they'll appear here</p>{/*TODO: Add condition for calling upcomming act*/}
        <h3>Past Activities</h3>
        <div className='pastActivities'>
          {pastActivities.data?.map(item =>
            <PastActivities
              key={item.id}
              type={item.type}
              creation_date={item.created_at}
              dynamic_data={item.dynamic_data}
              static_data={item.static_data}
            />
          )}
        </div>
      </>
  );
}
export default Activity;
