import React from 'react';
import { ItemTime } from "./ItemDate";
import ItemStatistics from "./ItemStatistics";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const Description = styled.p`
  display: grid;
  text-align: start;
  margin: 10px;
`;
const TileLabel = styled.label`
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: ${getColor('greyDark')};
`;
const TileLabelHighlight = styled.label`
  color: ${getColor('blueDark')};
`;
const DinamicData = styled.label`
  font-family: "proxima-nova";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: ${getColor('grey')};
`;

function ItemDescription({ type, dynamic_data, static_data }) {
  switch (type) {
    case 'voicemail':
      return (
        <Description>
          <TileLabel>Voicemail Received {ItemTime(dynamic_data.voicemail_duration)}</TileLabel>
          <DinamicData>Gary Glover to {dynamic_data.user_name}</DinamicData>{/*TODO: replace Gary Glover with Display Name*/}
        </Description>
      );
    case 'success':
      return (
        <Description>
          <TileLabel>Marked as Success</TileLabel>
          <DinamicData>{dynamic_data.user_name}</DinamicData>
        </Description>
      );
    case 'call':
      return (
        <Description>
          <TileLabel>{static_data.sentiment}</TileLabel>
          <DinamicData>{dynamic_data.user_name} with {dynamic_data.phone_number}</DinamicData>
        </Description>
      );
    case 'sent_email':
      return (
        <Description>
          <TileLabel>
            <TileLabelHighlight>{static_data.subject}</TileLabelHighlight>
          </TileLabel>
          <DinamicData>
            <ItemStatistics dynamic_data={dynamic_data} />
          </DinamicData>
        </Description>
      );
    case 'email_reply':
      return (
        <Description>
          <TileLabel>
            <TileLabelHighlight>
              RE: {static_data.in_reply_to_subject}
            </TileLabelHighlight>
            {static_data.body}
          </TileLabel>
          <DinamicData>
            <ItemStatistics dynamic_data={dynamic_data} />
          </DinamicData>
        </Description>
      );
    default:
      return (
        <Description>
          <TileLabel>Added to Cadence <TileLabelHighlight>{dynamic_data.cadence_name}</TileLabelHighlight></TileLabel>
          <DinamicData>Added by {dynamic_data.user_name} | Assigned to {static_data.instigator.action_caller_name}</DinamicData>
        </Description>
      );
  }
}

export default ItemDescription;