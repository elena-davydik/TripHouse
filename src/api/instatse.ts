import axios from "axios";

const defaultConfig = {
  baseURL: "https://fe-student-api.herokuapp.com/api/hotels",
  "Content-Type": "aplication/json",
};

export const createInstanse = (config = {}) => {
  const newConfig = {
    ...config,
    ...defaultConfig,
  };

  const instanse = axios.create(newConfig);
  return instanse;
};
