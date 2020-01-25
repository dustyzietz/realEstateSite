import React from "react";

const Button = ({ iconPathD, text, iconFirst }) => {
  const icon = (
    <svg
      className="icon icon-svg"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={iconPathD} fill="#869099"></path>
    </svg>
  );
  return (
    <button type="button">
      <div className="flex">
        <div>{iconFirst ? icon : text}</div>
        <div>{iconFirst ? text : icon}</div>
      </div>
    </button>
  );
};

export default Button;
