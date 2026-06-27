import API from "../api/authApi";

export const loginUser = async(data) => {
  return API.post("/auth/login", data);
};

export const registerUser = async(data) => {
  return API.post("/auth/register", data);
};
