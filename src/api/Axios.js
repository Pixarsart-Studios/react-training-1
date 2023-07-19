import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ENDPOINTS } from "../constants/index";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../redux/auth";
// import { store } from "../redux/store";
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

async function getToken() {
  const token = await localStorage.getItem("token");
  return token;
}

// api.interceptors.request.use(
//   async (config) => {
//     const token = await getToken();
//     if (!config.headers.Authorization) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Axios response interceptor to handle
// // errors
// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     if (error.response?.status === 401) {
//       store.dispatch(logoutUser());
//       AsyncStorage.removeItem("token");
//     }
//     return {
//       error: true,
//       error,
//     };
//   }
// );

export default api;
