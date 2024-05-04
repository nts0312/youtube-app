import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col h-16">
      <div className="flex col-span-1 ">
        <img
          className="h-10  mt-2 ml-4 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="">
          <img
            className="h-6 mt-4 ml-6"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32vuL7IqzZ9F5TVJQ5O0CPVOAaSpmNnLiiF1KBown&s"
          />
        </a>
      </div>

      <div className="mt-2 col-span-10 text-center">
        <input
          className="border border-gray-400 w-1/2 rounded-l-2xl h-10 p-4"
          type="text"
          placeholder="Search"
        />
        <button className=" border-gray-400 h-10 w-16 rounded-r-2xl bg-slate-100 hover:bg-slate-200 hover:shadow-sm">
          🔍
        </button>
      </div>

      <div className="col-span-1 ml-auto">
        <img
          className="h-14"
          alt="user"
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
