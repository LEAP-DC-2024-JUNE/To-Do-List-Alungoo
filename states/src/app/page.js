import Calculator from "@/components/Calculator";
import Regions from "@/components/Regions";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <Regions />
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
