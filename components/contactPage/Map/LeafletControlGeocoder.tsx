"use client";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { geocoders } from "leaflet-control-geocoder";

interface PositionInfo {
  address: string;
}

interface LeafletControlGeocoderProps {
  positionInfos: PositionInfo[];
}

const LeafletControlGeocoder: React.FC<LeafletControlGeocoderProps> = (
  props
) => {
  const map = useMap();
  const { positionInfos } = props;

  useEffect(() => {
    if (!map) {
      console.error("Map instance is not available");
      return;
    }

    const geocoder = new geocoders.Nominatim();

    const addMarkers = async () => {
      for (const positionInfo of positionInfos) {
        const address = positionInfo.address;
        if (address) {
          try {
            const resultArray = await geocodeAddress(geocoder, address);
            if (resultArray.length > 0) {
              const result = resultArray[0];
              const latlng = result.center;

              const customIcon = new L.Icon({
                iconUrl: "https://www.svgrepo.com/show/362123/map-marker.svg",
                iconSize: [30, 50],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
              });

              const marker = L.marker(latlng, { icon: customIcon });

              // Ensure the map is ready before adding the marker
              map.whenReady(() => {
                marker.addTo(map).bindPopup(result.name);
                map.fitBounds(result.bbox);
              });

              if (!marker) {
                console.error("Marker could not be added to the map");
              }
            }
          } catch (error) {
            console.error("Geocoding error:", error);
          }
        }
      }
    };

    addMarkers();
  }, [map, positionInfos]);

  return null;
};

const geocodeAddress = (geocoder: any, address: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    geocoder.geocode(address, (results: any[]) => {
      if (results) {
        resolve(results);
      } else {
        reject(new Error("Geocoding failed"));
      }
    });
  });
};

export default LeafletControlGeocoder;
