import React from "react";
import { Outlet } from "react-router-dom";

import Causes from "../components/causes";
import HeroPage from "../components/heroPage";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Causes />
      <Outlet/>
    </>
  );
};

export default Home;
