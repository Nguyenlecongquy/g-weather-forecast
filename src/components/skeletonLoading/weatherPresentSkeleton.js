import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const weatherPresentSkeleton = () => {
  return (
    <SkeletonTheme color="##78a7f5" highlightColor="#3b82f6">
      <div className="bg-blue-500 rounded-md flex justify-between p-5 mb-5">
        <div className="flex flex-col">
          <span class="text-xl font-medium">
            <Skeleton width={200} baseColor="#78a7f5" />
          </span>
          <span>
            <Skeleton width={150} count={3} baseColor="#78a7f5" />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Skeleton circle={true} height={50} width={50} baseColor="#78a7f5" />
          <span>
            <Skeleton width={150} baseColor="#78a7f5" />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default weatherPresentSkeleton;
