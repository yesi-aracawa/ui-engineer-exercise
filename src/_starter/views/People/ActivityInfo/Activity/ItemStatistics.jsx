import React from 'react';
import { default as EyeIcon } from "../../../../shared/Icons/Eye";
import { default as ClickIcon } from "../../../../shared/Icons/Click";
import { default as ReplyIcon } from "../../../../shared/Icons/Reply";
import styled from "styled-components";
import { getColor } from "../../../../theme/theme";

const IconWrapper = styled.label`
  width: 15px;
  height:12px;
  margin: 5px;
  width: fit-content;
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
`;

function ItemStatistics({ dynamic_data }) {
  return (
    <label>
      <label>{dynamic_data.user_name} | </label>
      <IconWrapper>
        <EyeIcon></EyeIcon>
        <label>{dynamic_data.counts.views}</label>
      </IconWrapper>
      <IconWrapper>
        <ClickIcon></ClickIcon>
        <label>{dynamic_data.counts.clicks}</label>
      </IconWrapper>
      <IconWrapper>
        <ReplyIcon></ReplyIcon>
        <label>{dynamic_data.counts.replies}</label>
      </IconWrapper>
    </label>
  );
}
export default ItemStatistics;