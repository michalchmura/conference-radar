import React, { Component } from 'react'
import styled from 'styled-components';
import Tag from './Tag'
import { mapCountryToFlag, mapTechnologyToComponent, formatDateRange } from '../utils/conferenceData'
import { MapMarkerAlt } from 'styled-icons/fa-solid/MapMarkerAlt';
import { Calendar } from 'styled-icons/octicons/Calendar';
import { MoneyBillWave } from 'styled-icons/fa-solid/MoneyBillWave';

const Image = styled.img`
  min-height: 150px;
  max-height: 150px;
  width: 100%;
  object-fit: cover;
`;

const ConferenceWrapper = styled.div`
  position: relative;
  margin: 2em;
  box-shadow: 0 1px 3px 0px hsla(0, 0%, 0%, .2);
  justify-self: center;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Content = styled.div`
  padding: 0px 20px 10px;
  color: #616E7C;
  font-size: 1rem;
  line-height: 1.2;
`;

const Headline = styled.h2`
  color: #1F2933;
  font-size: 2.2em;
  letter-spacing: 0.6px;
`;

const Price = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 3em;
  padding-right: 10px;
  font-weight: bold;
  color: #52606D;
`;

const Icon = styled.span`
  padding-right: 5px;
  color: "#F5F7FA" !important;
`;
const Conference = ({ conference }) => {
  const { name, location, country, price, currency, technologies, start_date, end_date, picture } = conference;
  // "location": "Wroclaw",
  // "country": "Poland",
  // "price": "299.00",
  // "currency": "EUR",
  // "technologies": [
  // 	"React",
  // 	"JavaScript",
  // 	"Web Development",
  // 	"GraphQL"
  // ],
  // "start_date": "2019-09-5",
  // "end_date": "2019-09-6",
  return (
    <ConferenceWrapper>
      <Image src={picture}></Image>
      <Content>
        <Headline>{mapCountryToFlag(country)} {name}</Headline>
        <p><Icon><Calendar size="17" color="#9AA5B1" style={{ marginTop: '-4px' }} /></Icon> {formatDateRange(start_date, end_date)}</p>
        <p><Icon><MapMarkerAlt size="16" /></Icon> {location}</p>
        <div>{technologies.map((tech) => mapTechnologyToComponent(tech)
        )}</div>
      </Content>
      <Price>~{new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(price)}
      </Price>
    </ConferenceWrapper>
  )
}

export default Conference
