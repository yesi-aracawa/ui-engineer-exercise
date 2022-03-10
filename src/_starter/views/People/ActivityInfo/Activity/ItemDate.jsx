import React from 'react';
import dateFormat from "dateformat";
import styled from "styled-components";
import { getColor } from "../../../../theme/theme";

const DateContainer = styled.p`
  display: block;
  margin: 10px;
  text-align: end;
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
`;

function ItemDate ({date}) {
    return (
        <DateContainer>
          <label>{dateFormat(date, 'mmm dS, yyyy')}</label>
          <br/>
          <label>{dateFormat(date, 'HH:mm:ss')}</label>
        </DateContainer>
      );
}
export const ItemTime = (time) => dateFormat(time, 'HH:mm:ss');
export default ItemDate;
