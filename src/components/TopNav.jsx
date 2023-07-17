import React from "react";

const TopNav = ({ title = "" }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "5px",
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
      }}
    >
      {title} TopBox
    </div>
  );
};

export default TopNav;
