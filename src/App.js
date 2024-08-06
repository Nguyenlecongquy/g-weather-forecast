import "./App.css";
import React from "react";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="grid grid-cols-3 gap-8 p-8">
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

        <div className="col-span-2 h-24 bg-slate-500"> </div>
      </div>
    </div>
  );
}

export default App;
