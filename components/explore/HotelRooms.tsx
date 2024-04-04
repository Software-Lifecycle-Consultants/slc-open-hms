import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import RoomCard from "../guestRoomDetails/RoomCard";
import { roomDetails } from "../../data/explorePage";
import { useSearchParams } from "next/navigation";

interface RoomDetail {
  id: number;
  roomCoverImage: string;
  roomName: string;
  roomType: string;
  bedSizes: string;
  guest: string;
  price: number;
  // Add other properties as needed
}

const HotelRooms = ({
  query,
  roomType,
  bedSizes,
  guest,
}: {
  query: string;
  roomType: string;
  bedSizes: string;
  guest: string;
}) => {
  const searchParams = useSearchParams();

  // State to hold filtered rooms
  const [filteredRooms, setFilteredRooms] = useState<RoomDetail[]>(roomDetails);

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const roomType = searchParams.get("roomType") || "";
    const bedSizes = searchParams.get("beds") || "";
    const guest = searchParams.get("guest") || "";

    // Filter rooms based on query and selected values
    let filteredResults = roomDetails;

    if (query) {
      filteredResults = filteredResults.filter((room) =>
        room.roomName.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (roomType) {
      filteredResults = filteredResults.filter(
        (room) => room.roomType.toLowerCase() === roomType.toLowerCase()
      );
    }

    if (bedSizes) {
      filteredResults = filteredResults.filter(
        (room) => room.bedSizes.toLowerCase() === bedSizes.toLowerCase()
      );
    }

    if (guest) {
      filteredResults = filteredResults.filter(
        (room) => room.guest.toLowerCase() === guest.toLowerCase()
      );
    }

    setFilteredRooms(filteredResults);
  }, [searchParams]); // Update when search params change

  console.log("Filtered Rooms:", filteredRooms);
  return (
    <>
      <Grid container spacing={2}>
        {filteredRooms.length > 0 ? (
          filteredRooms.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <RoomCard
                image={item.roomCoverImage ? item.roomCoverImage : ""}
                roomName={item.roomName}
                price={item.price}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>No rooms match the criteria.</p>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default HotelRooms;
