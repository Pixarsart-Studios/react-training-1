import React from "react";
import Layout from "../components/Layout";

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Layout type="noSidebar">
      <div>
        <div>About</div>
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            HOME
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default About;
