import React from "react";

const Map = ({ data }) => {
  return (
    <div>
      <h2>
        My Name is {data.name} . I'm {data.age} years old and I'm {data.skill}
        developer
      </h2>
    </div>
  );
};

export default Map;
