import { Grid } from "@mui/material";
import React, { useState } from "react";
import RoomCard from "../guestRoomDetails/RoomCard";
import { roomDetails } from "../../data/explorePage";
import Pagination from "../explore/Panigation";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const HotelRooms = ({
  query,
  value,
}: {
  query: string;
  value: string;
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
    //filterd the rooms based on search query by room type
    const filterbyType = room.roomType
      .toLowerCase()
      .includes(value.toLowerCase());
  });

  const totalItems = filteredRooms.length; // Total number of items after filtering
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
