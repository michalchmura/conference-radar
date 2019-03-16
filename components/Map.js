import React, { Component, useState } from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';

import { conferenceMarkers } from '../utils/conferenceData';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const include = [
  "AUT", "BEL", "BGR", "HRV", "CYP", "CZE", "DNK", "EST", "FIN", "FRA", "DEU", "GRC", "HUN",
  "IRL", "ITA", "LVA", "LTU", "LUX", "MLT", "NLD", "POL", "PRT", "ROU", "SVK", "SVN", "ESP",
  "SWE", "GBR", "CHE", "TUR", "UKR", "BLR", "MDA", "NOR", "RUS"
]

const Map = ({ conferenceList }) => {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([13.404954, 52.520008])

  const handleCitySelection = (coordinates) => {
    setZoom(3)
    setCenter(coordinates)
  }

  const handleReset = () => {
    setZoom(1)
    setCenter([13.404954, 52.520008])
  }

  const handleClick = (e) => {
    console.log(e.geometry.coordinates[0][0][0])
  }

  return (
    <>
      <div style={wrapperStyles}>
        <button onClick={handleReset}>
          Reset
        </button>
        <ComposableMap
          projectionConfig={{
            scale: 605,
          }}
          style={{
            width: '100%',
            height: '80vh',
          }}
        >
          <ZoomableGroup center={center} zoom={zoom}>
            <Geographies geography="/static/world-50m.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.id) !== -1 && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      onClick={(e) => handleCitySelection(e.geometry.coordinates[0][0][0])}
                      style={{
                        default: {
                          fill: '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.3,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#ffe3ec',
                          stroke: '#7B8794',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#FFB8D2',
                          stroke: '#7B8794',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  )
                )
              }
            </Geographies>
            <Markers>
              {conferenceMarkers.map((marker, i) => (
                <Marker key={i} marker={marker} onClick={() => handleCitySelection(marker.coordinates)}
                  style={{
                    default: { fill: "#e8368f" },
                    hover: { fill: "#A20664" },
                    pressed: { fill: "#870457" },
                  }}>
                  <circle cx={0} cy={0} r={5} />
                  {/* <text
                    x={10}
                    y={3}
                  >
                    {marker.name}
                  </text> */}
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  )
}

export default Map;
