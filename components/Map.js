import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';

const Map = () => (
  <>
    <p>Sup bro, I'm a map</p>
    <span>asd</span>
    <div>
      <ComposableMap
        projectionConfig={{
          xOffset: -100,
          yOffset: 200,
          scale: 700,
        }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <ZoomableGroup center={[0, 30]} disablePanning>
          <Geographies geography="/static/world-50m.json">
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== 'ATA' && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: '#ECEFF1',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#607D8B',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#FF5722',
                          stroke: '#607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  )
              )
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  </>
);

export default Map;
