import styled from 'styled-components';
import Map from '../components/Map';

const Header = styled.h1`
  font-size: 5em;
  text-align: center;
  font-weight: 800;
`;

const Home = () => (
  <div>
    <Header>🌎 Conference Radar</Header>
    <Map />
  </div>
);

export default Home;
