import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./Component";

// Without using useContext Hook here
const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(name) => {
          return (
            <ChannelContext.Consumer>
              {(caste) => {
                return (
                  <div>
                    The Teacher's Name is {name} and his student name is {caste}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
