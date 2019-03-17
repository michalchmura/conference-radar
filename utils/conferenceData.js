import format from 'date-fns/format'
import styled from 'styled-components';
import Tag from '../components/Tag';
// import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import { ReactLogo } from 'styled-icons/boxicons-logos/ReactLogo';
import { Javascript } from 'styled-icons/boxicons-logos/Javascript';
import { Vuejs } from 'styled-icons/boxicons-logos/Vuejs';
import { Computer } from 'styled-icons/material/Computer';
import { PaintBrush } from 'styled-icons/fa-solid/PaintBrush';
import GraphQL from '../static/logos/GraphQL.svg'

const conferenceData = [
  require('../static/AppJsConf2019.json'),
  require('../static/Frontcon2019.json'),
  require('../static/FrontendConferenceZurich2019.json'),
  require('../static/FrontendNETheConference2019.json'),
  require('../static/InternationalJavaScriptConference2019.json'),
  require('../static/JSCampBarcelona2019.json'),
  require('../static/JSConfBudapest2019.json'),
  require('../static/JSConfEU2019.json'),
  require('../static/NordicJs2019.json'),
  require('../static/OdessaJS2019.json'),
  require('../static/ReactAmsterdam2019.json'),
  require('../static/ReactEurope2019.json'),
  require('../static/ReactNativeEU2019.json'),
  require('../static/SmashingConfFreiburg2019.json'),
];

export const conferenceMarkers = conferenceData.map(conference => {
  const { name, latitude, longitude } = conference;

  return {
    name,
    coordinates: [longitude, latitude]
  }
})

export const mapCountryToFlag = (country) => {
  switch (country) {
    case 'Poland':
      return '🇵🇱';
      break;
    case 'Germany':
      return '🇩🇪';
      break;
    case 'Ukraine':
      return '🇺🇦';
      break;
    case 'Switzerland':
      return '🇨🇭';
      break;
    case 'Spain':
      return '🇪🇸';
      break;
    case 'Netherlands':
      return '🇳🇱';
      break;
    case 'France':
      return '🇫🇷';
      break;
    case 'Latvia':
      return '🇱🇻';
      break;
    case 'UK':
      return '🇬🇧';
      break;
    default:
      return '🇪🇺';
      break;
  }
}

export const mapTechnologyToComponent = (tech) => {
  const technology = tech.toLowerCase();
  switch (technology) {
    case 'react':
      return <ReactLogo size="24" title="React" style={{ marginRight: '5px' }} />
      break;
    case 'javascript':
      return <Javascript size="30" title="Javascript" style={{ marginRight: '5px' }} />
      break;
    case 'vue':
    case 'vuex':
      return <Vuejs size="30" title="Javascript" style={{ marginRight: '5px' }} />
      break;
    case 'web development':
      return <Computer size="30" title="Web Development" style={{ marginRight: '5px' }} />
      break;
    case 'front-end':
      return <Tag>Frontend</Tag>
      break;
    case 'ux':
    case 'design':
      return <PaintBrush size="15" title="UI / UX" style={{ marginRight: '5px' }} />
      break;
    case 'graphql':
      return <img src={GraphQL} />
      break;
    default:
      return <Tag key={tech}>{tech}</Tag>
      break;
  }
}

export const formatDateRange = (start_date, end_date) => {
  const [startYear, startMonth, startDay] = start_date.split('-');
  const [endYear, endMonth, endDay] = end_date.split('-');

  const year = startYear === endYear ? startYear : `${startYear} - ${endYear}`;
  const month = startMonth === endMonth ? startMonth : `${startMonth} - ${endMonth}`;
  const day = startDay === endDay ? startDay : `${parseInt(startDay, 10)}-${parseInt(endDay, 10)}`;

  return `${day} ${format(new Date(year, month, 0), 'MMMM YYYY')}`
}

export const formatDate = (date) => {
  const [year, month, day] = date.split('-');

  return format(new Date(year, month, day), 'DD MMMM YYYY')
}

export default conferenceData
