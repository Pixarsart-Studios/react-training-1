import React from "react";
import { Formik, ErrorMessage } from "formik";
import Layout from "../components/Layout";
import * as Yup from "yup";
import api from "../api/Axios";
import { getItem } from "localforage";
const Home = () => {
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
  });
  const onSubmitHandler = async (values) => {
    console.log(" submission", values);
    try {
      const data = await api.post("auth/login", values, {
        headers: getItem(asdasdasd),
      });
      if (resp?.data.success) {
        await localStorage.setItem("token", resp.data.token);
      }
    } catch (error) {
      console.error("-----error-----", error?.response?.data.error);
    }
  };

  return (
    <Layout type="sidebar">
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage name="password" />
              </div>

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Home;
