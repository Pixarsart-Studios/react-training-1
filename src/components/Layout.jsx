import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import SideBar from "./SideBar";

const layout = ({ children, type = "" }) => {
  return (
    <div>
      {type == "noSidebar" && (
        <>
          <Header />
          <div
            style={{
              height: "80vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </div>
          <Footer />
        </>
      )}
      {type == "sidebar" && (
        <>
          <Header />
          <div style={{ display: "flex" }}>
            <SideBar />
            <div
              style={{
                height: "80vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default layout;
