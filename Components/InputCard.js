import { evaluate } from "mathjs";
import { useResultContext } from "../contexts/ResultContext";
import InputStyle from "./styles/InputStyle";

const InputCard = () => {
  const buttons = [
    { name: 7, value: 7 },
    { name: 8, value: 8 },
    { name: 9, value: 9 },
    { name: 4, value: 4 },
    { name: 5, value: 5 },
    { name: 6, value: 6 },
    { name: "+", value: "+" },
    { name: 1, value: 1 },
    { name: 2, value: 2 },
    { name: 3, value: 3 },
    { name: "-", value: "-" },
    { name: ".", value: "." },
    { name: 0, value: 0 },
    { name: "/", value: "/" },
    { name: "x", value: "*" },
  ];

  const { result, setResult, isSolved, setIsSolved } = useResultContext();

  const deleteClick = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.slice(0, -1));
    }
  };

  const resetClick = () => {
    setResult("0");
    setIsSolved(false);
  };

  const equalsClick = () => {
    setResult(parseFloat(evaluate(result).toFixed(7)).toString());
    setIsSolved(true);
  };

  const valueClick = (val) => {
    // let regex = /(?:\+|\-|\*|\/)(?!.*(?:\+|\-|\*|\/))/; more specific, only just the 4 operators
    let operators = /(?:\W)(?!.*(?:\W))/;

    if (result === "0") {
      setResult(val.toString());
    } else if (
      isSolved &&
      (val === "+" || val === "-" || val === "/" || val === "*")
    ) {
      setResult(result + val.toString());
      setIsSolved(false);
    } else if (isSolved) {
      setResult(val.toString());
      setIsSolved(false);
    } else {
      if (
        val === "." &&
        result.includes(".", result.lastIndexOf(operators.exec(result)))
      ) {
        setResult(result);
      } else if (
        (val === "+" || val === "-" || val === "/" || val === "*") &&
        (result[result.length - 1] === "+" ||
          result[result.length - 1] === "-" ||
          result[result.length - 1] === "/" ||
          result[result.length - 1] === "*")
      ) {
        setResult(result.slice(0, -1) + val);
      } else if (
        (val === "+" || val === "-" || val === "/" || val === "*") &&
        (result[result.length - 1] === ".")
      ) {
        setResult(result);
      } else {
        setResult(result + val.toString());
      }
    }
  };

  return (
    <InputStyle>
      <div className="buttonGrid">
        <button onClick={deleteClick} className="delete">
          DEL
        </button>
        {buttons.map((b, index) => {
          return (
            <button
              onClick={() => valueClick(b.value)}
              className="button"
              key={index}
              value={b.value}
            >
              {b.name}
            </button>
          );
        })}
      </div>
      <span className="bottomButtons">
        <button onClick={resetClick} className="reset">
          Reset
        </button>
        <button onClick={equalsClick} className="equals">
          =
        </button>
      </span>
    </InputStyle>
  );
};

export default InputCard;
