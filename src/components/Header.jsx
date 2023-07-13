import React, { useState } from "react";
import MainNav from "./MainNav";
import TopNav from "./TopNav";

const Header = () => {
  const [title, setTitle] = useState("");
  const clickHandler = (val) => {
    setTitle(val);
  };
  return (
    <div>
      <TopNav title={title} />
      <MainNav />
      <button
        onClick={() => {
          clickHandler("i am title");
        }}
      >
        Change Title
      </button>
      {title} - title
    </div>
  );
};

export default Header;
