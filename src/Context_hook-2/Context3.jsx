import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Context3 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <button className="text-red dark:text-white" onClick={handleClick}>Change Theme</button>
    </>
  );
};

export default Context3;
