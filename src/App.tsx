import React, { useState } from "react";
import { InputHelper, OperatorHelper, expressionParser } from "./utils";
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
    const addFormulaForOperator = (e: any) => {
        e.preventDefault();
        if (InputHelper.canInputOperator(formula, e.target.value) === true) {
            setFormula(formula + e.target.value);
        }
    };
    const addFormulaForOperand = (e: any) => {
        e.preventDefault();
        setFormula(formula + e.target.value);
    };
    const calculate = (e: any) => {
        e.preventDefault();
        if (formula !== "" && InputHelper.canCalculate(formula[formula.length - 1]) === true) setResult(expressionParser(formula));
        setFormula("");
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-5 bg-black rounded transparency">
                <div className="display-parent display">
                    <div className="text-end fs-3 font-light m-1">{formula}</div>
                    <div className="text-end font-lg display-answer font-light m-1">{result}</div>
                </div>
                <div className="buttons">
                    <button type="button" className="bg-command btn-lg col-3 rounded transparency-button font-light" onClick={restart}>
                        AC
                    </button>
                    <button type="button" className="bg-command btn-lg col-3 rounded transparency-button font-light" onClick={changeCord}>
                        +/-
                    </button>
                    <button type="button" className="bg-command btn-lg col-3 rounded transparency-button font-light" value="%" onClick={addFormulaForOperator}>
                        %
                    </button>
                    <button type="button" className="bg-operator btn-lg col-3 rounded font-light" value="÷" onClick={addFormulaForOperator}>
                        ÷
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="7" onClick={addFormulaForOperand}>
                        7
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="8" onClick={addFormulaForOperand}>
                        8
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="9" onClick={addFormulaForOperand}>
                        9
                    </button>
                    <button type="button" className="bg-operator btn-lg col-3 rounded font-light" value="×" onClick={addFormulaForOperator}>
                        ×
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="4" onClick={addFormulaForOperand}>
                        4
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="5" onClick={addFormulaForOperand}>
                        5
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="6" onClick={addFormulaForOperand}>
                        6
                    </button>
                    <button type="button" className="bg-operator btn-lg col-3 rounded font-light" value="-" onClick={addFormulaForOperator}>
                        -
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="1" onClick={addFormulaForOperand}>
                        1
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="2" onClick={addFormulaForOperand}>
                        2
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="3" onClick={addFormulaForOperand}>
                        3
                    </button>
                    <button type="button" className="bg-operator btn-lg col-3 rounded font-light" value="+" onClick={addFormulaForOperator}>
                        +
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-6 rounded font-light" value="0" onClick={addFormulaForOperand}>
                        0
                    </button>
                    <button type="button" className="bg-secondary btn-lg col-3 rounded font-light" value="." onClick={addFormulaForOperator}>
                        .
                    </button>
                    <button type="button" className="bg-operator btn-lg col-3 rounded font-light" onClick={calculate}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
