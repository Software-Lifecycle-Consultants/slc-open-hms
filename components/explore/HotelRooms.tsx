import { Grid } from '@mui/material';
import React from 'react'
import RoomCard from '../guestRoomDetails/RoomCard';
import { roomDetails } from '../../data/explorePage'

const HotelRooms = () => {
  return (
    <>
      <Grid container spacing={2}>
        {roomDetails.map((item) => (
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
