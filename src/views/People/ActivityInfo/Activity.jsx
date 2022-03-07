import React from 'react';
import PastActivities from "./PastActivities";
import ActivityDetailHeader from "./ActivityDetailHeader";
import styled from "styled-components";

const PastActivitiesContainer = styled.ul`
  list-style-type: none;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
`;

function Activity({ pastActivities }) {
  console.log(pastActivities)
  return (
    <>
      <ActivityDetailHeader/>
      <h3>Upcoming Activities</h3>
      <p>Once actions are scheduled, they'll appear here</p>{/*TODO: Add condition for calling upcomming act*/}
      <h3>Past Activities</h3>
      <PastActivitiesContainer className='pastActivities'>
        {pastActivities.data?.map(item =>
          <PastActivities
            key={item.id}
            type={item.type}
            creation_date={item.created_at}
            dynamic_data={item.dynamic_data}
            static_data={item.static_data}
          />
        )}
      </PastActivitiesContainer>
    </>
  );
}
export default Activity;
