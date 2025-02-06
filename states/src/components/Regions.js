"use client";

import React, { useState } from "react";

const Regions = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([
    { value: "australia", label: "Australia" },
    { value: "brazil", label: "Brazil" },
    { value: "switzerland", label: "Switzerland" },
    { value: "usa", label: "USA" },
    { value: "england", label: "England" },
    { value: "ireland", label: "Ireland" },
    { value: "greenland", label: "Greenland" },
    { value: "austria", label: "Austria" },
  ]);

  // data select hiiher garj ireed vndsen datagaas hasagdana
  const handleSelectedData = (country) => {
    setSelectedData([...selectedData, country]);
    setData(data.filter((element) => element !== country));
  };
  const removeCountry = (eachCoutry) => {
    setSelectedData(selectedData.filter((el) => el.value !== eachCoutry.value));
    setData([...data, eachCoutry]);
  };
  const deleteAll = () => {
    setData([...data, ...selectedData]);
    setSelectedData([]);
  };

  const filteredCountry = data.filter((country) => {
    return country.value.startsWith(inputValue.toLowerCase());
  });

  console.log(isOpen);
  return (
    <div className=" flex justify-center items-center h-[50vh]">
      <div>
        <span>
          <input onChange={(e) => setInputValue(e.target.value)}></input>
        </span>
        <div className=" bg-blue-100 border-gray-800 border-[1px]">
          {selectedData?.map((eachCoutry, index) => {
            return (
              <div key={index} className=" flex">
                <div className=" bg-blue-300 m-1 rounded-md">
                  {eachCoutry.label}
                  <button
                    className=" pl-3"
                    onClick={() => removeCountry(eachCoutry)}
                  >
                    {" "}
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-[1px] border-black gap-3 ">
          <input onChange={(e) => setInputValue(e.target.value)}></input>
          <button onClick={() => deleteAll()}>Clear All</button>
          <button onClick={() => setOpen(!isOpen)}>➕</button>

          <div className=" bg-slate-100">
            {isOpen &&
              filteredCountry.map((country, index) => {
                return (
                  <div key={index} onClick={() => handleSelectedData(country)}>
                    {country.label}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
