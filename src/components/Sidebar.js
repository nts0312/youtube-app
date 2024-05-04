import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //EARLY RETURN PATTERN
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="">
      <div className=" rounded-md w-52 flex cursor-pointer ml-3 h-11 m-2 py-1.5 bg-custom-gray">
        <h1 className="ml-4">🏠</h1>
        <h1 className="ml-6 pt-1 font-semibold text-sm">Home</h1>
      </div>
      {/* <ul className="">
        <li className="ml-0">Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul> */}

      {/* <h1 className="pt-5 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
