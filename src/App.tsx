import React, { useState } from "react";
import { OperatorHelper, expressionParser } from "./utils";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // state
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("0");

  // event
  const restart = (e: any) => {
    e.preventDefault();
    setFormula("");
    setResult("0");
  };
  const changeCord = (e: any) => {
    e.preventDefault();
    setResult(OperatorHelper.optimizeNumber((+result * -1).toFixed(5)));
  };
  const addFormula = (e: any) => {
    e.preventDefault();
    setFormula(formula + e.target.value);
  };
  const calculate = (e: any) => {
    e.preventDefault();
    setResult(expressionParser(formula));
    setFormula("");
  };

  return (
    <div className="container">
      <div className="col-sm-8 col-md-6 col-lg-3 m-5 bg-black rounded transparency">
        <div className="display-parent display">
          <div className="text-end fs-3 font-light m-1">{formula}</div>
          <div className="text-end font-lg display-answer font-light m-1">
            {result}
          </div>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="bg-command btn-lg col-3 rounded transparency-button font-light"
            onClick={restart}
            onTouchEnd={restart}
          >
            AC
          </button>
          <button
            type="button"
            className="bg-command btn-lg col-3 rounded transparency-button font-light"
            onClick={changeCord}
            onTouchEnd={changeCord}
          >
            +/-
          </button>
          <button
            type="button"
            className="bg-command btn-lg col-3 rounded transparency-button font-light"
            value="%"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            %
          </button>
          <button
            type="button"
            className="bg-operator btn-lg col-3 rounded font-light"
            value="÷"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            ÷
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="7"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            7
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="8"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            8
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="9"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            9
          </button>
          <button
            type="button"
            className="bg-operator btn-lg col-3 rounded font-light"
            value="×"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            ×
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="4"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            4
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="5"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            5
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="6"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            6
          </button>
          <button
            type="button"
            className="bg-operator btn-lg col-3 rounded font-light"
            value="-"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            -
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="1"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            1
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="2"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            2
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="3"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            3
          </button>
          <button
            type="button"
            className="bg-operator btn-lg col-3 rounded font-light"
            value="+"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            +
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-6 rounded font-light"
            value="0"
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            0
          </button>
          <button
            type="button"
            className="bg-secondary btn-lg col-3 rounded font-light"
            value="."
            onClick={addFormula}
            onTouchEnd={addFormula}
          >
            .
          </button>
          <button
            type="button"
            className="bg-operator btn-lg col-3 rounded font-light"
            onClick={calculate}
            onTouchEnd={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
