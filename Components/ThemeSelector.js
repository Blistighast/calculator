import { useThemeContext } from "../contexts/ThemeContext";
import RadioButton from "./RadioButton";
import { useState } from 'react';

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeContext();
  const [selected, setSelected] = useState("dark_theme");

  const handleClick = (value) => {
    setTheme(value);
    setSelected(value);
  };

  return (
    <div>
      <span className="theme">
        <div className="themeTitle">Theme</div>
        <span className="labels">
          <label className="label" htmlFor="dark_theme">
            1
          </label>
          <label className="label" htmlFor="light_theme">
            2
          </label>
          <label className="label" htmlFor="purple_theme">
            3
          </label>
        </span>
        <span className="toggleRadio">
          <RadioButton
            value="dark_theme"
            selected={selected}
            onChange={handleClick}
            />
          <RadioButton
            value="light_theme"
            selected={selected}
            onChange={handleClick}
            />
          <RadioButton
            value="purple_theme"
            selected={selected}
            onChange={handleClick}
          />
        </span>
      </span>
    </div>
  );
};

export default ThemeSelector;
