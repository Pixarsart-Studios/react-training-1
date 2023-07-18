import React, { useEffect } from "react";
import Layout from "../components/Layout";

import { NavLink, useParams } from "react-router-dom";

const About = (props) => {
  let { productId } = useParams();
  useEffect(() => {
    console.log("Props", props);
  }, []);
  return (
    <Layout type="noSidebar">
      <div>
        <div>About {productId} </div>
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
