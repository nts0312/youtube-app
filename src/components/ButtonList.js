import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "AI",
    "Ancient History",
    "Cricket",
    "Music",
    "Java",
  ];

  //add scrolling also ------------
  return (
    <div className="flex ">
      {buttonList.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
