import React from 'react';
import { ItemTime } from "./ItemDate";
import ItemStatistics from "./ItemStatistics";
import styled from "styled-components";

const Description = styled.p`
    display: block;
    text-align: start;
    margin: 10px;
`;

function ItemDescription({ type, dynamic_data, static_data }) {
  switch (type) {
    case 'voicemail':
      return (
        <Description>
          <label>Voicemail Received {ItemTime(dynamic_data.voicemail_duration)}</label>
          <br />
          <label>Gary Glover to {dynamic_data.user_name}</label>{/*TODO: replace Gary Glover with Display Name*/}
        </Description>
      );
    case 'success':
      return (
        <Description>
          <label>Marked as Success</label>
          <br />
          <label>{dynamic_data.user_name}</label>
        </Description>
      );
    case 'call':
      return (
        <Description>
          <label>{static_data.sentiment}</label>
          <br />
          <label>{dynamic_data.user_name} with {dynamic_data.phone_number}</label>
        </Description>
      );
    case 'sent_email':
      return (
        <Description>
          <label>{static_data.subject}</label>
          <br />
          <ItemStatistics dynamic_data={dynamic_data} />
        </Description>
      );
    case 'email_reply':
      return (
        <Description>
          <label>RE: {static_data.in_reply_to_subject} </label>
          <label>{static_data.body}</label>
          <br />
          <ItemStatistics dynamic_data={dynamic_data} />
        </Description>
      );
    default:
      return (
        <Description>
          <label>Added to Cadence <label>{dynamic_data.cadence_name}</label></label>
          <br />
          <label>Added by {dynamic_data.user_name} | Assigned to {static_data.instigator.action_caller_name}</label>
        </Description>
      );
  }
}

export default ItemDescription;