import React from 'react';
import PastActivities from "./PastActivities";
import ActivityDetailHeader from "./ActivityDetailHeader";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";


const ActivitiesList = styled.ul`
  list-style-type: none;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
`;
const Title = styled.p`
  width: fit-content;
  height: 18px;
  margin-bottom: 14px;
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: ${getColor('greyDark')};
`;
const Message = styled.p`
  width: 100%;
  text-align: center;
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${getColor('greyDark')};
`;

function Activity({ pastActivities }) {
  return (
    <>
      <ActivityDetailHeader />
      <ActivitiesList>
        <Title>Upcoming Activities</Title>
        <Message>Once actions are scheduled, they'll appear here</Message>{/*TODO: Add condition for calling upcomming act*/}
      </ActivitiesList>
      <ActivitiesList>
        <Title>Past Activities</Title>
        {pastActivities.data?.map(item =>
          <PastActivities
            key={item.id}
            type={item.type}
            creation_date={item.created_at}
            dynamic_data={item.dynamic_data}
            static_data={item.static_data}
          />
        )}
      </ActivitiesList>
    </>
  );
}
export default Activity;
