import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { Card } from "./components/Card/Card";

function App() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = () => {
    if (themeMode == "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  useTheme();

  return (
    <>
      <h1 className="text-5xl mt-10 mb-10">
        This is a Theme Switcher App using Context API
      </h1>
      <div className="w-full justify-center flex flex-row items-center">
        <div className="flex flex-row justify-between toggle">
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                onClick={onChangeBtn}
                className="checkbox hidden"
              />
              <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 dark:text-white text-gray-900 font-medium">
              {themeMode}
            </div>
          </label>
        </div>
      </div>
      <Card />
    </>
  );
}

export default App;
