import React from 'react';
import ItemDate from "./ItemDate";
import ItemIcon from "./ItemIcon";
import ItemDescription from "./ItemDescription";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const ActivityDetails = styled.div`
  display: flex;
  width: 100%;
  height: 66px;

  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  border-radius: 2px;
  justify-content: space-between;
`;
const ActivityItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

function PastActivities({ id, type, creation_date, dynamic_data, static_data }) {
  return (
    <ActivityItem key={id}>
      <ItemIcon type={type} />
      <ActivityDetails >
        <ItemDescription
          type={type}
          dynamic_data={dynamic_data}
          static_data={static_data}
        />
        <ItemDate date={creation_date} />
      </ActivityDetails>
    </ActivityItem>
  );
}

export default PastActivities;