import React from "react";
import { ChannelContext, userContext } from "../App";
const ComponentC = () => {
  return (
    <>
      <div>
        <userContext.Consumer>
          {(user) => {
            return (
              <ChannelContext.Consumer>
                {(Channel) => {
                  return (
                    <div className="text-white">user context value{user}, the context channel{Channel}</div>
                  );
                }}
              </ChannelContext.Consumer>
            );
          }}
        </userContext.Consumer>
      </div>
    </>
  );
};

export default ComponentC;
