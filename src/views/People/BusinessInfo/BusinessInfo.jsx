import React, { useEffect, useState } from 'react';
import SummaryBusiness from "./Summary/SummaryBusiness"
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";
import { PeopleAPI } from "../../../_starter/shared/API/PeopleAPI";

const BussinessCard = styled.div`
  height: 166px;
  background: ${getColor('white')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  border-radius: 0px;
  margin: 0 0 10px 0;
`;
const MdBussinesCard = styled.div`
  height: 238px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const SmBussinesCard = styled.div`
  height: 144px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
const LgBussinesCard = styled.div`
  height: 517px;
  background: ${getColor('bgGrey')};
  border: 1px solid ${getColor('greyLightest')};
  box-sizing: border-box;
`;
const BusinessContainer = styled.div`
  height: 100%;
  width: 20%;
  margin: 0 10px 10px 10px;
`;

function BusinessInfo() {
  const [businessInfo, setBusinessInfo] = useState([]);
  const peopleAPI = PeopleAPI();

  const fetchPeopleData = async () => {
    peopleAPI.getPeopleData().then(activities => setBusinessInfo(activities));
  }

  useEffect(() => {
    fetchPeopleData();
  }, [])

  return (
    <BusinessContainer>
      <BussinessCard>
        <SummaryBusiness businessInfo={businessInfo}/>
      </BussinessCard>
      <MdBussinesCard></MdBussinesCard>
      <SmBussinesCard></SmBussinesCard>
      <LgBussinesCard></LgBussinesCard>
    </BusinessContainer>
  );

}

export default BusinessInfo;