import React from "react";

type Props = {
  variant: "orange" | "green" | "blue";
}

const Circle = ({ variant }: Props) =>  {
  let bgColor;

  switch (variant) {
    case "orange":
      bgColor = "#f97316";
      break;
    case "green":
      bgColor = "#22c55e";
      break;
    case "blue":
      bgColor = "#3b82f6";
      break;
  }

  return (
  <div style={{
    backgroundColor: `${bgColor}`,
    width: "2rem",
    height: "2rem",
    padding: "0.25rem",
    borderRadius: "9999px"
  }} ></div>
  );
}

export default Circle;