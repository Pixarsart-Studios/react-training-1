import React, { useEffect } from "react";
import Layout from "../components/Layout";

import { NavLink, useParams } from "react-router-dom";
import api from "../api/Axios";

const About = (props) => {
  let { productId } = useParams();

  const verifyHandler = async () => {
    try {
      const resp = await api.get("auth/verify");
      console.log(resp);
    } catch (e) {
      console.error(e, "===== api response =====  ");
    }
  };

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
          <button
            onClick={() => {
              verifyHandler();
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
