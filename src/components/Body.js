import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import Check from "./Check";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
