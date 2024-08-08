import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import { getWeatherForecast } from "./components/api/weatherForecast";
import weatherPresentSkeleton from "./components/skeletonLoading/weatherPresentSkeleton";
import weatherForecastSkeleton from "./components/skeletonLoading/weatherForecastSkeleton";

function App() {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dayForecast, setDayForecast] = useState(5);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isGetLocation, setIsGetLocation] = useState(false);

  const fetchWeatherData = async (cityInfor, days) => {
    const response = await getWeatherForecast(cityInfor, days);
    if (response.message !== undefined) {
      // response is an error information
      setError(true);
    } else {
      // response is the weather data
      setError(false);
      setWeatherData(response);
    }
    setIsLoadMore(false);
    setIsSearch(false);
    setIsGetLocation(false);
  };

  useEffect(() => {
    if (weatherData === null) {
      fetchWeatherData(city, dayForecast);
    } else {
      setIsLoading(false);
    }
  }, [weatherData, dayForecast, city]);

  const onSearch = () => {
    if (city === "") {
      setError(true);
      return;
    }
    setIsSearch(true);
    setDayForecast(5);
    fetchWeatherData(city, 5);
  };

  const onLoadMore = () => {
    setIsLoadMore(true);
    if (dayForecast + 4 > 14) {
      return;
    }
    fetchWeatherData(city, dayForecast + 4);
    setDayForecast(dayForecast + 4);
  };

  const onGetLocation = () => {
    setIsGetLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const cityInfor = `${lat},${lon}`;
          fetchWeatherData(cityInfor, 5);
        },
        () => {
          setIsGetLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <Header />

      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Enter a City Name */}
        <div className="col-span-1">
          <span className="font-medium">Enter a City Name</span>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="E.g., New York, London, Tokyo"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <span className="text-red-500">
            {error ? "Please check City Name" : ""}
          </span>
          <button
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md"
            onClick={onSearch}
            disabled={isLoading}
          >
            <div className="flex justify-center">
              Search
              {isSearch && (
                <img
                  src="https://i.gifer.com/ZKZg.gif"
                  alt="loading"
                  width={18}
                  className="ml-2"
                />
              )}
            </div>
          </button>
          <div class="relative inline-flex items-center justify-center w-full">
            <hr class="w-64 h-[1px] my-8 bg-slate-500 border-0" />
            <span class="absolute px-3 text-slate-500 -translate-x-1/2 bg-white left-1/2 pb-1">
              or
            </span>
          </div>
          <button
            className="w-full p-2 bg-slate-500 text-white rounded-md"
            onClick={onGetLocation}
            disabled={isLoading}
          >
            <div className="flex justify-center">
              Use Current Location
              {isGetLocation && (
                <img
                  src="https://i.gifer.com/ZKZg.gif"
                  alt="loading"
                  width={18}
                  className="ml-2"
                />
              )}
            </div>
          </button>
        </div>

        {/* Display Weather Information */}
        <div className="col-span-2">
          {/* Current Weather Information */}
          {isLoading ? (
            weatherPresentSkeleton()
          ) : (
            <div className="bg-blue-500 rounded-md flex justify-between p-5 mb-5">
              <div className="flex flex-col">
                <span class="text-white text-xl font-medium">
                  {weatherData.location.name} (
                  {weatherData.forecast.forecastday[0].date})
                </span>
                <span class="text-white">
                  Temperature: {weatherData.current.temp_c} °C
                </span>
                <span class="text-white">
                  Wind: {(weatherData.current.wind_mph * 0.44704).toFixed(2)}{" "}
                  M/S
                </span>
                <span class="text-white">
                  Humidity: {weatherData.current.humidity}%
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={weatherData.current.condition.icon}
                  alt="Weather Icon"
                />
                <span class="text-white">
                  {weatherData.current.condition.text}
                </span>
              </div>
            </div>
          )}

          {/* Weather Forecast */}
          {isLoading ? (
            weatherForecastSkeleton()
          ) : (
            <div className="">
              <div className="flex mb-2">
                <span class="font-bold text-xl">
                  {weatherData.forecast.forecastday.length - 1}-Day Forecast
                </span>
                {isLoadMore && (
                  <img
                    src="https://i.gifer.com/ZKZg.gif"
                    alt="loading"
                    width={20}
                    className="ml-2"
                  />
                )}
              </div>
              <div className="flex w-full flex-wrap gap-3">
                {weatherData.forecast.forecastday
                  .slice(1, weatherData.forecast.forecastday.length)
                  .map((data) => (
                    <WeatherForecast data={data} />
                  ))}
              </div>
              {/* Load More Button */}
              {dayForecast < 13 && (
                <button
                  className="w-fit p-2 bg-blue-500 text-white rounded-md mt-5"
                  onClick={onLoadMore}
                  disabled={isLoading}
                >
                  <div className="flex">
                    Load More
                    {isLoadMore && (
                      <img
                        src="https://i.gifer.com/ZKZg.gif"
                        alt="loading"
                        width={18}
                        className="ml-2"
                      />
                    )}
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
