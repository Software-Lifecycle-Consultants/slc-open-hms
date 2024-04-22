"use client";
import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LeafletControlGeocoder from "../Map/LeafletControlGeocoder";
import "leaflet/dist/leaflet.css";

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

  useEffect(() => {
    const getLocation = () => {
      if (typeof window !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            //get the location of the user
            setLatLng({
              lat: position.coords.latitude, //get the latitude
              lng: position.coords.longitude, //get the longitude
              isLoaded: true,
            });
          },
          (error) => {
            alert(error);
          }
        );
      }
    };

    getLocation();
  }, [setLatLng]);
  return (
    <MapContainer
      center={[latLng.lat, latLng.lng]} //center the map to the user's location
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "700px",
      }}
    >
      {/* TileLayer for map display */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* LeafletControlGeocoder for geocoding addresses */}
      <LeafletControlGeocoder positionInfos={positionInfos} />
    </MapContainer>
  );
};

export default Map;
