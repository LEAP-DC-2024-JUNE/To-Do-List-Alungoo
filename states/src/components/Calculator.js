import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
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
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="8"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="9"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input type="button" value="CE"></input>
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="5"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="6"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="/"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="2"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="3"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
            <input
              type="button"
              value="*"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
          </div>
          <div>
            <input type="button" value="C"></input>
            <input type="button" value="="></input>
            <input
              type="button"
              value="+"
              onClick={(e) => setInputValue(value + e.target.value)}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
