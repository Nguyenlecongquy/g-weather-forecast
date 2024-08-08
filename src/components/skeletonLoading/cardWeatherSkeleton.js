import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const cardWeatherSkeleton = () => {
  return (
    <SkeletonTheme color="#95a1b3" highlightColor="#64748b">
      <div className="flex flex-col bg-slate-500 w-40 rounded-md p-3">
        <span class="font-bold text-xl text-white">
          <Skeleton width={110} baseColor="#95a1b3" />
        </span>
        <Skeleton circle={true} height={40} width={40} baseColor="#95a1b3" />
        <span className="text-white">
          <Skeleton width={100} baseColor="#95a1b3" />
        </span>
        <span className="text-white">
          <Skeleton width={100} baseColor="#95a1b3" />
        </span>
        <span className="text-white">
          <Skeleton width={100} baseColor="#95a1b3" />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default cardWeatherSkeleton;
