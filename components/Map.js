import React, { Component } from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';

const include = [
  "AUT", "BEL", "BGR", "HRV", "CYP", "CZE", "DNK", "EST", "FIN", "FRA", "DEU", "GRC", "HUN",
  "IRL", "ITA", "LVA", "LTU", "LUX", "MLT", "NLD", "POL", "PRT", "ROU", "SVK", "SVN", "ESP",
  "SWE", "GBR", "CHE", "TUR", "UKR", "BLR", "MDA", "NOR", "RUS"
]

const markers = [
  { name: "Isak BBQ Party", coordinates: [13.404954, 52.520008] },
  { name: "Dumlpling Fiesta", coordinates: [15.404954, 50.520008] },
]



class Map extends Component {
  render() {
    return (
      <>
        <div>
          <ComposableMap
            projectionConfig={{
              xOffset: -100,
              yOffset: 200,
              scale: 700,
            }}
            style={{
              width: '100%',
              height: '80vh',
            }}
          >
            <ZoomableGroup center={[0, 20]} disablePanning>
              <Geographies geography="/static/world-50m.json">
                {(geographies, projection) =>
                  geographies.map((geography, i) =>
                    include.indexOf(geography.id) !== -1 && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
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
                {markers.map((marker, i) => (
                  <Marker key={i} marker={marker}
                    style={{
                      default: { fill: "#e8368f" },
                      hover: { fill: "#A20664" },
                      pressed: { fill: "#870457" },
                    }}>
                    <circle cx={0} cy={0} r={5} />
                    <text
                      x={20}
                      y={1}
                    >
                      {marker.name}
                    </text>
                  </Marker>
                ))}
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </>
    )
  }
}

export default Map;
