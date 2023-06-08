import React, { useState } from "react";
import Child from "./Child";

const UseState1 = (e) => {
  const [Name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <Child Name={Name} Age={age} />

      <div>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseState1;
