import { Grid } from "@mui/material";
import React, { useState } from "react";
import RoomCard from "../guestRoomDetails/RoomCard";
import { roomDetails } from "../../data/explorePage";
import Pagination from "./Pagination";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const HotelRooms = ({
  query,
  value,
}: {
  query: string; //type declaration for query
  value: string; //type declaration for value
  page: number;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const filteredRooms = roomDetails.filter((room) => {
    //filterd the rooms based on search query by room name
    return room.roomName.toLowerCase().includes(query.toLowerCase());
  });

  const filteredResults = roomDetails.filter((room) => {
    //filterd the rooms based on selected value from drop down list by room type, guest,bed sizes
    return (
      room.roomType.toLowerCase() === value.toLowerCase() ||
      room.guest.toLowerCase() === value.toLowerCase() ||
      room.bedSizes.toLowerCase() === value.toLowerCase()
    );
  });

  const totalItems = filteredRooms.length + filteredResults.length; // Total number of items after filtering
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  // Paginated rooms based on current page
  const paginatedRooms = filteredRooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    setCurrentPage(page);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Grid container spacing={2}>
        {roomDetails &&
          filteredResults &&
          paginatedRooms.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <RoomCard
                image={item.roomCoverImage ? item.roomCoverImage : ""}
                roomName={item.roomName}
                price={item.price}
              />
            </Grid>
          ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HotelRooms;
