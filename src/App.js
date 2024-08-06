import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Enter a City Name */}
        <div className="col-span-1">
          <span className="font-medium">Enter a City Name</span>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="E.g., New York, London, Tokyo"
          />
          <button className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md">
            Search
          </button>
          <div class="relative inline-flex items-center justify-center w-full">
            <hr class="w-64 h-[1px] my-8 bg-slate-500 border-0" />
            <span class="absolute px-3 text-slate-500 -translate-x-1/2 bg-white left-1/2 pb-1">
              or
            </span>
          </div>
          <button className="w-full p-2 bg-slate-500 text-white rounded-md">
            Use Current Location
          </button>
        </div>

        {/* Display Weather Information */}
        <div className="col-span-2">
          {/* Current Weather Information */}
          <div className="bg-blue-500 rounded-md flex justify-between p-5 mb-5">
            <div className="flex flex-col">
              <span class="text-white text-xl font-medium">
                London (2023-06-19)
              </span>
              <span class="text-white">Temperature: 18.71 °C</span>
              <span class="text-white">Wind: 4.31 M/S</span>
              <span class="text-white">Humidity: 76%</span>
            </div>
            <div>
              <img
                src="http://openweathermap.org/img/wn/04d.png"
                alt="Weather Icon"
              />
              <span class="text-white">Cloudy</span>
            </div>
          </div>

          {/* Weather Forecast */}
          <div className="">
            <span class="font-bold text-xl">4-Day Forecast</span>
            <div className="flex w-full flex-wrap gap-3">
              <WeatherForecast />
              <WeatherForecast />
              <WeatherForecast />
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
