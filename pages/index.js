import styled from 'styled-components';
import Map from '../components/Map';
import Conference from '../components/Conference';
import useLoadConferenceData from '../hooks/loadConferenceData';

const Header = styled.h1`
  font-size: 5em;
  text-align: center;
  font-weight: 800;
  color: ${props => props.theme.primary};
`;

const Home = () => {
  const { conferenceList } = useLoadConferenceData();

  return (
    <div>
      <Header>🌎 Conference Radar</Header>
      <Map />
      <Conference />
    </div>
  )
};

export default Home;
