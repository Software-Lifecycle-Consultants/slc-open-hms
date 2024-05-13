"use client";
import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LeafletControlGeocoder from "../Map/LeafletControlGeocoder";
import "leaflet/dist/leaflet.css";
import { useMediaQuery, useTheme } from "@mui/material";
/*
This component integrates the React Leaflet library to display a map.
It uses the user's geolocation to center the map initially.
*/
interface PositionInfo {
  address: string;
}

interface MapProps {
  positionInfos: PositionInfo[];
}

const Map: React.FC<MapProps> = (props) => {
  const { positionInfos } = props;
  const [latLng, setLatLng] = useState({
    //declear the latLng as a state
    lat: 0.0,
    lng: 0.0,
    isLoaded: false,
  });

  const theme = useTheme();
  //Use useMediaQuery hook from MUI to check if the screen size is small
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className="map-container"
      style={{
        width: isSmallScreen ? "300px" : "100%",
        height: isSmallScreen ? "300px" : "700px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <MapContainer
        center={[latLng.lat, latLng.lng]} //center the map to the user's location
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {/* TileLayer for map display */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* LeafletControlGeocoder for geocoding addresses */}
        <LeafletControlGeocoder positionInfos={positionInfos} />
      </MapContainer>
    </div>
  );
};

export default Map;
