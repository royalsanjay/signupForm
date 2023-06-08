import React from "react";
import ComponentD from "./ComponentD";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const Component = () => {
  return (
    <div>
      <UserContext.Provider value={"Sanjay"}>
        <ChannelContext.Provider value={"Shasank"}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Component;
