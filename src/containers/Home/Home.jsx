import React from "react";
import PopularEvents from "../PopularEvents/PopularEvents";
import Categories from "../Categories/Categories";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <>
      <PopularEvents />
      <Categories />
      <UpcomingEvents />
    </>
  );
};

export default Home;
