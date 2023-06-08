import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "./Component";

//  Using useContext hook
const ComponentE = () => {
  const Vorname = useContext(UserContext);
  const Nachname = useContext(ChannelContext);
  return (
    <div>
      {Vorname} and {Nachname}
    </div>
  );
};

export default ComponentE;
