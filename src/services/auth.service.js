import axios from "axios";

const AUTH_URL = "http://localhost:3000";

const signup = ({ firstName, lastName, email, password }) => {
  return axios
    .post(`${AUTH_URL}/signup`, {
      firstName,
      lastName,
      email,
      password,
    })
    .then((response) => {
      console.log("Response: ", response);
      return response.data;
    })
    .catch((error) => {
      console.log("Error: ", error);
      throw error;
    });
};

const login = ({ email, password }) => {
  return axios
    .post(`${AUTH_URL}/login`, { email, password })
    .then((response) => {
      console.log("Login Response: ", response);
      return response.data;
    })
    .catch((error) => {
      console.log("Login Error: ", error);
      throw error;
    });
};

const authService = {
  signup,
  login,
};

export default authService;
