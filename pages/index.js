import styled from 'styled-components';
import { useState } from 'react';
import conferenceData from '../utils/conferenceData';
import Map from '../components/Map';
import Conferences from '../components/Conferences';

const Header = styled.h1`
  font-size: 5em;
  text-align: center;
  font-weight: 800;
  color: ${props => props.theme.primary};
`;

const Home = () => {
  const [conferenceList, setConferenceList] = useState(conferenceData);

  return (
    <div>
      <Header>🌎 Conference Radar</Header>
      <Map conferenceList={conferenceList} />
      <Conferences conferenceList={conferenceList} />
    </div>
  )
};

export default Home;
