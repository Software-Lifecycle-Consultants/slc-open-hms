import { Grid } from '@mui/material';
import React from 'react'
import RoomCard from '../guestRoomDetails/RoomCard';
import { roomDetails } from '../../data/explorePage'

const HotelRooms = ({query} : {query: string}) => {

  

  const filteredRooms = roomDetails.filter((room) => {        //filterd the rooms based on search query by room name 
    return room.roomName.toLowerCase().includes(query.toLowerCase());
  });

  
  return (
    <>
      <Grid container spacing={2}>
        {roomDetails && filteredRooms.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <RoomCard
              image={item.roomCoverImage ? item.roomCoverImage : ''}
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
