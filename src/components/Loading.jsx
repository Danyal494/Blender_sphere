import React from "react";
import { zoomies } from "ldrs";
import { TiVendorApple } from "react-icons/ti";

// Register the zoomies component once
zoomies.register();

const Loader = () => {
  return (
    <div className="gk  ">
      <div>
        <TiVendorApple className="mx-auto" size={"5em"} color="white" />

        <l-zoomies
          size="100"
          stroke="5"
          bg-opacity="0.1"
          speed="1.4"
          color="white"
        ></l-zoomies>
      </div>
    </div>
  );
};

export default Loader;
