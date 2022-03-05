import React from 'react';
import ItemDate, { ItemTime } from "./ItemDate";
import ItemStatistics from "./ItemStatistics";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as PhoneIcon } from "../../../_starter/shared/Icons/Phone";
import { default as VoicemailIcon } from "../../../_starter/shared/Icons/Voicemail";
import { default as PaperPlaneIcon } from "../../../_starter/shared/Icons/PaperPlane";
import { default as ReplyIcon } from "../../../_starter/shared/Icons/Reply";
import { default as RocketIcon } from "../../../_starter/shared/Icons/Rocket";
import { default as BadgeIcon } from "../../../_starter/shared/Icons/Badge";

const ActivityItem = styled.div`
  display: flex;
`;

const OvalWrapper = styled.div`
  width: 32px;
  height: 32px;

  text-align: center;
  background: ${getColor('teal')};
  mix-blend-mode: normal;
  opacity: 0.1;
  border-radius: 50%;
  border: 2px solid ${getColor('white')};
`;

const ActivityDetails = styled.div`
    display: flex;
`;

function PastActivities({ id, type, creation_date, dynamic_data, static_data }) {
  return (
    type === 'voicemail' ?
      <ActivityItem key={id}>
        <OvalWrapper>
          <VoicemailIcon></VoicemailIcon>
        </OvalWrapper>
        <ActivityDetails>
          <div>
            <p>
              <label>Voicemail Received {ItemTime(dynamic_data.voicemail_duration)}</label>
              <br />
              <label>Gary Glover to {dynamic_data.user_name}</label>{/*TODO: replace Gary Glover with Display Name*/}
            </p>
          </div>
          <ItemDate date={creation_date} />
        </ActivityDetails>
      </ActivityItem>
      : type === 'success' ?
        <ActivityItem key={id}>
          <OvalWrapper>
            <BadgeIcon></BadgeIcon>
          </OvalWrapper>
          <ActivityDetails>
            <p>
              <label>Marked as Success</label>
              <br />
              <label>{dynamic_data.user_name}</label>
            </p>
            <ItemDate date={creation_date} />
          </ActivityDetails>
        </ActivityItem>
        : type === 'call' ?
          <ActivityItem key={id}>
            <OvalWrapper>
              <PhoneIcon></PhoneIcon>
            </OvalWrapper>
            <ActivityDetails>
              <div>
                <p>
                  <label>{static_data.sentiment}</label>
                  <br />
                  <label>{dynamic_data.user_name} with {dynamic_data.phone_number}</label>
                </p>
              </div>
              <ItemDate date={creation_date} />
            </ActivityDetails>
          </ActivityItem>
          : type === 'sent_email' ?
            <ActivityItem key={id}>
              <OvalWrapper>
                <PaperPlaneIcon></PaperPlaneIcon>
              </OvalWrapper>
              <ActivityDetails>
                <div>
                  <label>{static_data.subject}</label>
                  <ItemStatistics dynamic_data={dynamic_data} />
                </div>
                <ItemDate date={creation_date} />
              </ActivityDetails>
            </ActivityItem>
            : type === 'email_reply' ?
              <ActivityItem key={id}>
                <OvalWrapper>
                  <ReplyIcon></ReplyIcon>
                </OvalWrapper>
                <ActivityDetails>
                  <div>
                    <p>
                      <label>RE: {static_data.in_reply_to_subject} </label>
                      <label>{static_data.body}</label>
                    </p>
                    <ItemDate date={creation_date} />
                  </div>
                  <ItemDate date={creation_date} />
                </ActivityDetails>
              </ActivityItem>
              :
              <ActivityItem key={id}>
                <OvalWrapper>
                  <RocketIcon></RocketIcon>
                </OvalWrapper>
                <ActivityDetails>
                  <div>
                    <p>
                      <label>Added to Cadence <label>{dynamic_data.cadence_name}</label></label>
                      <br />
                      <label>Added by {dynamic_data.user_name} | Assigned to {static_data.instigator.action_caller_name}</label>
                    </p>
                  </div>
                  <ItemDate date={creation_date} />
                </ActivityDetails>
              </ActivityItem>

  );
}

export default PastActivities;