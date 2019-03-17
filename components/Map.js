import React, { Component, useState, useEffect, useRef } from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';
import { geoPath } from "d3-geo"
import { geoTimes } from "d3-geo-projection"


import { conferenceMarkers } from '../utils/conferenceData';
const centroids = require('../static/centroids.json');

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

  const prevCenterRef = useRef();

  useEffect(() => {
    prevCenterRef.current = center;
  });
  const prevCenter = prevCenterRef.current;

  const handleReset = () => {
    setZoom(1)
  }

  const handleCitySelection = (geography) => {
    const name = geography.properties.name
    const country = centroids.filter(item => item.name === name)
    const centroid = [country[0].long, country[0].lat]
    setCenter(centroid)

  }

  useEffect(() => {
    if (prevCenter ? prevCenter.every(e => center.includes(e)) : undefined) {
      if (zoom === 3) {
        handleReset()
      } else {
        setZoom(3);
      }
    }
  }, [center])

  return (
    <>
      <div style={wrapperStyles}>
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
                      onClick={handleCitySelection.bind(this)}
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
                <Marker key={i} marker={marker}
                  style={{
                    default: { fill: "#e8368f" },
                    hover: { fill: "#A20664" },
                    pressed: { fill: "#870457" },
                  }}>
                  <circle cx={0} cy={0} r={5} />
                  {zoom > 1 ? <text
                    x={10}
                    y={3}
                  >
                    {marker.name}
                  </text> : null}
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
