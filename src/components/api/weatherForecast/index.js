import instance from "../../axios";

const getWeatherForecast = async (city, dayForecast) => {
  try {
    const response = await instance.get(`/weather-forecast`, {
      params: {
        city: city,
        days: dayForecast,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { getWeatherForecast };
