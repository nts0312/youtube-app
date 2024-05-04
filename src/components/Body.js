import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex space-x-7">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
