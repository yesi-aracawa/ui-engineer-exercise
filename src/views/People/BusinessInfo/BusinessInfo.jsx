import React, { useEffect, useState }  from 'react';
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { default as CloudIcon } from "../../../_starter/shared/Icons/Cloud";
import { default as LinkedInIcon } from "../../../_starter/shared/Icons/LinkedIn";
import { default as TwitterIcon } from "../../../_starter/shared/Icons/Twitter";
import { default as LinkIcon } from "../../../_starter/shared/Icons/Link";
import { default as StarOutlinedIcon } from "../../../_starter/shared/Icons/StarOutlined";
import { default as EllipsisHorizontalIcon } from "../../../_starter/shared/Icons/EllipsisHorizontal";
//import { fetchPeopleData } from "../../../_starter/shared/API/Actions";
import {peopleUrl} from "../../../_starter/shared/API/baseUrls";



const BussinessCard = styled.div`
  height: 166px;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  border-radius: 0px;
  margin: 0 0 10px 0;
`;
const MdBussinesCard =  styled.div `
  height: 238px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const SmBussinesCard =  styled.div `
  height: 144px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const LgBussinesCard =  styled.div `
  height: 517px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
const BussinessCardHeader = styled.div`
  height: 32px;
  border-radius: 0px;
  border: 1px solid #E5E5E5;
`;
const BusinessCardBody = styled.div`
  height: 134px;
  border-radius: 0px;
  text-align: center;
  border-top: 0;
  border: 1px solid #E5E5E5;
`;
const SocialIcons = styled.div `
  display: flex;
  height: 24px;
  justify-content: center;
  .CloudIcon: {
    background: ${getColor('blueLight')};
  }
`;
const BusinessContainer = styled.div`
  height: 100%;
  width: 300px;
  margin: 0 10px 10px 10px;
`;

function BusinessInfo() {
  const [businessInfo,setBusinessInfo]=useState([]);
  const fetchPeopleData=()=>{
    fetch(peopleUrl
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setBusinessInfo(myJson)
      });
  }
  useEffect(()=>{
    fetchPeopleData();
  },[])

  return (
    
    <BusinessContainer>
      <BussinessCard>
        <BussinessCardHeader>
          <StarOutlinedIcon></StarOutlinedIcon>
          <EllipsisHorizontalIcon></EllipsisHorizontalIcon>
        </BussinessCardHeader>
        <BusinessCardBody>
          <div>
            <label>{businessInfo.display_name}</label>
            <p>{businessInfo.title}</p>
            <a href={`https://www.facebook.com/${businessInfo.person_company_name}`}>Facebook</a>
          </div>
          <SocialIcons>
            <a><CloudIcon></CloudIcon></a>
            <a href={businessInfo.linkedin_url} target='_blank' rel='noreferrer'>
              <LinkedInIcon></LinkedInIcon>
            </a>
            <a href={`https://twitter.com/${businessInfo.twitter_handle}`} target='_blank' rel='noreferrer'>
              <TwitterIcon></TwitterIcon>
            </a>
            <a href={businessInfo.personal_website} target='_blank' rel='noreferrer'>
              <LinkIcon></LinkIcon>
            </a>
          </SocialIcons>
        </BusinessCardBody>
      </BussinessCard>
      <MdBussinesCard></MdBussinesCard>
      <SmBussinesCard></SmBussinesCard>
      <LgBussinesCard></LgBussinesCard>
    </BusinessContainer>
  );

}

export default BusinessInfo;