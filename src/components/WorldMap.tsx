"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { visitedCountries, getCountryColor, getStatusLabel } from "@/lib/travel-data";
import styles from "./WorldMap.module.css";

// Using a local TopoJSON file that uses ISO 3166-1 alpha-3 codes for IDs
const geoUrl = "/world-countries.json";

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }}>
          <ZoomableGroup center={[0, 20]} zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const visited = visitedCountries.find((c) => c.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryColor(visited?.status)}
                      stroke="#D6D6DA"
                      strokeWidth={0.5}
                      onMouseEnter={() => {
                        const { name } = geo.properties;
                        const status = visited ? ` • ${getStatusLabel(visited.status)}` : "";
                        setTooltipContent(`${name}${status}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#F53", outline: "none", cursor: "pointer" },
                        pressed: { outline: "none" },
                      }}
                      data-tooltip-id="map-tooltip"
                      data-tooltip-content={tooltipContent}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <Tooltip id="map-tooltip" />
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.colorBox} style={{ backgroundColor: getCountryColor('home') }}></div>
          <span>Home</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.colorBox} style={{ backgroundColor: getCountryColor('visited') }}></div>
          <span>Visited</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.colorBox} style={{ backgroundColor: getCountryColor('transit') }}></div>
          <span>Transit</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.colorBox} style={{ backgroundColor: getCountryColor(undefined), border: '1px solid #ccc' }}></div>
          <span>Not Visited</span>
        </div>
      </div>
    </div>
  );
}
