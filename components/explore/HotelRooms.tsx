import { Grid } from '@mui/material';
import React from 'react'
import RoomCard from '../guestRoomDetails/RoomCard';
const data = [
  { id: 1, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 1" , price: 59},
  { id: 2, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 2" , price: 59},
  { id: 3, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 3", price: 59 },
  { id: 4, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 4" , price: 59},
  { id: 5, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 5" , price: 59},
  { id: 6, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 6" , price: 59},
  { id: 7, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 7" , price: 59},
  { id: 8, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 8" , price: 59},
  { id: 9, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 9" , price: 59},
  { id: 10, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 10" , price: 59},
  { id: 11, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 11" , price: 59},
  { id: 12, image: "/images/Room2.jpg", roomName: "Deluxe Double with New York City View 12" , price: 59},
];

const HotelRooms = () => {
  return (
    <>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <RoomCard
              image={item.image}
              roomName={item.roomName}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default HotelRooms
