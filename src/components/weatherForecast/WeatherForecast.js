import React from "react";

function WeatherForecast(props) {
  const data = props.data;
  let wind = 0;
  data.hour.forEach((hour) => {
    wind += hour.wind_mph;
  });
  wind = wind / data.hour.length;

  return (
    <div className="flex flex-col bg-slate-500 w-40 rounded-md p-3">
      <span class="font-bold text-base text-white">({data.date})</span>
      <img
        src={data.day.condition.icon}
        alt="Weather Icon"
        width={50}
        height={50}
      />
      <span className="text-white">Temp: {data.day.avgtemp_c} °C</span>
      <span className="text-white">
        Wind: {(wind * 0.44704).toFixed(2)} M/S
      </span>
      <span className="text-white">Humidity: {data.day.avghumidity}%</span>
    </div>
  );
}

export default WeatherForecast;
