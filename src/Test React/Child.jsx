import React from "react";

const Child = (props) => {
  const { Name, Age } = props;
  return (
    <div>
      <h1>Hello {Name}</h1>
      <br />
      <h1>His age is {Age}</h1>
    </div>
  );
};

export default Child;
