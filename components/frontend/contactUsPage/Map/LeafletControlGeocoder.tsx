"use client";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { geocoders } from "leaflet-control-geocoder";
/*
This component integrates the Leaflet Control Geocoder to convert addresses to latitude and longitude.
 It adds markers to the map for each address provided.
*/
interface PositionInfo {
  address: string; //declear the address as a prop
}

interface LeafletControlGeocoderProps {
  positionInfos: PositionInfo[];
}

const LeafletControlGeocoder: React.FC<LeafletControlGeocoderProps> = (
  props
) => {
  const map = useMap();
  const { positionInfos } = props;

  // Effect to add markers for each address provided
  useEffect(() => {
    const geocoder = new geocoders.Nominatim();

    positionInfos.forEach((positionInfo) => {
      const address = positionInfo.address; //destructure the address from positionInfo
      if (address) {
        //check if address is not null
        geocoder.geocode(address, (resultArray: any[]) => {
          //convert the address to lat and long
          if (resultArray.length > 0) {
            const result = resultArray[0];
            const latlng = result.center;

            const customIcon = new L.Icon({
              iconUrl: "https://www.svgrepo.com/show/362123/map-marker.svg", //icon for the map marker
              iconSize: [30, 50],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            });

            L.marker(latlng, { icon: customIcon })
              .addTo(map) //add the marker to the map
              .bindPopup(result.name); //display the name of the location on the map
            map.fitBounds(result.bbox); //fit the map to the location
          }
        });
      }
    });
  }, [map, positionInfos]);

  return null; // Return null as LeafletControlGeocoder does not render any visible UI
};

export default LeafletControlGeocoder;
