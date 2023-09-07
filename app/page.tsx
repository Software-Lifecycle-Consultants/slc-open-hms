"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CheckoutScreen from "@/pages/CheckoutScreen";
import ExploreScreen from "@/pages/ExploreScreen";
import HomeScreen from "@/pages/HomeScreen";
import RoomDetailsScreen from "@/pages/RoomDetailsScreen";

export default function Home() {
  const router = useRouter();

  const navigationToHomeScreen = () => {
    router.push("/HomeScreen");
  };
  return (
    <>
      {/* <button onClick={navigationToHomeScreen}>Go to home</button> */}
      <HomeScreen />
      {/* <CheckoutScreen />  */}
      {/* <RoomDetailsScreen /> */}
      {/* <ExploreScreen /> */}
    </>
  );
}
