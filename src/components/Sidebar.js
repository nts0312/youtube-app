import React from "react";
import { useSelector } from "react-redux";
import subs from "./../assets/subs.svg";
import shorts from "./../assets/shorts.svg";
import home from "./../assets/home.svg";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //EARLY RETURN PATTERN
  if (!isMenuOpen) {
    return null;
  }

  const list = [
    { name: "Home", img: home },
    { name: "Shorts", img: shorts },
    { name: "Subscriptions", img: subs },
  ];

  return (
    <div className="">
      {list.map((item, index) => (
        <div
          key={index}
          className=" rounded-md w-52 flex cursor-pointer ml-3 h-11 m-2 py-1.5 bg-custom-gray"
        >
          <img className="ml-4 w-5 pb-1" src={item.img} alt={item.name} />
          <h1 className="ml-6 pt-1 font-semibold text-sm">{item.name}</h1>
        </div>
      ))}
      {/* <div className=" rounded-md w-52 flex cursor-pointer ml-3 h-11 m-2 py-1.5 bg-custom-gray">
        <img className="ml-4" />
        <h1 className="ml-6 pt-1 font-semibold text-sm">Home</h1>
      </div> */}
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
