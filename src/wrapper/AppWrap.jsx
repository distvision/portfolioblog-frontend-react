import React from "react";
import { NavigationsDots, SocialMedia } from "../components";

export const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full flex flex-row ${classNames}`}>
        <SocialMedia />

        <div className="flex justify-center items-center flex-1 w-full flex-col">
          <Component />
        </div>
        <NavigationsDots active={idName} />
      </div>
    );
  };
