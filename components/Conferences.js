import React, { Component } from 'react'
import styled from 'styled-components'
import Conference from './Conference'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;

const Conferences = ({ conferenceList }) => {
  return (
    <Wrapper>
      {conferenceList.map((conf, i) => (
        <Conference conference={conf} key={i} />
      ))}
    </Wrapper>
  )
}

export default Conferences
