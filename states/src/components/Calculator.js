"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  return (
    <div>
      <div>
        <form>
          <div>
            <input type=" text" value={inputValue}></input>
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="CE"
              onClick={(e) => setInputValue("")}
            ></input>
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="C"
              onClick={(e) => setInputValue(inputValue.slice(0, -1))}
            />
            <input
              type="button"
              value="="
              onClick={(e) => setInputValue(eval(inputValue))}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setInputValue(inputValue + e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
