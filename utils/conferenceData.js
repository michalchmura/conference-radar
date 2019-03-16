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

export default conferenceData
