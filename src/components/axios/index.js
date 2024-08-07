import axios from "axios";
// import * as dotenv from "dotenv";
// dotenv.config();

const instance = axios.create({
  baseURL: "https://g-weather-forecast-backend-4y3c.onrender.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;