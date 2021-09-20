import { useThemeContext } from "../contexts/ThemeContext";

const RadioButton = ({text, onChange, selected, value}) => {
  const { theme, setTheme } = useThemeContext();

  const handleClick = () => {
    setTheme(value);
    // console.log(e.target)
    // setSelected();
  };

  return (
    <div className="radio-container" onClick={() => onChange(value)}>
      <div
        className={`radio-outer-circle ${value !== selected && "unselected"}`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div className="label">{text}</div>
    </div>
  );
};

export default RadioButton;
