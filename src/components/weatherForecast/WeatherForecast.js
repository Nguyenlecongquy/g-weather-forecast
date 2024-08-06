import React from "react";

function WeatherForecast() {
  return (
    <div className="flex flex-col bg-slate-500 w-40 rounded-md p-3">
      <span class="font-bold text-base text-white">(2023-06-20)</span>
      <img src="http://openweathermap.org/img/wn/04d.png" alt="Weather Icon" width={50} height={50}/>
      <span className="text-white">Temp: 17.64 °C</span>
      <span className="text-white">Wind: 0.73 M/S</span>
      <span className="text-white">Humidity: 70%</span>
    </div>
  );
}

export default WeatherForecast;
