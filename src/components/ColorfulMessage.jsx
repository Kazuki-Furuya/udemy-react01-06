import React from "react";

export const ColorfulMessage = (props) => {
  console.log("start ColorfulMessage");
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    color, // color: colorと同じ！
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
