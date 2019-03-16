import React, { Component } from 'react'
import styled from 'styled-components'
import Conference from './Conference'
import { mapCountryToFlag } from '../utils/conferenceData'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5em;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0px !important;
  padding: 0px !important;
`;

const ConferenceWrapper = styled.div`
  margin: 2em;
  box-shadow: 0 1px 3px 0px hsla(0, 0%, 0%, .2);
  justify-self: center;

@media (max-width: 768px) {
  max-width: 300px;
}
`;

const Content = styled.div`
  padding: 0em 2em 1em;
`;

const Headline = styled.h2`
  color: #1F2933;
  font-size: 1.8em;
  /* font-size: 1em; */
`;

const _Conference = ({ conference }) => {
  const { name, location, country, price, currency, technologies, start_date, end_date } = conference;
  const curr = currency;
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
      <Image src="static/images/Frontcon2019.jpeg"></Image>
      <Content>
        <Headline>{name}</Headline>
        <p>{location} {mapCountryToFlag(country)}</p>
        <p>{start_date} - {end_date}</p>
        <p>~ {new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(price)}</p>
        {/* <p>Berlin, 🇩🇪</p> */}
      </Content>
    </ConferenceWrapper>
  )
}

const Conferences = ({ conferenceList }) => {
  return (
    <Wrapper>
      {conferenceList.map(conf => (
        <_Conference conference={conf} />
      ))}
    </Wrapper>
  )
}

export default Conferences
