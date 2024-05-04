import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-custom-gray rounded-md font-bold text-sm cursor-pointer m-2 px-3 py-1.5">
      {name}
    </div>
  );
};

export default Button;
