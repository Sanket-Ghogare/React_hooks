import React from "react";
import ComponentC from "./ComponentC";
import { useContext } from "react";
import { userContext, ChannelContext } from "../App";

const ComponentB = () => {
    const user = useContext(userContext);
    const channel = useContext(ChannelContext);

  return (
    <>
      <div>
       these is done using the COntext hook  {user} - {channel}
       {/* <ComponentC/>   in these we are using the consumere methodlogy */}
      </div>
    </>
  );
};

export default ComponentB;
