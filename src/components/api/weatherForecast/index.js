import instance from "../../axios";

const getWeatherForecast = async (city) => {
  try {
    const response = await instance.get(`/weather-forecast/?city=${city}`);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { getWeatherForecast };
