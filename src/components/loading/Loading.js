import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function Loading() {
return (
    <div className="flex h-screen items-center">
        <ClipLoader
            color={"#000"}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
);
}

export default Loading;
