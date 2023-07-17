import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Layout type="sidebar">
      <div>
        <div>Home</div>
        <div>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
