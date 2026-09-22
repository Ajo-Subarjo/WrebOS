import { evaluate, string } from "mathjs";
import { useState } from "react";


export default function Calculator() {

  const [display, setDisplay] = useState("")

  const InputNumber = (number: string) => { setDisplay(display + number) }
  const calculate = () => {setDisplay(string(evaluate(display)))}
  const backspace = () => {setDisplay(display.slice(0, -1))}



  return (
    <div className="calculator">
      <div className="calculator-result-display">{display}</div>

      <div className="calculator-number-button">
        <button onClick={() => InputNumber("9")}>9</button>
        <button onClick={() => InputNumber("8")}>8</button>
        <button onClick={() => InputNumber("7")}>7</button>

        <button onClick={() => InputNumber("6")}>6</button>
        <button onClick={() => InputNumber("5")}>5</button>
        <button onClick={() => InputNumber("4")}>4</button>

        <button onClick={() => InputNumber("3")}>3</button>
        <button onClick={() => InputNumber("2")}>2</button>
        <button onClick={() => InputNumber("1")}>1</button>

        <button onClick={() => InputNumber("0")}>0</button>
        <button className="calc-button" onClick={calculate}>=</button>
      </div>

      <div className="calculator-operator">
        <button onClick={backspace}>{"<="}</button>
        <button onClick={() => InputNumber("+")}>+</button>
        <button onClick={() => InputNumber("-")}>-</button>
        <button onClick={() => InputNumber("*")}>x</button>
        <button onClick={() => InputNumber("/")}>/</button>
      </div>

    </div>
  )
}
