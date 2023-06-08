import React, { useState } from "react";

const UseState5 = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      {items.map((data) => (
        <li key={data.id}>{data.value}</li>
      ))}
    </div>
  );
};

export default UseState5;
