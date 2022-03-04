import React, { useEffect, useState } from 'react';
import dateFormat from "dateformat";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as ChevronSmDownIcon } from "../../../_starter/shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "../../../_starter/shared/Icons/Phone";
import { default as PlusIcon } from "../../../_starter/shared/Icons/Plus";
import { default as VoicemailIcon } from "../../../_starter/shared/Icons/Voicemail";
import { default as PaperPlaneIcon } from "../../../_starter/shared/Icons/PaperPlane";
import { default as ReplyIcon } from "../../../_starter/shared/Icons/Reply";
import { default as RocketIcon } from "../../../_starter/shared/Icons/Rocket";
import { default as BadgeIcon } from "../../../_starter/shared/Icons/Badge";
import { default as EyeIcon } from "../../../_starter/shared/Icons/Eye";
import { default as ClickIcon } from "../../../_starter/shared/Icons/Click";
import { pastActivitiesUrl, upcommingActivitiesUrl } from "../../../_starter/shared/API/baseUrls";

const ActivityDetailButtons = styled.div`
  display: flex;
`;

const TabNav = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  box-sizing: border-box;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
`;

const TabItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 3px solid ${(props) => (
    props.active ? `${getColor('blueLight')}` : `${getColor('white')}`
  )};
  background-color: ${getColor('white')};
`;

const TabPanel = styled.div`
    display: ${props => (props.active ? '' : 'none')};
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
const ActivityContainer = styled.div`
  width: 667px;
  height: 1095px;
  margin: 0 0 10px 0px;


  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
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

const ActivityItem = styled.div`
  display: flex;
`;

const OvalWrapper = styled.div`
  width: 32px;
  height: 32px;
  left: 402px;
  top: 349px;

  text-align: center;
  background: #17BBB6;
  mix-blend-mode: normal;
  opacity: 0.1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
`;

const ActivityDetails = styled.div`
    display: flex;
`;

function ActivityInfo() {
  const [active, setActive] = useState(0);
  const [pastActivities, setPastActivities] = useState([]);

  const fetchPastActivities = () => {
    fetch(pastActivitiesUrl
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPastActivities(myJson)
      });
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
        <p>Once actions are scheduled, they'll appear here</p>
        <h3>Past Activities</h3>
        <div className='pastActivities'>
          {pastActivities.data?.map(item =>
            item.type === 'voicemail' ?
              <ActivityItem key={item.id}>
                <OvalWrapper>
                  <VoicemailIcon></VoicemailIcon>
                </OvalWrapper>
                <ActivityDetails>
                  <div>
                    <p>Voicemail Received {dateFormat(item.dynamic_data.voicemail_duration, 'HH:mm:ss')}</p>
                    <p>Gary Glover to {item.dynamic_data.user_name}</p> {/*TODO: replace Gary Glover with Display Name*/}
                  </div>
                  <div className='Date'>
                    <div>{dateFormat(item.created_at, 'mmm dS, yyyy')}</div>
                    <div>{dateFormat(item.created_at, 'HH:mm:ss')}</div>
                  </div>
                </ActivityDetails>
              </ActivityItem>
              : item.type === 'success' ?
                <ActivityItem key={item.id}>
                  <OvalWrapper>
                    <BadgeIcon></BadgeIcon>
                  </OvalWrapper>
                  <ActivityDetails>
                    <div>
                      <p>Marked as Success</p>
                      <p>{item.dynamic_data.user_name}</p>
                    </div>
                    <div className='Date'>
                      <div>{dateFormat(item.created_at, 'mmm dS, yyyy')}</div>
                      <div>{dateFormat(item.created_at, 'HH:mm:ss')}</div>
                    </div>
                  </ActivityDetails>
                </ActivityItem>
                : item.type === 'call' ?
                  <ActivityItem key={item.id}>
                    <OvalWrapper>
                      <PhoneIcon></PhoneIcon>
                    </OvalWrapper>
                    <ActivityDetails>
                      <div>
                        <p>{item.static_data.sentiment}</p>
                        <p>
                          <label>{item.dynamic_data.user_name} with {item.dynamic_data.phone_number}</label>
                        </p>
                      </div>
                      <div className='Date'>
                        <div>{dateFormat(item.created_at, 'mmm dS, yyyy')}</div>
                        <div>{dateFormat(item.created_at, 'HH:mm:ss')}</div>
                      </div>
                    </ActivityDetails>
                  </ActivityItem>
                  : item.type === 'sent_email' ?
                    <ActivityItem key={item.id}>
                      <OvalWrapper>
                        <PaperPlaneIcon></PaperPlaneIcon>
                      </OvalWrapper>
                      <ActivityDetails>
                        <div>
                          <label>{item.static_data.subject}</label>
                          <p>
                            <label>{item.dynamic_data.user_name} | </label>
                            <EyeIcon></EyeIcon>
                            <label>{item.dynamic_data.counts.views}</label>
                            <ClickIcon></ClickIcon>
                            <label>{item.dynamic_data.counts.clicks}</label>
                            <ReplyIcon></ReplyIcon>
                            <label>{item.dynamic_data.counts.replies}</label>
                          </p>
                        </div>
                        <div className='Date'>
                          <div>{dateFormat(item.created_at, 'mmm dS, yyyy')}</div>
                          <div>{dateFormat(item.created_at, 'HH:mm:ss')}</div>
                        </div>
                      </ActivityDetails>
                    </ActivityItem>
                    : item.type === 'email_reply' ?
                      <ActivityItem key={item.id}>
                        <OvalWrapper>
                          <ReplyIcon></ReplyIcon>
                        </OvalWrapper>
                        <ActivityDetails>
                          <div>
                            <p>
                              <label>RE: {item.static_data.in_reply_to_subject} </label>
                              <label>{item.static_data.body}</label>
                            </p>
                            <p>
                              <label>{item.dynamic_data.user_name} | </label>
                              <EyeIcon></EyeIcon>
                              <label>{item.dynamic_data.counts.views}</label>
                              <ClickIcon></ClickIcon>
                              <label>{item.dynamic_data.counts.clicks}</label>
                              <ReplyIcon></ReplyIcon>
                              <label>{item.dynamic_data.counts.replies}</label>
                            </p>
                          </div>
                          <div className='Date'>
                          <div>{dateFormat(item.created_at, 'mmm dS, yyyy')}</div>
                          <div>{dateFormat(item.created_at, 'HH:mm:ss')}</div>
                          </div>
                        </ActivityDetails>
                      </ActivityItem>
                      :
                      <ActivityItem key={item.id}>
                        <OvalWrapper>
                          <RocketIcon></RocketIcon>
                        </OvalWrapper>
                        <ActivityDetails>
                          <div>
                            <p>Added to Cadence <label>{item.dynamic_data.cadence_name}</label></p>
                            <p></p>
                          </div>
                          <div className='Date'>
                          <div>{dateFormat(item.created_at, 'mmm dS, yyyy')}</div>
                          <div>{dateFormat(item.created_at, 'HH:mm:ss')}</div>
                          </div>
                        </ActivityDetails>
                      </ActivityItem>
          )}
        </div>
        <div>

        </div>
      </TabPanel>
      <TabPanel active={active === 1} ></TabPanel>
      <TabPanel active={active === 2} ></TabPanel>

    </ActivityContainer>
  );

}

export default ActivityInfo;