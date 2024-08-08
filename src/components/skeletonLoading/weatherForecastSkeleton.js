import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import cardWeatherSkeleton from "./cardWeatherSkeleton";

const weatherForecastSkeleton = () => {
  return (
    <div>
      <div className="flex mb-2">
        <span class="font-bold text-xl">
          <Skeleton width={200} baseColor="#ebebeb" highlightColor="#c9c8c8" />
        </span>
      </div>
      <div className="flex w-full flex-wrap gap-3">
        {cardWeatherSkeleton()}
        {cardWeatherSkeleton()}
        {cardWeatherSkeleton()}
        {cardWeatherSkeleton()}
      </div>
      <button className="w-fit p-2 bg-blue-500 text-white rounded-md mt-5">
        Load more
      </button>
    </div>
  );
};

export default weatherForecastSkeleton;
