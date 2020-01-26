import React, { Fragment } from "react";

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
    <Fragment>
      <button type="button">
        <div className="flex">
          <div>{iconFirst ? icon : text}</div>
          <div>{iconFirst ? text : icon}</div>
        </div>
      </button>
      <style jsx>{`
        button {
          border-radius: 0;
        }
        button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
        }
      `}</style>
    </Fragment>
  );
};

export default Button;
